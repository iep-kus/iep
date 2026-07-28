export default {
  type: 'graf',
  id: 'emisie-2022',
  slug: 'emisie-2022',
  title: 'Emisie sklenníkových plynov v roku 2022',
  description: `Viac ako dve tretiny emisií sklenníkových plynov na Slovensku pochádzali aj v roku 2022 zo sektorov priemyslu 
    a energetiky Elektrina sa vyrábala prevažne z bezemisných zdrojov, najmä z jadra (59 %) a vody (15 %), zostatok emisií zodpovedal 
    menšiemu podielu výroby z uhlia (6 %) a zemného plynu (8 %) (SEPS, 2022). Kovospracujúci priemysel, najmä výroba železa a ocele, 
    bol zodpovedný za pätinu celkových emisií. Emisie z vykurovania pochádzali z teplární a vyhrevní (v prípade centrálneho zásobovania), 
    ale aj z domácností a inštitúcií, kde sa využíval zemný plyn, uhlie a biomasa, ktorá v prípade nedostatočného vysušenia produkuje 
    pri horení emisie metánu. Približne pätina emisí pochádzala z cestnej dopravy, najmä z osobných a ťažkých úžitkových vozidiel. 
    Menší podiel emisií pripadal na poľnohospodárstvo a odpadové hospodárstvo (SHMÚ, 2024).`,
  graphType: 'doughnut',
  data: [
    {
      labels: [
        'Elektrárne', 'Teplárne', 'Výroba energií v domácnostiach a inštitúciách', 'Fugitívne emisie', 'Ostatné energie',
        'Kovospracujúci priemysel', 'Stavebný priemysel', 'Chemický priemysel', 'Ostatný priemysel',
        'Osobná doprava', 'Nákladná a autobusová doprava', 'Ostatná doprava',
        'Živočíšna výroba', 'Rastlinná výroba', 'Odpadové hospodárstvo'
      ],
      values: [
        4.0, 5.0, 12.3, 1.8, 0.2,
        22.2, 8.6, 9.0, 4.8,
        12.6, 8.5, 0.3,
        3.7, 2.3, 4.6
      ],
      backgroundColor: [
        '#FFC08A', '#FFC08A', '#FFC08A', '#FFC08A', '#FFC08A', 
        '#8FBECD', '#8FBECD', '#8FBECD', '#8FBECD',
        '#DC9790', '#DC9790', '#DC9790',
        '#FFDC8A', '#FFDC8A', '#FFDC8A'
      ]
    },
    {
      labels: ['Energetika', 'Priemysel', 'Doprava', 'Poľnohospodárstvo'],
      values: [23.2, 44.7, 21.4, 10.7],
      backgroundColor: ['#FB8622', '#28758C', '#99362B', '#F2B116'],
      icons: ['\uf0e7', '\uf275', '\uf1b9', '\uf06c'],
      iconSize: 50,
      iconColor: '#FFFFFF'
    }
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 40,
    showPercentages: true,
    legend: {
      display: false
    },
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        enabled: true
      }
    },
    centerText: {
      text: ['37.01', 'megaton', 'CO₂'],
      fontSize: 40,
      fontFamily: 'chivo-bold',
      color: '#595959',
      lineHeight: 50
    }
  }
}