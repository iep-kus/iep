export default {
  // typ vizualizácie:
  type: 'graf',
  // unikátny id a slug:
  id: 'doughnut-example',
  slug: 'doughnut-example',
  // názov:
  title: 'Podiel výskytov v kategóriách',
  // popis:
  description: 'Toto je príklad "doughnut" grafu. Vyjadruje to isté ako koláčový graf ale má iný vizuál.',
  // typ grafu (line, doughnut, bar, pie):
  graphType: 'doughnut',
  // hodnoty, ktoré chceme v grafe zobraziť, spolu s názvom, hodnotou a farbou
  data: {
    labels: ['Kategória 1', 'Kategória 2', 'Kategória 3', 'Kategória 4'],
    values: [10, 5, 3, 7],
    backgroundColor: ['#FB8622','#FFC08A','#28758C','#8FBECD']
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    // legenda sa pri tomto grafe default-ne nezobrazuje, lebo po prejdení kurzorom na graf sa názvy kategórií a ich hodnoc´ty zobrazia tak či tak
    legend: {
      display: false
    }
  }
}
