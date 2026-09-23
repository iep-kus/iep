import mieraTriedeniaOdpadu from './miera_triedenia_odpadu.js'

const studySource = {
    title: 'Ako von zo smetiska – Model odpadového hospodárstva SR',
    url: 'https://www.minzp.sk/files/iep/analyzy/ako_von_zo_smetiska_iep_aktualizacia_februar2024.pdf'
}

const areaDataset = (label, data, color) => ({
    label,
    data,
    backgroundColor: color,
    borderColor: color,
    borderWidth: 1,
    pointRadius: 0,
    pointHoverRadius: 4,
    fill: true,
    stack: 'waste',
    yAxisID: 'waste'
})

const datasetLegend = chart => chart.data.datasets.map((dataset, datasetIndex) => ({
    text: dataset.label,
    fillStyle: dataset.type === 'line' ? '#ffffff' : dataset.backgroundColor,
    strokeStyle: dataset.borderColor,
    lineWidth: dataset.type === 'line' ? 2 : 0,
    hidden: !chart.isDatasetVisible(datasetIndex),
    datasetIndex
}))

const wasteCompositionChart = {
    graphType: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
            areaDataset('Zmesový komunálny odpad', [224.3, 222, 217.7, 215.5, 218.2, 220, 218, 216.2, 215.4, 210.7, 209.7, 200.5], '#fb8622'),
            areaDataset('Kovy', [1.9, 2.5, 2.3, 1, 3.3, 5.7, 20.3, 40.3, 62.7, 61.6, 68, 82.1], '#9f3f1f'),
            areaDataset('Triedený zber', [22.8, 24.2, 27.9, 29.6, 31.3, 34, 35.1, 40.9, 49.1, 55.3, 60.3, 69.8], '#f6c344'),
            areaDataset('Bioodpad', [17.7, 16.8, 18.1, 18.6, 23.1, 25.5, 28.9, 34.5, 40.2, 49.3, 55.1, 67.6], '#e8652a'),
            areaDataset('Iný komunálny odpad z domácností', [47.1, 42.5, 38, 37.3, 39.6, 42.2, 42.7, 43.8, 45.2, 43.7, 41.8, 39.9], '#f8ad73'),
            areaDataset('Komunálny odpad mimo domácností', [null, null, null, null, null, null, null, null, null, null, 40.3, 37.9], '#f4c4ae'),
            {
                type: 'line',
                label: 'Priemer EÚ',
                data: [null, 499, 488, 479, 478, 480, 493, 499, 500, 504, 521, 530],
                backgroundColor: 'transparent',
                borderColor: '#28758c',
                borderDash: [7, 5],
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 4,
                fill: false,
                spanGaps: true,
                yAxisID: 'euAverage'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'top',
            labels: { boxWidth: 14, fontSize: 11, generateLabels: datasetLegend }
        },
        tooltips: {
            mode: 'nearest',
            intersect: false,
            callbacks: {
                title(tooltipItems, data) {
                    if (!tooltipItems.length) return ''
                    return `Rok ${data.labels[tooltipItems[0].index]}`
                },
                label(tooltipItem, data) {
                    const dataset = data.datasets[tooltipItem.datasetIndex]
                    const value = Number(tooltipItem.yLabel).toLocaleString('sk-SK', { maximumFractionDigits: 1 })
                    return `${dataset.label}: ${value} kg/obyv.`
                }
            }
        },
        hover: { mode: 'nearest', intersect: false },
        scales: {
            xAxes: [{ gridLines: { display: false }, ticks: { autoSkip: true, maxTicksLimit: 12 } }],
            yAxes: [
                {
                    id: 'waste',
                    stacked: true,
                    ticks: { beginAtZero: true, max: 600 },
                    scaleLabel: { display: true, labelString: 'kg na obyvateľa' }
                },
                {
                    id: 'euAverage',
                    stacked: false,
                    display: false,
                    ticks: { beginAtZero: true, max: 600 },
                    gridLines: { display: false }
                }
            ]
        }
    }
}

const mixedWasteChart = {
    graphType: 'doughnut',
    data: {
        labels: ['Papier', 'Plasty, kovové obaly a VKM', 'Sklo', 'Bioodpad', 'Textil', 'Iné'],
        values: [8.7, 15, 5.3, 32, 4.7, 34],
        backgroundColor: ['#f6c344', '#e8652a', '#28758c', '#fb8622', '#9f3f1f', '#bfbfbf']
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 52,
        legend: { display: true, position: 'top', labels: { boxWidth: 14, fontSize: 11 } },
        tooltips: {
            callbacks: {
                label(tooltipItem, data) {
                    const label = data.labels[tooltipItem.index]
                    const value = data.datasets[0].data[tooltipItem.index].toLocaleString('sk-SK', { maximumFractionDigits: 1 })
                    return `${label}: ${value} %`
                }
            }
        },
        centerText: {
            text: ['Zmesový odpad', '2020 – 2023'],
            color: '#595959',
            fontSize: 18,
            lineHeight: 24,
            fontFamily: 'chivo-bold'
        }
    }
}

