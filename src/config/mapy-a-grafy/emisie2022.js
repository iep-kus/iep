export default {
  type: 'emissions',
  id: 'emisie-2022',
  slug: 'emisie-2022',
  title: 'Emisie skleníkových plynov v rokoch 2022 – 2024',
  description: `Emisie skleníkových plynov na Slovensku medzi rokmi 2022 a 2024 klesli. Porovnanie používa pre všetky roky rovnaké sektorové členenie a umožňuje sledovať celkovú zmenu aj zmenu štruktúry emisií. Najväčší pokles nastal v energetike bez dopravy a v priemyselných procesoch.`,
  source: {
    title: 'Národná inventarizačná správa 2026 (SHMÚ)',
    url: 'https://oeab.shmu.sk/o-nas/dokumenty.html'
  },
  categories: [
    { id: 'energy', label: 'Energetika bez dopravy', shortLabel: 'Energetika', color: '#FB8622' },
    { id: 'transport', label: 'Doprava', shortLabel: 'Doprava', color: '#99362B' },
    { id: 'industry', label: 'Priemyselné procesy', shortLabel: 'Priemysel', color: '#28758C' },
    { id: 'agriculture', label: 'Poľnohospodárstvo', shortLabel: 'Poľnohosp.', color: '#F2B116', darkLabel: true },
    { id: 'waste', label: 'Odpady', shortLabel: 'Odpady', color: '#8FBECD', darkLabel: true }
  ],
  years: [
    {
      year: 2022,
      values: { energy: 17.90903, transport: 7.89863, industry: 7.53625, agriculture: 2.00126, waste: 1.77082 }
    },
    {
      year: 2023,
      values: { energy: 17.21479, transport: 7.87079, industry: 7.27490, agriculture: 2.54567, waste: 1.70761 }
    },
    {
      year: 2024,
      values: { energy: 15.67595, transport: 7.72007, industry: 6.80247, agriculture: 2.00699, waste: 1.66644 }
    }
  ]
}
