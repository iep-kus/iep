<template>
  <section class="emissions-comparison">
    <div class="view-switcher" role="group" aria-label="Spôsob zobrazenia grafu">
      <button
        v-for="view in views"
        :key="view.id"
        type="button"
        class="view-button"
        :class="{ active: activeView === view.id }"
        :aria-pressed="activeView === view.id ? 'true' : 'false'"
        @click="activeView = view.id"
      >
        {{ view.label }}
      </button>
    </div>

    <div class="headline-metrics">
      <div v-for="year in normalizedYears" :key="year.year" class="metric-card">
        <span class="metric-year">{{ year.year }}</span>
        <strong>{{ formatNumber(year.total) }}</strong>
        <span>Mt CO₂e</span>
      </div>
      <div class="metric-card change-card">
        <span class="metric-year">Zmena 2022 – 2024</span>
        <strong>{{ formatPercent(totalChange) }}</strong>
        <span>{{ formatNumber(Math.abs(totalDifference)) }} Mt CO₂e</span>
      </div>
    </div>

    <div v-if="activeView === 'comparison'" class="comparison-view">
      <div class="section-heading">
        <h3>Emisie podľa sektorov</h3>
        <p>Rovnaká mierka umožňuje porovnať celkovú výšku aj zloženie emisií.</p>
      </div>

      <div class="bar-chart" role="img" :aria-label="comparisonAriaLabel">
        <div v-for="year in normalizedYears" :key="year.year" class="bar-row">
          <strong class="bar-year">{{ year.year }}</strong>
          <div class="bar-track">
            <div
              v-for="segment in year.segments"
              :key="segment.id"
              class="bar-segment"
              :class="{ 'dark-label': segment.darkLabel }"
              :style="{ width: `${segment.value / chartMaximum * 100}%`, backgroundColor: segment.color }"
              :title="`${segment.label}: ${formatNumber(segment.value)} Mt CO₂e`"
            >
              <span v-if="segment.value >= 3">{{ formatNumber(segment.value) }}</span>
            </div>
          </div>
          <strong class="bar-total">{{ formatNumber(year.total) }}</strong>
        </div>

        <div class="axis-row" aria-hidden="true">
          <span></span>
          <div class="axis">
            <span v-for="tick in axisTicks" :key="tick">{{ tick }}</span>
          </div>
          <span class="axis-unit">Mt CO₂e</span>
        </div>
      </div>

      <div class="legend" aria-label="Legenda sektorov">
        <span v-for="category in categories" :key="category.id">
          <i :style="{ backgroundColor: category.color }"></i>{{ category.label }}
        </span>
      </div>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th scope="col">Sektor</th>
              <th v-for="year in normalizedYears" :key="year.year" scope="col">{{ year.year }}</th>
              <th scope="col">Zmena 22 – 24</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categoryRows" :key="category.id">
              <th scope="row">
                <i :style="{ backgroundColor: category.color }"></i>{{ category.label }}
              </th>
              <td v-for="value in category.values" :key="value.year">
                {{ formatNumber(value.value) }}
              </td>
              <td :class="changeClass(category.change)">{{ formatPercent(category.change) }}</td>
            </tr>
            <tr class="total-row">
              <th scope="row">Spolu</th>
              <td v-for="year in normalizedYears" :key="year.year">{{ formatNumber(year.total) }}</td>
              <td :class="changeClass(totalChange)">{{ formatPercent(totalChange) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else-if="activeView === 'donuts'" class="donuts-view">
      <div class="section-heading">
        <h3>Štruktúra emisií v jednotlivých rokoch</h3>
        <p>Hodnoty a podiely sú uvedené trvalo pod každým grafom.</p>
      </div>
      <div class="donut-grid">
        <article v-for="year in normalizedYears" :key="year.year" class="donut-card">
          <h4>{{ year.year }}</h4>
          <div
            class="donut"
            :style="{ background: donutGradient(year) }"
            role="img"
            :aria-label="donutAriaLabel(year)"
          >
            <div class="donut-center">
              <strong>{{ formatNumber(year.total) }}</strong>
              <span>Mt CO₂e</span>
            </div>
          </div>
          <ul class="donut-values">
            <li v-for="segment in year.segments" :key="segment.id">
              <i :style="{ backgroundColor: segment.color }"></i>
              <span>{{ segment.shortLabel }}</span>
              <strong>{{ formatNumber(segment.value) }}</strong>
              <small>{{ formatShare(segment.value / year.total * 100) }}</small>
            </li>
          </ul>
        </article>
      </div>
    </div>

    <div v-else class="single-view">
      <div class="section-heading">
        <h3>Detail jedného roka</h3>
        <p>Vyberte rok; všetky hodnoty zostanú viditeľné aj bez podržania kurzora.</p>
      </div>
      <div class="year-switcher" role="group" aria-label="Vybrať rok">
        <button
          v-for="year in normalizedYears"
          :key="year.year"
          type="button"
          :class="{ active: selectedYear === year.year }"
          :aria-pressed="selectedYear === year.year ? 'true' : 'false'"
          @click="selectedYear = year.year"
        >
          {{ year.year }}
        </button>
      </div>
      <div class="single-content">
        <div
          class="donut large-donut"
          :style="{ background: donutGradient(currentYear) }"
          role="img"
          :aria-label="donutAriaLabel(currentYear)"
        >
          <div class="donut-center">
            <strong>{{ formatNumber(currentYear.total) }}</strong>
            <span>Mt CO₂e</span>
          </div>
        </div>
        <div class="single-details">
          <h4>Emisie podľa sektorov</h4>
          <ul class="single-values">
            <li v-for="segment in currentYear.segments" :key="segment.id">
              <i :style="{ backgroundColor: segment.color }"></i>
              <span>{{ segment.label }}</span>
              <strong>{{ formatNumber(segment.value) }} Mt</strong>
              <small>{{ formatShare(segment.value / currentYear.total * 100) }}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p class="method-note">
      Hodnoty sú v Mt CO₂e bez sektora LULUCF. Energetika je uvedená bez dopravy, ktorá je zobrazená samostatne.
      Súčet sektorov sa môže mierne líšiť od národného celku vrátane nepriamych emisií.
    </p>
  </section>
</template>

<script>
export default {
  name: 'EmissionsComparison',
  props: {
    years: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeView: 'comparison',
      selectedYear: 2024,
      views: [
        { id: 'comparison', label: 'Porovnanie' },
        { id: 'donuts', label: 'Koláče vedľa seba' },
        { id: 'single', label: 'Jeden rok' }
      ],
      chartMaximum: 40,
      axisTicks: [0, 10, 20, 30, 40]
    }
  },
  computed: {
    normalizedYears() {
      return this.years.map(year => {
        const segments = this.categories.map(category => ({
          ...category,
          value: year.values[category.id]
        }))
        return {
          ...year,
          segments,
          total: segments.reduce((sum, segment) => sum + segment.value, 0)
        }
      })
    },
    currentYear() {
      return this.normalizedYears.find(year => year.year === this.selectedYear) || this.normalizedYears[0]
    },
    totalDifference() {
      const first = this.normalizedYears[0].total
      const last = this.normalizedYears[this.normalizedYears.length - 1].total
      return last - first
    },
    totalChange() {
      return this.totalDifference / this.normalizedYears[0].total * 100
    },
    categoryRows() {
      return this.categories.map(category => {
        const values = this.normalizedYears.map(year => ({
          year: year.year,
          value: year.values[category.id]
        }))
        return {
          ...category,
          values,
          change: (values[values.length - 1].value - values[0].value) / values[0].value * 100
        }
      })
    },
    comparisonAriaLabel() {
      return this.normalizedYears
        .map(year => `${year.year}: spolu ${this.formatNumber(year.total)} megatony ekvivalentu CO2`)
        .join('; ')
    }
  },
  methods: {
    formatNumber(value) {
      return new Intl.NumberFormat('sk-SK', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      }).format(value)
    },
    formatPercent(value, digits = 1) {
      const prefix = value > 0 ? '+' : ''
      return `${prefix}${new Intl.NumberFormat('sk-SK', {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
      }).format(value)} %`
    },
    formatShare(value) {
      return `${new Intl.NumberFormat('sk-SK', {
        maximumFractionDigits: 0
      }).format(value)} %`
    },
    changeClass(value) {
      return value < 0 ? 'change-down' : 'change-up'
    },
    donutGradient(year) {
      let start = 0
      const stops = year.segments.map(segment => {
        const end = start + segment.value / year.total * 100
        const stop = `${segment.color} ${start}% ${end}%`
        start = end
        return stop
      })
      return `conic-gradient(${stops.join(', ')})`
    },
    donutAriaLabel(year) {
      const segments = year.segments
        .map(segment => `${segment.label} ${this.formatNumber(segment.value)} megatony`)
        .join(', ')
      return `Emisie v roku ${year.year}. Spolu ${this.formatNumber(year.total)} megatony ekvivalentu CO2. ${segments}.`
    }
  }
}
</script>