const materialFlowSankey = {
    columns: [
        ['Triedený zber', 'Zmesový komunálny odpad'],
        ['Záhradný bioodpad', 'Papier', 'Sklo', 'Plasty, kovové obaly a VKM', 'Kuchynský bioodpad'],
        ['Recyklácia', 'Skládkovanie', 'Energetické využitie']
    ],
    colors: {
        'Triedený zber': '#28758C',
        'Zmesový komunálny odpad': '#FB8622',
        'Záhradný bioodpad': '#FFC08A',
        'Papier': '#F2B116',
        'Sklo': '#8FBECD',
        'Plasty, kovové obaly a VKM': '#FB8622',
        'Kuchynský bioodpad': '#DC9790',
        'Recyklácia': '#28758C',
        'Skládkovanie': '#99362B',
        'Energetické využitie': '#F2B116'
    },
    links: [
        { source: 'Triedený zber', target: 'Kuchynský bioodpad', value: 24935 },
        { source: 'Triedený zber', target: 'Papier', value: 99250 },
        { source: 'Triedený zber', target: 'Plasty, kovové obaly a VKM', value: 99446 },
        { source: 'Triedený zber', target: 'Sklo', value: 83538 },
        { source: 'Triedený zber', target: 'Záhradný bioodpad', value: 333983 },
        { source: 'Zmesový komunálny odpad', target: 'Kuchynský bioodpad', value: 260965 },
        { source: 'Zmesový komunálny odpad', target: 'Papier', value: 100562 },
        { source: 'Zmesový komunálny odpad', target: 'Plasty, kovové obaly a VKM', value: 154829 },
        { source: 'Zmesový komunálny odpad', target: 'Sklo', value: 40162 },
        { source: 'Zmesový komunálny odpad', target: 'Záhradný bioodpad', value: 87188 },
        { source: 'Kuchynský bioodpad', target: 'Energetické využitie', value: 42536 },
        { source: 'Kuchynský bioodpad', target: 'Recyklácia', value: 24935 },
        { source: 'Kuchynský bioodpad', target: 'Skládkovanie', value: 218429 },
        { source: 'Papier', target: 'Energetické využitie', value: 16391 },
        { source: 'Papier', target: 'Recyklácia', value: 96002 },
        { source: 'Papier', target: 'Skládkovanie', value: 87419 },
        { source: 'Plasty, kovové obaly a VKM', target: 'Energetické využitie', value: 60033 },
        { source: 'Plasty, kovové obaly a VKM', target: 'Recyklácia', value: 48423 },
        { source: 'Plasty, kovové obaly a VKM', target: 'Skládkovanie', value: 145819 },
        { source: 'Sklo', target: 'Recyklácia', value: 78926 },
        { source: 'Sklo', target: 'Skládkovanie', value: 44774 },
        { source: 'Záhradný bioodpad', target: 'Energetické využitie', value: 14211 },
        { source: 'Záhradný bioodpad', target: 'Recyklácia', value: 333983 },
        { source: 'Záhradný bioodpad', target: 'Skládkovanie', value: 72977 }
    ]
}

