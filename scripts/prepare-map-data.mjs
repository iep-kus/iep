import { mkdir, readFile, writeFile } from 'fs/promises'
import { dirname, extname } from 'path'

const [, , inputPath, outputPath, idColumn, ...valueColumns] = process.argv

if (!inputPath || !outputPath || !idColumn || valueColumns.length === 0) {
    console.error(
        'Použitie: node scripts/prepare-map-data.mjs <vstup.csv|geojson> ' +
        '<výstup.json> <ID stĺpec> <hodnotový stĺpec> [ďalší stĺpec ...]'
    )
    process.exit(1)
}

const parseCsv = text => {
    const input = text.replace(/^\uFEFF/, '')
    const firstLine = input.split(/\r?\n/, 1)[0]
    const candidates = [',', ';', '\t']
    const delimiter = candidates.reduce((best, candidate) =>
        firstLine.split(candidate).length > firstLine.split(best).length
            ? candidate
            : best
    )

    const rows = []
    let row = []
    let field = ''
    let quoted = false

    for (let index = 0; index < input.length; index += 1) {
        const character = input[index]

        if (character === '"') {
            if (quoted && input[index + 1] === '"') {
                field += '"'
                index += 1
            } else {
                quoted = !quoted
            }
        } else if (character === delimiter && !quoted) {
            row.push(field)
            field = ''
        } else if ((character === '\n' || character === '\r') && !quoted) {
            if (character === '\r' && input[index + 1] === '\n') index += 1
            row.push(field)
            if (row.some(value => value !== '')) rows.push(row)
            row = []
            field = ''
        } else {
            field += character
        }
    }

    row.push(field)
    if (row.some(value => value !== '')) rows.push(row)

    const headers = rows.shift().map(header => header.trim())
    return rows.map(values => Object.fromEntries(
        headers.map((header, index) => [header, values[index] ?? ''])
    ))
}

const normalizeValue = rawValue => {
    if (rawValue == null || String(rawValue).trim() === '') return null

    if (typeof rawValue === 'number') return rawValue

    const trimmedValue = String(rawValue).trim()
    const normalizedNumber = trimmedValue.replace(/\s/g, '').replace(',', '.')
    if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(normalizedNumber)) {
        return trimmedValue
    }

    const numericValue = Number(normalizedNumber)

    if (!Number.isFinite(numericValue)) {
        throw new Error(`Neplatná číselná hodnota: ${rawValue}`)
    }

    return numericValue
}

const extension = extname(inputPath).toLowerCase()
const input = await readFile(inputPath, 'utf8')
const records = extension === '.csv'
    ? parseCsv(input)
    : JSON.parse(input).features.map(feature => feature.properties)

const valuesByMunicipality = {}

for (const record of records) {
    const municipalityId = String(record[idColumn] ?? '').trim().replace(/\.0$/, '')

    if (!municipalityId) {
        throw new Error(`Chýba hodnota v ID stĺpci „${idColumn}“.`)
    }

    if (Object.prototype.hasOwnProperty.call(valuesByMunicipality, municipalityId)) {
        throw new Error(`Duplicitné ID obce: ${municipalityId}`)
    }

    valuesByMunicipality[municipalityId] = valueColumns.length === 1
        ? normalizeValue(record[valueColumns[0]])
        : Object.fromEntries(valueColumns.map(column => [
            column,
            normalizeValue(record[column])
        ]))
}

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, JSON.stringify(valuesByMunicipality), 'utf8')

console.log(`Zapísaných ${records.length} obcí do ${outputPath}`)
