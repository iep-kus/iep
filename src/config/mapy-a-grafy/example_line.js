export default {
  type: 'graf',
  id: 'line-example',
  slug: 'line-example',
  title: 'Porovnanie trendov v čase',
  description: 'Príklad viacerých čiar na jednom grafe.',
  graphType: 'line',

  data: {
    labels: ['2019', '2020', '2021', '2022', '2023', ''],
    datasets: [
      {
        // názov trendu, nepovinný:
        label: 'Trend 1',
        // body cez ktoré má čiara prechádzať:
        data: [12, 15, 14, 16, 13, 10],
        // farba čiary:
        borderColor: '#28758C',
        // farba výplne pod čiarou:
        // posledné dva znaky farby definujú úroveň priehľadnosti (00 transparentné, FF úplne nepriehľadné)
        backgroundColor: '#28758C33',
        borderWidth: 3,
        fill: false
      },
      {
        label: 'Trend 2',
        data: [9, 10, 14, 13, 14, 15],
        borderColor: '#FB8622',
        backgroundColor: '#FB862233',
        borderWidth: 3,
        fill: true
      }
    ]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: { beginAtZero: true }
        }
      ]
    }
  }
}