export default {
    type: 'report',
    id: 'ako-von-zo-smetiska',
    slug: 'ako-von-zo-smetiska',
    kicker: 'Ekonomická analýza 16 · september 2023',
    title: 'Ako von zo smetiska',
    titleUrl: studySource.url,
    description: `Odpadové hospodárstvo na Slovensku sa v posledných rokoch zlepšilo,
        stále však zaostáva za väčšinou krajín EÚ. Analýza ukazuje, kde komunálny odpad
        vzniká, ako sa triedi a spracúva a čo by priniesli plánované aj dodatočné opatrenia.
        Pomocou modelu porovnáva ich vplyv na recykláciu, skládkovanie, náklady aj potrebné
        kapacity na spracovanie odpadu.`,
    highlights: [
        { value: '41 %', label: 'komunálneho odpadu sa na Slovensku v roku 2021 skládkovalo' },
        { value: '65 %', label: 'je cieľ miery recyklácie komunálneho odpadu do roku 2035' },
        { value: '10 %', label: 'je maximálna cieľová miera skládkovania do roku 2035' }
    ],
    sections: [
        {
            id: 'vyzva',
            type: 'text',
            title: 'Slovensko triedi viac, stále však zaostáva',
            paragraphs: [
                `V roku 2021 vyprodukoval priemerný obyvateľ Slovenska 496 kg komunálneho
                odpadu. Je to menej ako priemer EÚ na úrovni 530 kg, no produkcia na Slovensku
                od roku 2011 rástla rýchlejšie. Súvisí to s rastom životnej úrovne aj s presnejšou
                evidenciou odpadu.`,
                `K lepším výsledkom nestačí iba viac triediť. Dôležité je aj to, koľko odpadu
                vzniká, akú časť vytriedených zložiek sa podarí skutočne recyklovať a či má
                Slovensko primerané kapacity na ich spracovanie. Analýza preto prepája pohľad
                na materiálové toky s nákladmi a dôsledkami jednotlivých opatrení.`
            ]
        },
        {
            id: 'zlozky-odpadu',
            type: 'graph',
            title: 'Triedime viac, zmesového odpadu však ubúda pomaly',
            description: `Zmesový komunálny odpad zostáva najväčšou zložkou. V roku 2021
                pripadalo na obyvateľa približne 200 kg, o desatinu menej ako v roku 2010.
                Triedený zber spolu s bioodpadom sa za rovnaké obdobie viac než strojnásobil
                na približne 137 kg na obyvateľa. Prerušovaná čiara ukazuje celkový priemer
                produkcie komunálneho odpadu v EÚ. Nová definícia komunálneho odpadu od roku
                2020 rozšírila evidenciu aj o odpad mimo domácností; zlom v dátach preto
                nepredstavuje jednorazový fyzický nárast odpadu.`,
            ...wasteCompositionChart
        },
        {
            id: 'zlozenie-zmesoveho-odpadu',
            type: 'graph',
            title: 'Tretinu zmesového odpadu tvorí bioodpad',
            description: `Podľa analýz zloženia tvoril záhradný, kuchynský a potravinový
                bioodpad približne 32 % zmesového komunálneho odpadu. Ďalších takmer 30 %
                predstavovali obaly a neobalové výrobky, ktoré by mali byť súčasťou triedeného
                zberu. Odhad vychádza z analýz zloženia JRK za roky 2020 až 2023; nejde
                o samostatné porovnateľné údaje za každý rok. Presné hodnoty sa zobrazia po
                prejdení kurzorom alebo ťuknutí na výsek.`,
            ...mixedWasteChart
        },
        {
            id: 'materialove-toky',
            type: 'sankey',
            title: 'Vytriedenie ešte automaticky neznamená recykláciu',
            description: `Materiálové toky ukazujú, ako sa v roku 2021 vybrané zložky
                komunálneho odpadu zbierali a ako sa s nimi následne nakladalo. Hrúbka prúdu
                zodpovedá množstvu odpadu. Súčet pri každej zložke je uvedený priamo v grafe;
                presnú hodnotu jednotlivého toku zobrazíte prejdením kurzorom alebo ťuknutím.`,
            ...materialFlowSankey
        },
        {
            id: 'materialove-toky-text',
            type: 'text',
            title: 'Najväčšie rezervy sú pri bioodpade a plastoch',
            paragraphs: [
                `Jednotlivé zložky sa darí triediť a recyklovať veľmi rozdielne. Analýza
                odhaduje, že v roku 2021 sa recyklovalo približne 64 % skla a 48 % papiera.
                Pri plastoch, kovových obaloch a viacvrstvových kombinovaných materiáloch sa
                vytriedilo iba 39 % odpadu a z tohto množstva sa recyklovala necelá polovica.`,
                `Až 57 % bioodpadu skončilo ako súčasť zmesového odpadu na skládke alebo
                v zariadení na energetické využitie. Výsledok preto nezávisí iba od ochoty
                domácností triediť, ale aj od kvality zberu a dostupných recyklačných kapacít.`
            ]
        },
        {
            id: 'obce',
            type: 'map',
            label: 'Doplňujúce údaje · 2023',
            title: 'Ako triedia jednotlivé obce',
            description: `Táto mapa nebola súčasťou pôvodnej štúdie. Dopĺňame ju ako novší
                územný pohľad na mieru triedenia komunálneho odpadu v obciach v roku 2023.
                Po prejdení kurzorom alebo ťuknutí na obec sa zobrazí jej hodnota.`,
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
                samy však nestačia na splnenie cieľa recyklácie. Pri dôslednej implementácii
                by recyklácia dosiahla 53 %. Komfortnejší zber kuchynského bioodpadu a
                celoplošný množstvový zber by ju podľa modelu zvýšili na 62 %.`,
                `Dlhodobé rozhodovanie potrebuje jasnú stratégiu a kvalitnejšie údaje.
                Plánované kapacity na energetické využitie odpadu podľa analýzy presahujú
                potreby Slovenska, môžu vytvárať závislosť od produkcie odpadu a brzdiť rast
                recyklácie.`
            ]
        }
    ],
    materialsUrl: 'https://cms.minzp.sk/iep/publikacie/ekonomicke-analyzy/ako-von-zo-smetiska.html'
}
