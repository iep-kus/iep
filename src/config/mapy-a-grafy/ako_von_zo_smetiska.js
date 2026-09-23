import mieraTriedeniaOdpadu from './miera_triedenia_odpadu.js'

const studySource = {
    title: 'Ako von zo smetiska – Model odpadového hospodárstva SR',
    url: 'https://www.minzp.sk/files/iep/analyzy/ako_von_zo_smetiska_iep_aktualizacia_februar2024.pdf'
}

const percentAxis = {
    ticks: {
        beginAtZero: true,
        max: 70,
        callback: value => `${value} %`
    },
    scaleLabel: {
        display: true,
        labelString: 'Podiel komunálneho odpadu'
    }
}

const scenarioChart = {
    graphType: 'bar',
    data: {
        labels: [
            ['Bez ďalších', 'opatrení'],
            ['Plánované', 'opatrenia'],
            ['Dodatočné', 'opatrenia']
        ],
        datasets: [
            {
                label: 'Miera recyklácie',
                data: [51, 53, 62],
                backgroundColor: '#fb8622',
                borderColor: '#fb8622',
                borderWidth: 1
            },
            {
                label: 'Miera skládkovania',
                data: [39, 4, 4],
                backgroundColor: '#bfbfbf',
                borderColor: '#bfbfbf',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'top'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label(tooltipItem, data) {
                    const dataset = data.datasets[tooltipItem.datasetIndex]
                    return `${dataset.label}: ${tooltipItem.yLabel} %`
                }
            }
        },
        scales: {
            xAxes: [{
                gridLines: { display: false },
                ticks: { autoSkip: false }
            }],
            yAxes: [percentAxis]
        }
    }
}

const measuresChart = {
    graphType: 'horizontalBar',
    data: {
        labels: [
            ['Množstvový', 'zber'],
            ['Zber od dverí', 'k dverám'],
            ['Bioodpad v bytových', 'domoch s košíkmi'],
            ['Bioodpad v rodinných', 'domoch'],
            ['Triedený zber', 'textilu']
        ],
        datasets: [{
            label: 'Pokles zmesového komunálneho odpadu',
            data: [22, 15, 7, 6, 2],
            backgroundColor: [
                '#fb8622',
                '#f99d50',
                '#fbb476',
                '#fdc99d',
                '#ffdfc4'
            ],
            borderColor: '#ffffff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        tooltips: {
            callbacks: {
                label: tooltipItem => `Odhadovaný pokles: ${tooltipItem.xLabel} %`
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 35,
                    callback: value => `${value} %`
                }
            }],
            yAxes: [{
                gridLines: { display: false },
                ticks: {
                    autoSkip: false
                }
            }]
        }
    }
}

export default {
    type: 'report',
    id: 'ako-von-zo-smetiska',
    slug: 'ako-von-zo-smetiska',
    kicker: 'Ekonomická analýza 16 · september 2023',
    title: 'Ako von zo smetiska',
    description: `Stručný vizuálny sprievodca analýzou, ktorá modeluje budúci vývoj
        komunálneho odpadu na Slovensku a porovnáva účinky plánovaných aj dodatočných opatrení.`,
    highlights: [
        {
            value: '41 %',
            label: 'komunálneho odpadu sa na Slovensku v roku 2021 skládkovalo'
        },
        {
            value: '65 %',
            label: 'je cieľ miery recyklácie komunálneho odpadu do roku 2035'
        },
        {
            value: '10 %',
            label: 'je maximálna cieľová miera skládkovania do roku 2035'
        }
    ],
    sections: [
        {
            id: 'vyzva',
            type: 'text',
            title: 'Slovensko triedi viac, stále však priveľa skládkuje',
            paragraphs: [
                `Miera recyklácie komunálneho odpadu sa v roku 2021 priblížila priemeru
                Európskej únie. Skládkovanie však dosahovalo 41 %, kým priemer EÚ bol 23 %.`,
                `Analýza preto nehodnotí iba súčasný stav. Pomocou modelu porovnáva, ako
                plánované a dodatočné opatrenia ovplyvnia recykláciu, skládkovanie aj náklady.`
            ]
        },
        {
            id: 'scenare',
            type: 'graph',
            title: 'Dodatočné opatrenia nás k cieľu priblížia najviac',
            description: `Scenár s plánovanými opatreniami výrazne obmedzuje skládkovanie,
                na cieľ recyklácie však nestačí. Komfortnejší zber kuchynského bioodpadu
                a celoplošný množstvový zber zvyšujú modelovanú mieru recyklácie na 62 %.`,
            ...scenarioChart,
            source: studySource
        },
        {
            id: 'opatrenia',
            type: 'graph',
            title: 'Najväčší potenciál má množstvový zber',
            description: `Graf ukazuje priemerný odhad poklesu zmesového komunálneho odpadu
                pri vybraných opatreniach. Skutočný účinok závisí aj od dostupnosti infraštruktúry,
                nastavenia poplatkov a kombinácie viacerých opatrení.`,
            ...measuresChart,
            source: studySource
        },
        {
            id: 'obce',
            type: 'map',
            title: 'Doplňujúci pohľad: ako triedia jednotlivé obce',
            description: `Mapa dopĺňa výsledky štúdie o územný pohľad na mieru triedenia
                komunálneho odpadu v obciach v roku 2023. Po prejdení kurzorom alebo ťuknutí
                na obec sa zobrazí jej hodnota.`,
            layers: mieraTriedeniaOdpadu.layers,
            view: mieraTriedeniaOdpadu.view,
            legend: mieraTriedeniaOdpadu.legend,
            source: mieraTriedeniaOdpadu.source
        },
        {
            id: 'zaver',
            type: 'text',
            title: 'Čo z analýzy vyplýva',
            paragraphs: [
                `Plánované opatrenia by mali znížiť mieru skládkovania pod cieľovú hranicu,
                ale samotné nestačia na splnenie cieľa recyklácie. Dodatočné opatrenia sú
                účinnejšie, vyžadujú však lepšie nastavený zber a regionálne kapacity.`,
                `Dlhodobé rozhodovanie potrebuje jasnú stratégiu a kvalitnejšie údaje.
                Plánované kapacity na energetické využitie odpadu podľa analýzy presahujú
                potreby Slovenska a môžu brzdiť rast recyklácie.`
            ]
        }
    ],
    links: [
        {
            title: 'Prečítať celú analýzu',
            url: studySource.url,
            primary: true
        },
        {
            title: 'Všetky podklady k štúdii',
            url: 'https://cms.minzp.sk/iep/publikacie/ekonomicke-analyzy/ako-von-zo-smetiska.html'
        }
    ]
}
