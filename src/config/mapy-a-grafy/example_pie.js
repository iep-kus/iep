export default {
  type: 'graf',
  id: 'pie-example',
  slug: 'pie-example',
  title: 'Podiel výskytov v kategóriách',
  description: 'Toto je príklad koláčového grafu.',
  graphType: 'pie',
  data: {
    labels: ['Kategória 1', 'Kategória 2', 'Kategória 3', 'Kategória 4'],
    values: [10, 5, 3, 7],
    backgroundColor: ['#FB8622','#FFC08A','#28758C','#8FBECD']
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
}
