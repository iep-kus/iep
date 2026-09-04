const labels = [
    'Bratislavský',
    'Trnavský',
    'Trenčiansky',
    'Nitriansky',
    'Žilinský',
    'Banskobystrický',
    'Prešovský',
    'Košický'
]

const series = [
    { year: '2011', color: '#fff0e3', values: [15.5, 13.8, 14.2, 12.3, 12.5, 16.5, 12.5, 8.8] },
    { year: '2014', color: '#ffdab8', values: [20.4, 18.1, 17.7, 14.5, 16.0, 19.3, 13.8, 14.2] },
    { year: '2017', color: '#ffc58e', values: [24.9, 27.0, 27.8, 32.4, 32.8, 35.1, 24.7, 31.8] },
    { year: '2020', color: '#f9a75e', values: [52.3, 51.4, 47.3, 46.2, 46.7, 46.0, 45.7, 39.2] },
    { year: '2023', color: '#fb8622', values: [57.8, 60.0, 55.2, 55.8, 53.7, 55.5, 51.0, 45.2] }
]

const datasets = series.flatMap(item => [
    {
        label: `${item.year} – vytriedené`,
        stack: item.year,
        data: item.values,
        backgroundColor: item.color,
        borderColor: '#ffffff',
        borderWidth: 1
    },
    {
        label: `${item.year} – netriedené`,
        stack: item.year,
        data: item.values.map(value => Number((100 - value).toFixed(1))),
        backgroundColor: '#e5e5e5',
        borderColor: '#ffffff',
        borderWidth: 1
    }
])

export default {
    type: 'graf',
    id: 'triedenie-odpadu-kraje',
    slug: 'graf-triedenie-odpadu-kraje',
    title: 'Vývoj priemernej miery triedenia odpadu v krajoch',
    description: `Stacked stĺpce porovnávajú podiel triedeného a netriedeného komunálneho
        odpadu v jednotlivých krajoch v rokoch 2011, 2014, 2017, 2020 a 2023.`,
    graphType: 'bar',
    data: {
        labels,
        datasets
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'top',
            labels: {
                generateLabels: chart => [
                    ...series.map((item, index) => ({
                        text: item.year,
                        fillStyle: item.color,
                        strokeStyle: '#ffffff',
                        datasetIndex: index * 2
                    })),
                    {
                        text: 'Netriedené',
                        fillStyle: '#e5e5e5',
                        strokeStyle: '#ffffff',
                        datasetIndex: 1
                    }
                ]
            },
            onClick: () => {}
        },
        tooltips: {
            mode: 'nearest',
            intersect: true,
            callbacks: {
                label(tooltipItem, data) {
                    const dataset = data.datasets[tooltipItem.datasetIndex]
                    return `${dataset.label}: ${tooltipItem.yLabel.toLocaleString('sk-SK')} %`
                }
            }
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: { display: false },
                ticks: { autoSkip: false, maxRotation: 35, minRotation: 35 }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    callback: value => `${value} %`
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Podiel odpadu'
                }
            }]
        }
    }
}
