import L from 'leaflet'


// ============================================================
// FAREBNÁ ŠKÁLA – MAPA 1: VODNÉ
// ============================================================

const getColorVodne = value => {
    if (value == null) return '#bfbfbf'
    else if (value <= 0.5) return '#ffffff'
    else if (value <= 1.0) return '#c9dde2'
    else if (value <= 1.5) return '#93bac6'
    else if (value <= 2.0) return '#5e97a9'
    else return '#28758c'
}


// ============================================================
// FAREBNÁ ŠKÁLA – MAPA 2: STOČNÉ
// ============================================================

const getColorStocne = value => {
    if (value == null) return '#bfbfbf'
    else if (value <= 1.0) return '#ffffff'
    else if (value <= 1.5) return '#fee1c8'
    else if (value <= 2.0) return '#fdc391'
    else if (value <= 2.5) return '#fca459'
    else return '#fb8622'
}


const VODNE_PROPERTY = 'cena_vodne'
const STOCNE_PROPERTY = 'cena_stocne'


const priceFormatter = new Intl.NumberFormat('sk-SK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3
})

const createPricePopup = (label, propertyName, unavailableText) => feature => {
    const rawValue = feature.properties[propertyName]
    const numericValue = typeof rawValue === 'number'
        ? rawValue
        : Number(String(rawValue).replace(',', '.'))
    const hasPrice = rawValue != null &&
        rawValue !== '' &&
        Number.isFinite(numericValue)
    const price = hasPrice
        ? `${priceFormatter.format(numericValue)} eur/m³`
        : unavailableText

    return `
        <div style="font-family:'chivo';">
            <strong>Obec:</strong> ${feature.properties.NM2 ?? 'neznáma obec'}
            <br>
            <strong>${label}:</strong> ${price}
        </div>
    `
}


// ============================================================
// SPOLOČNÉ NASTAVENIE POHĽADU
// ============================================================

const createView = () => ({
    center: [48.669, 19.699],
    zoom: 8,

    // celé Slovensko v zábere:
    fitTo: '/mapy/hranice_SVK.geojson'
})


// ============================================================
// SPOLOČNÉ VRSTVY PRE OBE MAPY
// ============================================================

const createBoundaryLayers = () => [
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
]


// ============================================================
// UNIVERZÁLNA FUNKCIA PRE LEGENDU
// ============================================================

const createLegend = (grades, getColor) => ({
    render() {
        const div = L.DomUtil.create('div', 'info legend')

        const renderGrades = grades.map(g => `
            <div style="
                display:flex;
                align-items:center;
                gap:8px;
                margin-bottom:4px;
            ">
                <div style="
                    width:18px;
                    height:18px;
                    background:${g.color || getColor(g.value)};
                "></div>

                <span>${g.label}</span>
            </div>
        `).join('')

        div.innerHTML = renderGrades

        return div
    },

    position: 'bottomright'
})


// ============================================================
// LEGENDA – VODNÉ
// ============================================================

const legendVodne = createLegend(
    [
        {
            label: 'Nedostupné údaje',
            color: '#bfbfbf'
        },
        {
            label: '0 – 0,5',
            value: 0.5
        },
        {
            label: '0,5 – 1',
            value: 0.75
        },
        {
            label: '1 – 1,5',
            value: 1.25
        },
        {
            label: '1,5 – 2',
            value: 1.75
        },
        {
            label: '2 – 2,6',
            value: 2.3
        }
    ],
    getColorVodne
)


// ============================================================
// LEGENDA – STOČNÉ
// ============================================================

const legendStocne = createLegend(
    [
        {
            label: 'Bez kanalizácie',
            color: '#bfbfbf'
        },
        {
            label: '0 – 1',
            value: 1.0
        },
        {
            label: '1 – 1,5',
            value: 1.25
        },
        {
            label: '1,5 – 2',
            value: 1.75
        },
        {
            label: '2 – 2,5',
            value: 2.25
        },
        {
            label: '2,5 – 3,5',
            value: 3.0
        }
    ],
    getColorStocne
)


// ============================================================
// HLAVNÁ VIZUALIZÁCIA
// ============================================================

export default {

    type: 'mapa',

    id: 'vodne-stocne',
    slug: 'mapa-vodne-stocne',

    // spoločný nadpis pre obe mapy:
    title: 'Koľko platíme za vodu',

    // spoločný popis pre obe mapy:
    description: `
        V súčasnosti zaplatí zákazník regionálnej spoločnosti za 1 m3 vodného
        a 1 m3 stočného spolu v priemere 3,8 eur s DPH, ceny sa však medzi
        dodávateľmi výrazne líšia (Mapa 1, Mapa 2). V niektorých regiónoch
        Slovenska sú podmienky na poskytovanie vodárenských služieb náročnejšie,
        čo môže viesť k vyšším nákladom, a tým aj k cenám nad priemerom sektora.
        Dôvodom sú najmä neovplyvniteľné faktory ako geografické podmienky,
        počet a vzdialenosť odberateľov, dostupnosť, kvalita a typ vodného zdroja.
        Ceny ovplyvňuje aj efektivita hospodárenia jednotlivých spoločností,
        miera investičnej aktivity a regulačné faktory. Od roku 2025 väčšina
        spoločností účtovne precenila majetok, čo zvýšilo ceny v priemere o 16 %.
    `,


    // ========================================================
    // DVE MAPY
    // ========================================================

    maps: [

        // ====================================================
        // MAPA 1 – VODNÉ
        // ====================================================

        {
            id: 'vodne',

            title: 'Mapa 1: Cena vodného na m3 (v eur s DPH)',

            view: createView(),

            layers: [
                {
                    path: '/mapy/obce.geojson',
                    dataPath: '/mapy/data/vodne.json',
                    joinBy: 'IDN2',
                    valueProperty: VODNE_PROPERTY,

                    style: feature => ({
                        fillColor: getColorVodne(
                            feature.properties[VODNE_PROPERTY]
                        ),

                        color: '#595959',
                        weight: 0.2,
                        fillOpacity: 0.8
                    }),

                    popup: createPricePopup(
                        'Cena vodného',
                        VODNE_PROPERTY,
                        'údaj nie je dostupný'
                    ),

                    alwaysOnBottom: true
                },

                ...createBoundaryLayers()
            ],

            // samostatná legenda pre vodné:
            legend: legendVodne
        },


        // ====================================================
        // MAPA 2 – STOČNÉ
        // ====================================================

        {
            id: 'stocne',

            title: 'Mapa 2: Cena stočného za m3 (v eur s DPH)',

            view: createView(),

            layers: [
                {
                    path: '/mapy/obce.geojson',
                    dataPath: '/mapy/data/stocne.json',
                    joinBy: 'IDN2',
                    valueProperty: STOCNE_PROPERTY,

                    style: feature => ({
                        fillColor: getColorStocne(
                            feature.properties[STOCNE_PROPERTY]
                        ),

                        color: '#595959',
                        weight: 0.2,
                        fillOpacity: 0.8
                    }),

                    popup: createPricePopup(
                        'Cena stočného',
                        STOCNE_PROPERTY,
                        'bez kanalizácie'
                    ),

                    alwaysOnBottom: true
                },

                ...createBoundaryLayers()
            ],

            // samostatná legenda pre stočné:
            legend: legendStocne
        }
    ]
}
