export default {
  type: 'graf',
  id: 'bar-example',
  slug: 'bar-example',
  title: 'Počet výskytov na kategóriu',
  description: 'Toto je príklad stĺpcového grafu.',
  graphType: 'bar', 
  data: {
    labels: ['Kategória 1', 'Kategória 2', 'Kategória 3', 'Kategória 4'],
    values: [10, 5, 3, 7],
    backgroundColor: ['#FB8622','#FFC08A','#28758C','#8FBECD'],
    icons: ['\uf14e', '\uf084', '\uf2dc', '\uf5d1'],
    iconSize: 50,
    iconColor: '#FFFFFF'
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}
