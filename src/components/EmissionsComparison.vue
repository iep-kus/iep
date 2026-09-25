<template>
  <section class="emissions-comparison">
    <div class="headline-metrics">
      <div v-for="year in normalizedYears" :key="year.year" class="metric-card">
        <span class="metric-year">{{ year.year }}</span>
        <strong>{{ formatMt(year.total) }}</strong>
        <span>Mt CO₂e</span>
      </div>
      <div class="metric-card change-card">
        <span class="metric-year">Zmena 2022 – 2024</span>
        <strong>{{ formatPercent(totalChange) }}</strong>
        <span>{{ formatMt(Math.abs(totalDifference)) }} Mt CO₂e</span>
      </div>
    </div>

    <div class="section-switcher" role="tablist" aria-label="Úroveň detailu">
      <button
        type="button"
        role="tab"
        :aria-selected="activeSection === 'categories' ? 'true' : 'false'"
        :class="{ active: activeSection === 'categories' }"
        @click="activeSection = 'categories'"
      >
        Odvetvia a podkategórie
      </button>
      <button
        type="button"
        role="tab"
        :aria-selected="activeSection === 'companies' ? 'true' : 'false'"
        :class="{ active: activeSection === 'companies' }"
        @click="activeSection = 'companies'"
      >
        Firmy v EU ETS
      </button>
    </div>

    <div v-if="activeSection === 'categories'" class="categories-view">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Národná inventúra</p>
          <h3>Emisie podľa odvetví</h3>
        </div>
        <p>
          Každý riadok porovnáva všetky tri roky. Kliknutím na odvetvie zobrazíte jeho vnútorné členenie.
        </p>
      </div>

      <div class="category-chart" role="list" aria-label="Porovnanie emisií podľa odvetví">
        <button
          v-for="row in categoryRows"
          :key="row.id"
          type="button"
          class="category-row"
          :class="{ active: activeCategory === row.id }"
          role="listitem"
          @click="activeCategory = row.id"
        >
          <span class="category-name">
            <i :style="{ backgroundColor: row.color }"></i>
            <span>{{ row.label }}</span>
          </span>
          <span class="year-bars">
            <span v-for="item in row.values" :key="item.year" class="year-bar">
              <small>{{ item.year }}</small>
              <span class="bar-track">
                <span
                  class="bar-fill"
                  :style="{
                    width: `${item.value / categoryMaximum * 100}%`,
                    backgroundColor: row.color
                  }"
                ></span>
              </span>
              <strong>{{ formatMt(item.value) }}</strong>
            </span>
          </span>
          <span class="row-change" :class="changeClass(row.change)">
            {{ formatPercent(row.change) }}
          </span>
        </button>
      </div>

      <p class="chart-unit">Hodnoty v Mt CO₂e · percento vpravo je zmena 2022 – 2024</p>

      <section class="detail-panel" aria-live="polite">
        <div class="detail-heading">
          <div>
            <p class="eyebrow">Detail odvetvia</p>
            <h3>
              <i :style="{ backgroundColor: activeCategoryMeta.color }"></i>
              {{ activeCategoryMeta.label }}
            </h3>
          </div>
          <p>
            {{ formatMt(activeCategoryValues[2].value) }} Mt CO₂e v roku 2024
          </p>
        </div>

        <div class="data-table-wrap">
          <table class="data-table details-table">
            <thead>
              <tr>
                <th scope="col">Podkategória</th>
                <th v-for="year in normalizedYears" :key="year.year" scope="col">{{ year.year }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in activeDetails" :key="detail.label">
                <th scope="row">{{ detail.label }}</th>
                <td v-for="value in detail.values" :key="value.year">{{ formatMt(value.value) }}</td>
              </tr>
              <tr class="total-row">
                <th scope="row">Spolu</th>
                <td v-for="value in activeCategoryValues" :key="value.year">{{ formatMt(value.value) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="overview-table-section">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">Presné hodnoty</p>
            <h3>Kompletná tabuľka</h3>
          </div>
        </div>
        <div class="data-table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">Odvetvie</th>
                <th v-for="year in normalizedYears" :key="year.year" scope="col">{{ year.year }}</th>
                <th scope="col">Zmena 22 – 24</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in categoryRows" :key="row.id">
                <th scope="row">
                  <i :style="{ backgroundColor: row.color }"></i>{{ row.label }}
                </th>
                <td v-for="value in row.values" :key="value.year">{{ formatMt(value.value) }}</td>
                <td :class="changeClass(row.change)">{{ formatPercent(row.change) }}</td>
              </tr>
              <tr class="total-row">
                <th scope="row">Spolu</th>
                <td v-for="year in normalizedYears" :key="year.year">{{ formatMt(year.total) }}</td>
                <td :class="changeClass(totalChange)">{{ formatPercent(totalChange) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>

    <div v-else class="companies-view">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Európsky systém obchodovania s emisiami</p>
          <h3>Konkrétni prevádzkovatelia a zariadenia</h3>
        </div>
        <p>
          Údaje EU ETS pokrývajú veľké stacionárne zdroje a leteckých prevádzkovateľov, nie celú národnú inventúru.
        </p>
      </div>

      <div class="company-controls">
        <div class="year-switcher" role="group" aria-label="Vybrať rok ETS">
          <button
            v-for="year in etsYears"
            :key="year.year"
            type="button"
            :class="{ active: companyYear === year.year }"
            :aria-pressed="companyYear === year.year ? 'true' : 'false'"
            @click="selectCompanyYear(year.year)"
          >
            {{ year.year }}
          </button>
        </div>
        <label class="filter-field">
          <span>Odvetvie</span>
          <select v-model="companyCategory" @change="companyLimit = 15">
            <option value="all">Všetky odvetvia</option>
            <option
              v-for="category in companyCategoryOptions"
              :key="category.id"
              :value="category.id"
            >
              {{ category.label }}
            </option>
          </select>
        </label>
        <label class="filter-field search-field">
          <span>Hľadať firmu alebo prevádzku</span>
          <input v-model.trim="companySearch" type="search" placeholder="napr. U. S. Steel" @input="companyLimit = 15">
        </label>
      </div>

      <div class="ets-summary">
        <div>
          <span>Emisie v EU ETS</span>
          <strong>{{ formatKt(currentEts.totalKt) }} kt CO₂</strong>
        </div>
        <div>
          <span>Zobrazených prevádzkovateľov</span>
          <strong>{{ companyRows.length }}</strong>
        </div>
        <p>
          Súčet je samostatná podmnožina národných emisií. Firmy sú zoradené podľa overených emisií v zvolenom roku.
        </p>
      </div>

      <div v-if="visibleCompanies.length" class="company-list">
        <details v-for="company in visibleCompanies" :key="company.name" class="company-row">
          <summary>
            <span class="company-rank">{{ company.rank }}</span>
            <span class="company-main">
              <strong>{{ company.name }}</strong>
              <small>{{ categoryLabel(company.categoryId) }}</small>
            </span>
            <span class="company-bar-track" aria-hidden="true">
              <span
                class="company-bar"
                :style="{
                  width: `${company.valueKt / companyMaximum * 100}%`,
                  backgroundColor: categoryColor(company.categoryId)
                }"
              ></span>
            </span>
            <strong class="company-value">{{ formatKt(company.valueKt) }} kt</strong>
          </summary>
          <div class="installations">
            <p v-for="(installation, index) in company.installations" :key="`${installation.name}-${index}`">
              <span>{{ installation.name || 'Prevádzka bez uvedeného názvu' }}</span>
              <strong>{{ formatKt(installation.valueKt) }} kt CO₂</strong>
            </p>
          </div>
        </details>
      </div>
      <p v-else class="empty-state">Pre zadaný filter sa nenašli žiadne firmy.</p>

      <button
        v-if="companyRows.length > companyLimit"
        type="button"
        class="show-more"
        @click="companyLimit = companyRows.length"
      >
        Zobraziť všetkých {{ companyRows.length }} prevádzkovateľov
      </button>
    </div>

    <p class="method-note">
      Národné hodnoty sú v Mt CO₂e bez LULUCF a nepriamych emisií CO₂. Odvetvia kombinujú príslušné položky energetiky a priemyselných procesov, preto ich súčet presne zodpovedá národnému celku. Údaje o firmách sú overené emisie vykázané v EU ETS v kt CO₂ a nemožno ich sčítať s národnými kategóriami ako ďalšie emisie.
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
    },
    etsYears: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeSection: 'categories',
      activeCategory: 'metals',
      companyYear: 2024,
      companyCategory: 'all',
      companySearch: '',
      companyLimit: 15
    }
  },
  computed: {
    normalizedYears() {
      return this.years.map(year => ({
        ...year,
        total: year.total || Object.values(year.values).reduce((sum, value) => sum + value, 0)
      }))
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
          value: year.values[category.id] || 0
        }))
        return {
          ...category,
          values,
          change: this.percentChange(values[0].value, values[values.length - 1].value)
        }
      })
    },
    categoryMaximum() {
      return Math.max(...this.categoryRows.flatMap(row => row.values.map(item => item.value)))
    },
    activeCategoryMeta() {
      return this.categories.find(category => category.id === this.activeCategory) || this.categories[0]
    },
    activeCategoryValues() {
      return this.normalizedYears.map(year => ({
        year: year.year,
        value: year.values[this.activeCategory] || 0
      }))
    },
    activeDetails() {
      const labels = []
      this.normalizedYears.forEach(year => {
        (year.details[this.activeCategory] || []).forEach(item => {
          if (!labels.includes(item.label)) labels.push(item.label)
        })
      })
      return labels.map(label => ({
        label,
        values: this.normalizedYears.map(year => {
          const item = (year.details[this.activeCategory] || []).find(detail => detail.label === label)
          return { year: year.year, value: item ? item.value : 0 }
        })
      }))
    },
    currentEts() {
      return this.etsYears.find(year => year.year === this.companyYear) || this.etsYears[0]
    },
    companyCategoryOptions() {
      const present = new Set(this.currentEts.companies.map(company => company.categoryId))
      const options = this.categories.filter(category => present.has(category.id))
      if (present.has('unassigned')) options.push({ id: 'unassigned', label: 'Nezaradené' })
      return options
    },
    companyRows() {
      const search = this.companySearch.toLocaleLowerCase('sk')
      return this.currentEts.companies
        .filter(company => this.companyCategory === 'all' || company.categoryId === this.companyCategory)
        .filter(company => {
          if (!search) return true
          const haystack = [company.name, ...company.installations.map(item => item.name)].join(' ').toLocaleLowerCase('sk')
          return haystack.includes(search)
        })
        .map((company, index) => ({ ...company, rank: index + 1 }))
    },
    visibleCompanies() {
      return this.companyRows.slice(0, this.companyLimit)
    },
    companyMaximum() {
      return Math.max(...this.companyRows.map(company => company.valueKt), 1)
    }
  },
  methods: {
    selectCompanyYear(year) {
      this.companyYear = year
      this.companyLimit = 15
      if (!this.companyCategoryOptions.some(category => category.id === this.companyCategory)) {
        this.companyCategory = 'all'
      }
    },
    percentChange(first, last) {
      if (!first) return 0
      return (last - first) / first * 100
    },
    formatMt(value) {
      return new Intl.NumberFormat('sk-SK', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value)
    },
    formatKt(value) {
      return new Intl.NumberFormat('sk-SK', {
        minimumFractionDigits: value < 10 ? 2 : 0,
        maximumFractionDigits: value < 10 ? 2 : 0
      }).format(value)
    },
    formatPercent(value) {
      const prefix = value > 0 ? '+' : ''
      return `${prefix}${new Intl.NumberFormat('sk-SK', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      }).format(value)} %`
    },
    changeClass(value) {
      return value < 0 ? 'change-down' : 'change-up'
    },
    categoryLabel(id) {
      const category = this.categories.find(item => item.id === id)
      return category ? category.label : 'Nezaradené'
    },
    categoryColor(id) {
      const category = this.categories.find(item => item.id === id)
      return category ? category.color : '#9a9a94'
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

.headline-metrics {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 2.25rem;
}

.metric-card {
  background: #f7f7f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-height: 116px;
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

.metric-year,
.eyebrow {
  font-family: 'chivo-bold';
  font-size: 0.78rem;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.change-card {
  background: #fff4eb;
  border-left: 4px solid #fb8622;
}

.change-card strong {
  color: #99362b;
}

.section-switcher,
.year-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.section-switcher {
  border-bottom: 1px solid #dfe2de;
  margin-bottom: 2.75rem;
}

.section-switcher button,
.year-switcher button,
.show-more {
  background: transparent;
  border: 0;
  color: #686862;
  cursor: pointer;
  font-family: 'chivo-bold';
}

.section-switcher button {
  border-bottom: 4px solid transparent;
  margin-bottom: -1px;
  padding: 0.9rem 1.15rem;
}

.section-switcher button:hover,
.section-switcher button.active {
  border-bottom-color: #28758c;
  color: #28758c;
}

.section-switcher button:focus-visible,
.year-switcher button:focus-visible,
.category-row:focus-visible,
.show-more:focus-visible {
  outline: 3px solid rgba(40, 117, 140, 0.28);
  outline-offset: 2px;
}

.section-heading,
.detail-heading {
  align-items: end;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 1.75rem;
}

.section-heading > div,
.detail-heading > div {
  flex: 0 0 auto;
}

.section-heading > p,
.detail-heading > p {
  margin: 0;
  max-width: 590px;
}

.section-heading h3,
.detail-heading h3 {
  color: #4f4f4a;
  font-family: 'chivo-bold';
  margin: 0;
}

.eyebrow {
  color: #28758c;
  margin: 0 0 0.4rem;
}

.category-chart {
  border: 1px solid #e4e6e3;
  border-radius: 10px;
  overflow: hidden;
}

.category-row {
  align-items: center;
  background: #ffffff;
  border: 0;
  border-bottom: 1px solid #eceeea;
  color: inherit;
  cursor: pointer;
  display: grid;
  font-family: inherit;
  gap: 1.25rem;
  grid-template-columns: minmax(210px, 0.9fr) minmax(420px, 2fr) 78px;
  padding: 0.85rem 1rem;
  text-align: left;
  width: 100%;
}

.category-row:last-child {
  border-bottom: 0;
}

.category-row:hover,
.category-row.active {
  background: #f5f8f7;
}

.category-row.active {
  box-shadow: inset 4px 0 0 #28758c;
}

.category-name {
  align-items: center;
  display: flex;
  font-family: 'chivo-bold';
}

.category-name i,
.data-table i,
.detail-heading i {
  border-radius: 2px;
  display: inline-block;
  flex: 0 0 auto;
  height: 0.75rem;
  margin-right: 0.55rem;
  width: 0.75rem;
}

.year-bars {
  display: grid;
  gap: 0.32rem;
}

.year-bar {
  align-items: center;
  display: grid;
  gap: 0.65rem;
  grid-template-columns: 34px minmax(0, 1fr) 48px;
}

.year-bar small {
  color: #777771;
  font-size: 0.7rem;
}

.year-bar strong {
  font-size: 0.75rem;
  text-align: right;
}

.bar-track,
.company-bar-track {
  background: #eaedea;
  border-radius: 999px;
  overflow: hidden;
}

.bar-track {
  height: 7px;
}

.bar-fill,
.company-bar {
  display: block;
  height: 100%;
}

.row-change {
  font-family: 'chivo-bold';
  font-size: 0.82rem;
  text-align: right;
}

.chart-unit {
  color: #7a7a75;
  font-size: 0.75rem;
  margin: 0.65rem 0 0;
  text-align: right;
}

.change-down {
  color: #28758c;
  font-family: 'chivo-bold';
}

.change-up {
  color: #99362b;
  font-family: 'chivo-bold';
}

.detail-panel {
  background: #f7f7f5;
  border-radius: 10px;
  margin-top: 2.75rem;
  padding: 1.6rem;
}

.detail-heading h3 {
  align-items: center;
  display: flex;
}

.detail-heading > p {
  color: #28758c;
  font-family: 'chivo-bold';
}

.data-table-wrap {
  overflow-x: auto;
}

.data-table {
  border-collapse: collapse;
  min-width: 680px;
  width: 100%;
}

.data-table th,
.data-table td {
  border-bottom: 1px solid #e1e3df;
  padding: 0.78rem 0.7rem;
  text-align: right;
}

.data-table th:first-child {
  align-items: center;
  display: flex;
  min-width: 270px;
  text-align: left;
}

.data-table thead th {
  color: #777771;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.details-table {
  background: #ffffff;
}

.details-table th,
.details-table td {
  padding-left: 1rem;
  padding-right: 1rem;
}

.total-row th,
.total-row td {
  border-top: 2px solid #b9bdb9;
  font-family: 'chivo-bold';
}

.overview-table-section {
  margin-top: 3.5rem;
}

.section-heading.compact {
  margin-bottom: 1rem;
}

.company-controls {
  align-items: end;
  background: #f7f7f5;
  border-radius: 10px;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto minmax(190px, 0.7fr) minmax(260px, 1.3fr);
  padding: 1.1rem;
}

.year-switcher button {
  background: #ffffff;
  border: 1px solid #d9dcd8;
  border-radius: 999px;
  padding: 0.65rem 0.95rem;
}

.year-switcher button:hover,
.year-switcher button.active {
  background: #28758c;
  border-color: #28758c;
  color: #ffffff;
}

.filter-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.filter-field > span {
  font-family: 'chivo-bold';
  font-size: 0.72rem;
}

.filter-field select,
.filter-field input {
  background: #ffffff;
  border: 1px solid #d3d7d2;
  border-radius: 5px;
  color: #565651;
  font-family: inherit;
  min-height: 43px;
  padding: 0.55rem 0.7rem;
  width: 100%;
}

.ets-summary {
  align-items: center;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: auto auto minmax(260px, 1fr);
  margin: 1.6rem 0;
}

.ets-summary div {
  display: flex;
  flex-direction: column;
}

.ets-summary span {
  color: #777771;
  font-size: 0.75rem;
}

.ets-summary strong {
  color: #28758c;
  font-family: 'chivo-bold';
  font-size: 1.25rem;
}

.ets-summary p {
  border-left: 3px solid #f2b116;
  font-size: 0.78rem;
  margin: 0;
  padding-left: 1rem;
}

.company-list {
  border: 1px solid #e4e6e3;
  border-radius: 10px;
  overflow: hidden;
}

.company-row {
  border-bottom: 1px solid #e9ebe8;
}

.company-row:last-child {
  border-bottom: 0;
}

.company-row summary {
  align-items: center;
  cursor: pointer;
  display: grid;
  gap: 1rem;
  grid-template-columns: 30px minmax(230px, 1.05fr) minmax(220px, 1fr) 95px;
  list-style: none;
  padding: 0.9rem 1rem;
}

.company-row summary::-webkit-details-marker {
  display: none;
}

.company-row summary:hover,
.company-row[open] summary {
  background: #f7f9f8;
}

.company-rank {
  color: #8b8b84;
  font-size: 0.75rem;
  text-align: center;
}

.company-main {
  display: flex;
  flex-direction: column;
}

.company-main strong {
  font-family: 'chivo-bold';
}

.company-main small {
  color: #777771;
}

.company-bar-track {
  height: 10px;
}

.company-value {
  font-family: 'chivo-bold';
  text-align: right;
}

.installations {
  background: #f4f5f3;
  padding: 0.65rem 1rem 0.65rem 57px;
}

.installations p {
  align-items: center;
  border-bottom: 1px solid #e0e2de;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  margin: 0;
  padding: 0.45rem 0;
}

.installations p:last-child {
  border-bottom: 0;
}

.installations strong {
  margin-left: 1rem;
  white-space: nowrap;
}

.show-more {
  border: 1px solid #28758c;
  border-radius: 999px;
  color: #28758c;
  display: block;
  margin: 1.3rem auto 0;
  padding: 0.7rem 1.25rem;
}

.show-more:hover {
  background: #28758c;
  color: #ffffff;
}

.empty-state {
  background: #f7f7f5;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
}

.method-note {
  border-top: 1px solid #e4e6e3;
  color: #777771;
  font-size: 0.78rem;
  line-height: 1.55;
  margin: 3rem 0 0;
  padding-top: 1rem;
}

@media only screen and (max-width: 980px) {
  .category-row {
    grid-template-columns: minmax(180px, 0.8fr) minmax(340px, 1.8fr) 68px;
  }

  .company-controls {
    grid-template-columns: 1fr 1fr;
  }

  .year-switcher {
    grid-column: 1 / -1;
  }

  .company-row summary {
    grid-template-columns: 28px minmax(220px, 1fr) minmax(160px, 0.8fr) 85px;
  }
}

@media only screen and (max-width: 768px) {
  .headline-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section-heading,
  .detail-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.6rem;
  }

  .category-row {
    gap: 0.8rem;
    grid-template-columns: minmax(0, 1fr) 68px;
    padding: 1rem;
  }

  .year-bars {
    grid-column: 1 / -1;
    grid-row: 2;
  }

  .row-change {
    grid-column: 2;
    grid-row: 1;
  }

  .company-controls,
  .ets-summary {
    grid-template-columns: 1fr;
  }

  .year-switcher {
    grid-column: auto;
  }

  .company-row summary {
    grid-template-columns: 24px minmax(0, 1fr) 78px;
  }

  .company-bar-track {
    grid-column: 2 / -1;
    grid-row: 2;
  }

  .installations {
    padding-left: 1rem;
  }
}

@media only screen and (max-width: 480px) {
  .headline-metrics {
    grid-template-columns: 1fr;
  }

  .metric-card {
    min-height: 96px;
  }

  .section-switcher {
    align-items: stretch;
    flex-direction: column;
  }

  .section-switcher button {
    text-align: left;
  }

  .detail-panel {
    padding: 1rem;
  }

  .company-controls {
    padding: 0.85rem;
  }

  .company-row summary {
    padding-left: 0.65rem;
    padding-right: 0.65rem;
  }

  .company-main small {
    font-size: 0.68rem;
  }
}
</style>
