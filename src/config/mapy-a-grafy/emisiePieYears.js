const categoryMeta = {
  electricity: { sectorId: 'energy', label: 'Elektrárne', shortLabel: 'Elektrárne', color: '#9b6046' },
  heat: { sectorId: 'energy', label: 'Teplárne', shortLabel: 'Teplárne', color: '#b47b61' },
  buildings: { sectorId: 'energy', label: 'Domácnosti a inštitúcie', shortLabel: 'Vykurovanie', color: '#c39a78' },
  fugitive: { sectorId: 'energy', label: 'Fugitívne emisie', shortLabel: 'Fugitívne', color: '#d5b99b' },
  other_energy: { sectorId: 'energy', label: 'Ostatná energetika', shortLabel: 'Ostatná energia', color: '#e1cdb8' },
  metals: { sectorId: 'industry', label: 'Kovospracujúci priemysel', shortLabel: 'Kovy', color: '#315f70' },
  minerals: { sectorId: 'industry', label: 'Minerály a stavebníctvo', shortLabel: 'Minerály', color: '#5f8290' },
  chemicals: { sectorId: 'industry', label: 'Chemický priemysel a rafinérie', shortLabel: 'Chémia', color: '#7e9eaa' },
  other_industry: { sectorId: 'industry', label: 'Ostatný priemysel', shortLabel: 'Ostatný priem.', color: '#a2bac2' },
  cars: { sectorId: 'transport', label: 'Autá a motocykle', shortLabel: 'Osobná doprava', color: '#7d3c38' },
  freight: { sectorId: 'transport', label: 'Nákladná a autobusová doprava', shortLabel: 'Nákladná doprava', color: '#a1645d' },
  other_transport: { sectorId: 'transport', label: 'Ostatná doprava', shortLabel: 'Ostatná doprava', color: '#c49a94' },
  livestock: { sectorId: 'other', label: 'Živočíšna výroba', shortLabel: 'Živočíšna výroba', color: '#b29235' },
  crops: { sectorId: 'other', label: 'Rastlinná výroba', shortLabel: 'Rastlinná výroba', color: '#c4aa5f' },
  waste: { sectorId: 'other', label: 'Odpadové hospodárstvo', shortLabel: 'Odpady', color: '#d5c48e' }
}

const category = (id, share) => ({ id, share, ...categoryMeta[id] })
const company = (name, categoryId, share, valueKt) => ({ name, categoryId, share, valueKt })