<style scoped>
.emissions-comparison {
  color: #595959;
  margin: 0 auto;
  max-width: 1180px;
}

.view-switcher,
.year-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}

.view-button,
.year-switcher button {
  background: #f2f3f1;
  border: 1px solid #dde0dc;
  border-radius: 999px;
  color: #595959;
  cursor: pointer;
  font-family: 'chivo-bold';
  padding: 0.65rem 1.1rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.view-button:hover,
.view-button.active,
.year-switcher button:hover,
.year-switcher button.active {
  background: #28758c;
  border-color: #28758c;
  color: #ffffff;
}

.view-button:focus-visible,
.year-switcher button:focus-visible {
  outline: 3px solid rgba(40, 117, 140, 0.32);
  outline-offset: 2px;
}

.headline-metrics {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 3rem;
}

.metric-card {
  background: #f7f7f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-height: 120px;
  padding: 1rem 1.15rem;
}

.metric-card strong {
  color: #28758c;
  font-family: 'chivo-bold';
  font-size: 1.75rem;
  line-height: 1.15;
  margin: auto 0 0.2rem;
}

.metric-card span:last-child {
  font-size: 0.85rem;
}

.metric-year {
  font-family: 'chivo-bold';
  font-size: 0.86rem;
}

.change-card {
  background: #fff4eb;
  border-left: 4px solid #fb8622;
}

.change-card strong {
  color: #99362b;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h3,
.donut-card h4,
.single-details h4 {
  color: #595959;
  font-family: 'chivo-bold';
}

.section-heading h3 {
  margin-bottom: 0.35rem;
}

.section-heading p {
  margin: 0;
}

.bar-chart {
  background: #ffffff;
  border: 1px solid #eeeeea;
  border-radius: 10px;
  padding: 2rem 1.5rem 1rem;
}

.bar-row,
.axis-row {
  align-items: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: 56px minmax(0, 1fr) 78px;
}

.bar-row {
  margin-bottom: 1.4rem;
}

.bar-year,
.bar-total {
  font-family: 'chivo-bold';
}

.bar-total {
  text-align: right;
}

.bar-track {
  background: #edf0ee;
  border-radius: 5px;
  display: flex;
  height: 54px;
  overflow: hidden;
}

.bar-segment {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'chivo-bold';
  font-size: 0.82rem;
  justify-content: center;
  min-width: 0;
}

.bar-segment.dark-label {
  color: #4b4b42;
}

.axis {
  border-top: 1px solid #aeb5b1;
  display: flex;
  justify-content: space-between;
  padding-top: 0.35rem;
}

.axis span,
.axis-unit {
  font-size: 0.75rem;
}

.axis-unit {
  text-align: right;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin: 1.25rem 0 2rem;
}

.legend span,
.data-table th:first-child,
.donut-values li,
.single-values li {
  align-items: center;
  display: flex;
}

.legend i,
.data-table i,
.donut-values i,
.single-values i {
  border-radius: 2px;
  display: inline-block;
  flex: 0 0 auto;
  height: 0.75rem;
  margin-right: 0.45rem;
  width: 0.75rem;
}

.data-table-wrap {
  overflow-x: auto;
}

.data-table {
  border-collapse: collapse;
  min-width: 650px;
  width: 100%;
}

.data-table th,
.data-table td {
  border-bottom: 1px solid #e4e6e3;
  padding: 0.85rem 0.75rem;
  text-align: right;
}

.data-table th:first-child {
  min-width: 230px;
  text-align: left;
}

.data-table thead th {
  color: #777771;
  font-size: 0.78rem;
  text-transform: uppercase;
}

.total-row th,
.total-row td {
  border-top: 2px solid #b9bdb9;
  font-family: 'chivo-bold';
}

.change-down {
  color: #28758c;
  font-family: 'chivo-bold';
}

.change-up {
  color: #99362b;
  font-family: 'chivo-bold';
}

.donut-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.donut-card {
  background: #ffffff;
  border: 1px solid #eeeeea;
  border-radius: 10px;
  padding: 1.25rem;
}

.donut-card h4 {
  font-size: 1.35rem;
  margin-bottom: 1rem;
  text-align: center;
}

.donut {
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 220px;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  width: 220px;
}

.donut::after {
  background: #ffffff;
  border-radius: 50%;
  content: '';
  height: 58%;
  position: absolute;
  width: 58%;
}

.donut-center {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.donut-center strong {
  color: #595959;
  font-family: 'chivo-bold';
  font-size: 1.6rem;
}

.donut-center span {
  font-size: 0.72rem;
}

.donut-values,
.single-values {
  list-style: none;
  margin: 0;
  padding: 0;
}

.donut-values li,
.single-values li {
  border-bottom: 1px solid #eeeeea;
  min-height: 40px;
}

.donut-values li:last-child,
.single-values li:last-child {
  border-bottom: 0;
}

.donut-values span,
.single-values span {
  flex: 1 1 auto;
}

.donut-values strong,
.single-values strong {
  font-family: 'chivo-bold';
  margin-left: 0.5rem;
  white-space: nowrap;
}

.donut-values small,
.single-values small {
  color: #777771;
  margin-left: 0.5rem;
  min-width: 42px;
  text-align: right;
}

.year-switcher {
  justify-content: center;
}

.single-content {
  align-items: center;
  display: grid;
  gap: 4rem;
  grid-template-columns: minmax(300px, 0.8fr) minmax(360px, 1.2fr);
  margin: 2.5rem auto;
  max-width: 900px;
}

.large-donut {
  height: 310px;
  margin-bottom: 0;
  width: 310px;
}

.large-donut .donut-center strong {
  font-size: 2.15rem;
}

.single-details h4 {
  margin-bottom: 1rem;
}

.single-values li {
  min-height: 48px;
}

.method-note {
  border-top: 1px solid #e4e6e3;
  color: #777771;
  font-size: 0.82rem;
  line-height: 1.55;
  margin: 3rem 0 0;
  padding-top: 1rem;
}

@media only screen and (max-width: 950px) {
  .headline-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .donut-grid {
    grid-template-columns: 1fr;
  }

  .donut-card {
    display: grid;
    grid-template-columns: 230px minmax(0, 1fr);
  }

  .donut-card h4 {
    grid-column: 1 / -1;
  }

  .donut {
    height: 190px;
    margin-bottom: 0;
    width: 190px;
  }

  .single-content {
    gap: 2rem;
  }
}

@media only screen and (max-width: 768px) {
  .view-switcher {
    align-items: stretch;
    flex-direction: column;
  }

  .view-button {
    text-align: left;
  }

  .headline-metrics {
    margin-bottom: 2.25rem;
  }

  .metric-card {
    min-height: 108px;
  }

  .bar-chart {
    padding: 1.25rem 0.75rem 0.75rem;
  }

  .bar-row,
  .axis-row {
    gap: 0.5rem;
    grid-template-columns: 42px minmax(0, 1fr) 56px;
  }

  .bar-track {
    height: 46px;
  }

  .bar-segment {
    font-size: 0.72rem;
  }

  .bar-total {
    font-size: 0.82rem;
  }

  .donut-card {
    display: block;
  }

  .donut {
    margin-bottom: 1.5rem;
  }

  .single-content {
    display: flex;
    flex-direction: column;
  }

  .large-donut {
    height: 260px;
    width: 260px;
  }

  .single-details {
    width: 100%;
  }
}

@media only screen and (max-width: 480px) {
  .headline-metrics {
    grid-template-columns: 1fr;
  }

  .metric-card {
    min-height: 96px;
  }

  .bar-segment span {
    display: none;
  }

  .legend {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
