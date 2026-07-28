export default {
  type: 'graf',
  id: 'doughnut-multi',
  slug: 'doughnut-multi',
  title: 'Podiel výskytov v kategóriách a podkategóriách',
  description: 'Toto je príklad "doughnut" grafu, ktorý má dve vrsty.',
  // tento doughnut bude mať viac vrstiev, ale definujeme ho rovnako a obyčajný doughnut
  graphType: 'doughnut',
  data: [
    {
      // ako prvú definujeme vonkajšiu vrstvu:
      // názvy kategórií v poradí:
      labels: ['Podkategória 1', 'Podkategória 2', 'Podkategória 3'],
      // hodnoty:
      values: [10, 5, 3],
      // farby:
      backgroundColor: ['#FB8622', '#FFC08A', '#28758C'],
      // ak chceme aby na častiach grafu boli malé obrázky/ikonky, pridáme ich tu. 
      // používame ikony zo stránky https://fontawesome.com/icons a napíšme '/u....' kde .... je unicode značenie danej ikony
      icons: ['\uf14e', '\uf084', '\uf2dc'],
      // veľkosť ikon:
      iconSize: 50,
      // farba ikon:
      iconColor: '#FFFFFF'
    },
    {
      // Inner layer: subcategories
      labels: ['Kategória 1', 'Kategória 2', 'Kategória 3'],
      values: [12, 4, 2],
      backgroundColor: ['#8FBECD', '#99362B', '#DC9790'],
    }
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 40,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        enabled: true
      }
    }
  }
}