export default [
  {
    year: 2022,
    totalMt: 37.11727332759744,
    lulucfShare: 19.4673267639,
    sourceFile: '2022/Kolacovy Graf (2022) - USE ME.xlsm',
    sectors: [
      { id: 'energy', label: 'Energetika', share: 23.9464068842, color: '#8f553f' },
      { id: 'industry', label: 'Priemysel', share: 44.5679999848, color: '#244f60' },
      { id: 'transport', label: 'Doprava', share: 20.9574864805, color: '#6f332f' },
      { id: 'other', label: 'Poľnohospodárstvo a odpady', shortLabel: 'Poľnohosp. a odpady', share: 10.5254965779, color: '#9f8027' }
    ],
    categories: [
      category('electricity', 3.7861536530), category('heat', 5.1669747925),
      category('buildings', 12.9738893926), category('fugitive', 1.8513284457),
      category('other_energy', 0.1680606003), category('metals', 20.5377208954),
      category('minerals', 9.8573078015), category('chemicals', 9.2255132593),
      category('other_industry', 4.9474580286), category('cars', 12.3967733225),
      category('freight', 8.2523476581), category('other_transport', 0.3083654999),
      category('livestock', 3.4729790270), category('crops', 1.8529962042),
      category('waste', 5.1995213467)
    ],
    companies: [
      company('Nováky', 'electricity', 2.8957380315, 1074.819),
      company('Vojany', 'electricity', 0.6237661855, 231.525),
      company('Malženice', 'electricity', 0.2512522921, 93.258),
      company('Košice', 'heat', 0.7659641307, 284.305),
      company('Žilina', 'heat', 0.4987758620, 185.132),
      company('PPC', 'heat', 0.5271777328, 195.674),
      company('Veolia', 'heat', 0.2958864975, 109.825),
      company('Martin', 'heat', 0.1703627296, 63.234),
      company('Bratislava', 'heat', 0.2931761691, 108.819),
      company('Považská Bystrica', 'heat', 0.3348629596, 124.292),
      company('Zvolen', 'heat', 0.0127568638, 4.735),
      company('U. S. Steel', 'metals', 13.1817252760, 4892.697),
      company('Ferroenergy', 'metals', 6.5308272475, 2424.065),
      company('Slovalco', 'metals', 0.3628149051, 134.667),
      company('OFZ', 'metals', 0.2061951031, 76.534),
      company('Podbrezová', 'metals', 0.2126691778, 78.937),
      company('Kovohuty', 'metals', 0.0434891859, 16.142),
      company('Danucem', 'minerals', 3.6907614089, 1369.910),
      company('Ladce', 'minerals', 1.2653785095, 469.674),
      company('Carmeuse', 'minerals', 1.1845185828, 439.661),
      company('CEMMAC', 'minerals', 0.7548318475, 280.173),
      company('SMZ Jelšava', 'minerals', 0.7459788265, 276.887),
      company('Slovnaft', 'chemicals', 6.0691607924, 2252.707),
      company('Duslo', 'chemicals', 2.3612645042, 876.437),
      company('Mondi', 'other_industry', 0.1595537460, 59.222)
    ]
  },
  {
    year: 2023,
    totalMt: 36.07365865471155,
    lulucfShare: 21.5548529782,
    sourceFile: '2023 - post/Kolacovy Graf (2023v1) - USE ME.xlsm',
    sectors: [
      { id: 'energy', label: 'Energetika', share: 23.2035382113, color: '#8f553f' },
      { id: 'industry', label: 'Priemysel', share: 44.6698524010, color: '#244f60' },
      { id: 'transport', label: 'Doprava', share: 21.4437233546, color: '#6f332f' },
      { id: 'other', label: 'Poľnohospodárstvo a odpady', shortLabel: 'Poľnohosp. a odpady', share: 10.6828860332, color: '#9f8027' }
    ],
    categories: [
      category('electricity', 3.9533112337), category('heat', 5.0272709839),
      category('buildings', 12.2513837227), category('fugitive', 1.7894736907),
      category('other_energy', 0.1820985803), category('metals', 22.3807822691),
      category('minerals', 8.6162422613), category('chemicals', 9.0142264818),
      category('other_industry', 4.6586013888), category('cars', 12.6354113997),
      category('freight', 8.4824735221), category('other_transport', 0.3258384328),
      category('livestock', 3.7315615587), category('crops', 2.3167437800),
      category('waste', 4.6345806944)
    ],
    companies: [
      company('Nováky', 'electricity', 2.6844712627, 968.387),
      company('Vojany', 'electricity', 0.3221824576, 116.223),
      company('Malženice', 'electricity', 0.9388124538, 338.664),
      company('Košice', 'heat', 0.6567201910, 236.903),
      company('Žilina', 'heat', 0.5068379721, 182.835),
      company('PPC', 'heat', 0.2368154581, 85.428),
      company('Veolia', 'heat', 0.2992931796, 107.966),
      company('Martin', 'heat', 0.0936445075, 33.781),
      company('Bratislava', 'heat', 0.2759769974, 99.555),
      company('Považská Bystrica', 'heat', 0.2885873069, 104.104),
      company('Zvolen', 'heat', 0.0034762207, 1.254),
      company('U. S. Steel', 'metals', 14.9014826898, 5375.510),
      company('Ferroenergy', 'metals', 7.1775697186, 2589.212),
      company('Slovalco', 'metals', 0.0654715958, 23.618),
      company('OFZ', 'metals', 0.0226287000, 8.163),
      company('Podbrezová', 'metals', 0.1782186848, 64.290),
      company('Kovohuty', 'metals', 0.0354108801, 12.774),
      company('Danucem', 'minerals', 3.2715811038, 1180.179),
      company('Ladce', 'minerals', 1.1025108482, 397.716),
      company('Carmeuse', 'minerals', 1.1488382810, 414.428),
      company('CEMMAC', 'minerals', 0.7719843520, 278.483),
      company('SMZ Jelšava', 'minerals', 0.5606999887, 202.265),
      company('Slovnaft', 'chemicals', 6.2684797837, 2261.270),
      company('Duslo', 'chemicals', 2.2288839835, 804.040),
      company('Mondi', 'other_industry', 0.1639950097, 59.159)
    ]
  },
  {
    year: 2024,
    totalMt: 33.87191323509232,
    lulucfShare: 14.7339311753,
    sourceFile: '2024/Kolacovy Graf (2024v1) - USE ME.xlsm',
    sectors: [
      { id: 'energy', label: 'Energetika', share: 21.5512676175, color: '#8f553f' },
      { id: 'industry', label: 'Priemysel', share: 44.8116658400, color: '#244f60' },
      { id: 'transport', label: 'Doprava', share: 22.7919618787, color: '#6f332f' },
      { id: 'other', label: 'Poľnohospodárstvo a odpady', shortLabel: 'Poľnohosp. a odpady', share: 10.8450533452, color: '#9f8027' }
    ],
    categories: [
      category('electricity', 1.7217893656), category('heat', 5.3288133210),
      category('buildings', 12.5128987055), category('fugitive', 1.7759837248),
      category('other_energy', 0.2117825005), category('metals', 21.7627978344),
      category('minerals', 8.9738095196), category('chemicals', 9.2688961261),
      category('other_industry', 4.8061623598), category('cars', 14.1212602529),
      category('freight', 8.3725680675), category('other_transport', 0.2981335584),
      category('livestock', 4.0197844741), category('crops', 1.9054496589),
      category('waste', 4.9198192122)
    ],
    companies: [
      company('Vojany', 'electricity', 0.4459358376, 151.047),
      company('Malženice', 'electricity', 1.2620308662, 427.474),
      company('Košice', 'heat', 0.5699382809, 193.049),
      company('Žilina', 'heat', 0.5201477660, 176.184),
      company('PPC', 'heat', 0.3842268935, 130.145),
      company('Veolia', 'heat', 0.3013853965, 102.085),
      company('Martin', 'heat', 0.1953654036, 66.174),
      company('Bratislava', 'heat', 0.2388999979, 80.920),
      company('Považská Bystrica', 'heat', 0.3262171795, 110.496),
      company('Zvolen', 'heat', 0.0032918129, 1.115),
      company('U. S. Steel', 'metals', 13.9382678718, 4721.158),
      company('Ferroenergy', 'metals', 7.2193737125, 2445.340),
      company('Slovalco', 'metals', 0.1118389733, 37.882),
      company('OFZ', 'metals', 0.2063243358, 69.886),
      company('Podbrezová', 'metals', 0.2105667888, 71.323),
      company('Kovohuty', 'metals', 0.0764261523, 25.887),
      company('Danucem', 'minerals', 3.3629957425, 1139.111),
      company('Ladce', 'minerals', 1.2687296316, 429.743),
      company('Carmeuse', 'minerals', 1.1917779701, 403.678),
      company('CEMMAC', 'minerals', 0.7680316084, 260.147),
      company('SMZ Jelšava', 'minerals', 0.5249777264, 177.820),
      company('Slovnaft', 'chemicals', 5.9176255740, 2004.413),
      company('Duslo', 'chemicals', 2.9201981982, 989.127),
      company('Mondi', 'other_industry', 0.2124680690, 71.967)
    ]
  }
]
