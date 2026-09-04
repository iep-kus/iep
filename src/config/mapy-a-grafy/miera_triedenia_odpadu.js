import L from 'leaflet'

const VALUE_PROPERTY = 'miera_triedenia'

const getColor = value => {
    if (value == null) return '#bfbfbf'
    if (value <= 0.2) return '#ffffff'
    if (value <= 0.4) return '#ffe4bf'
    if (value <= 0.6) return '#ffc980'
    if (value <= 0.8) return '#ffae40'
    return '#ff9300'
}

const percentFormatter = new Intl.NumberFormat('sk-SK', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
})

const formatPercent = value => value == null
    ? 'údaj nie je dostupný'
    : `${percentFormatter.format(value * 100)} %`

export default {
    type: 'mapa',
    id: 'miera-triedenia-odpadu',
    slug: 'mapa-miera-triedenia-odpadu',
    title: 'Miera triedenia komunálneho odpadu v obciach v roku 2023',
    description: `Mapa zobrazuje podiel vytriedeného komunálneho odpadu v jednotlivých
        obciach Slovenska v roku 2023. Tmavšia oranžová farba označuje vyššiu mieru triedenia.`,

    view: {
        center: [48.669, 19.699],
        zoom: 8,
        fitTo: '/mapy/hranice_SVK.geojson'
    },

    layers: [
        {
            path: '/mapy/obce.geojson',
            dataPath: '/mapy/data/miera-triedenia-odpadu.json',
            joinBy: 'IDN2',
            valueProperty: VALUE_PROPERTY,
            style: feature => ({
                fillColor: getColor(feature.properties[VALUE_PROPERTY]),
                color: '#595959',
                weight: 0.2,
                fillOpacity: 0.8
            }),
            popup: feature => `
                <div style="font-family:'chivo';">
                    <strong>Obec:</strong> ${feature.properties.NM2}<br>
                    <strong>Okres:</strong> ${feature.properties.NM3}<br>
                    <strong>Miera triedenia:</strong> ${formatPercent(feature.properties[VALUE_PROPERTY])}
                </div>`,
            alwaysOnBottom: true
        },
        {
            path: '/mapy/vojenske_obvody.geojson',
            style: {
                fillColor: '#bfbfbf',
                color: '#595959',
                weight: 0.2,
                fillOpacity: 0.8
            },
            interactive: false
        },
        {
            path: '/mapy/hranice_SVK.geojson',
            style: {
                color: '#595959',
                weight: 0.7,
                fillOpacity: 0
            },
            interactive: false
        },
        {
            path: '/mapy/hranice_okresy_small.geojson',
            style: {
                color: '#595959',
                weight: 0.5,
                fillOpacity: 0
            },
            interactive: false,
            alwaysOnTop: true
        }
    ],

    legend: {
        render() {
            const div = L.DomUtil.create('div', 'info legend')
            const grades = [
                { value: null, label: 'Nedostupné údaje' },
                { value: 0, label: '0 – 20 %' },
                { value: 0.21, label: '20 – 40 %' },
                { value: 0.41, label: '40 – 60 %' },
                { value: 0.61, label: '60 – 80 %' },
                { value: 0.81, label: '80 – 100 %' }
            ]

            div.innerHTML = grades.map(grade => `
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <div style="width:18px;height:18px;background:${getColor(grade.value)};"></div>
                    <span>${grade.label}</span>
                </div>
            `).join('')
            return div
        },
        position: 'bottomright'
    }
}
