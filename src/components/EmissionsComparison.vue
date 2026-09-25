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
      <button
        type="button"
        role="tab"
        :aria-selected="activeSection === 'radial' ? 'true' : 'false'"
        :class="{ active: activeSection === 'radial' }"
        @click="activeSection = 'radial'"
      >
        Kruhový prehľad (%)
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

    <div v-else-if="activeSection === 'companies'" class="companies-view">
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

    <div v-else class="radial-view">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Alternatívne zobrazenie</p>
          <h3>Od sektora až po konkrétnu firmu</h3>
        </div>
        <p>
          Vnútorný kruh zobrazuje široké sektory, prostredný odvetvia a vonkajší jednotlivých prevádzkovateľov.
        </p>
      </div>

      <div class="radial-toolbar">
        <div class="year-switcher" role="group" aria-label="Vybrať rok kruhového prehľadu">
          <button
            v-for="year in etsYears"
            :key="year.year"
            type="button"
            :class="{ active: radialYear === year.year }"
            :aria-pressed="radialYear === year.year ? 'true' : 'false'"
            @click="radialYear = year.year"
          >
            {{ year.year }}
          </button>
        </div>
        <p>
          Percentá v kruhoch vyjadrujú podiel z overených emisií EU ETS. Podiel ETS na národnom celku je uvedený v strede.
        </p>
      </div>

      <div class="radial-chart-wrap">
        <svg
          class="radial-chart"
          viewBox="-450 -355 900 710"
          role="img"
          :aria-label="radialAriaLabel"
        >
          <circle class="radial-center" r="69"></circle>

          <g class="broad-ring">
            <path
              v-for="sector in radialHierarchy.sectors"
              :key="sector.id"
              :d="donutPath(sector.start, sector.end, 72, 143)"
              :fill="sector.color"
            >
              <title>{{ sector.label }}: {{ formatShare(sector.share) }} emisií EU ETS</title>
            </path>
            <g
              v-for="sector in radialHierarchy.sectors.filter(item => item.share >= 4)"
              :key="`${sector.id}-label`"
              class="arc-label broad-label"
              :transform="`translate(${sector.labelX} ${sector.labelY}) rotate(${sector.rotation})`"
            >
              <text text-anchor="middle">
                <tspan x="0" dy="-0.15em">{{ sector.label }}</tspan>
                <tspan x="0" dy="1.25em">{{ formatShare(sector.share) }}</tspan>
              </text>
            </g>
          </g>

          <g class="category-ring">
            <path
              v-for="category in radialHierarchy.categories"
              :key="category.id"
              :d="donutPath(category.start, category.end, 146, 224)"
              :fill="category.color"
            >
              <title>{{ category.label }}: {{ formatShare(category.share) }} emisií EU ETS</title>
            </path>
            <g
              v-for="category in radialHierarchy.categories.filter(item => item.share >= 3.2)"
              :key="`${category.id}-label`"
              class="arc-label category-label"
              :transform="`translate(${category.labelX} ${category.labelY}) rotate(${category.rotation})`"
            >
              <text text-anchor="middle">
                <tspan x="0" dy="-0.15em">{{ category.shortLabel }}</tspan>
                <tspan x="0" dy="1.25em">{{ formatShare(category.share) }}</tspan>
              </text>
            </g>
          </g>

          <g class="company-ring">
            <path
              v-for="company in radialHierarchy.companies"
              :key="`${company.categoryId}-${company.name}`"
              :d="donutPath(company.start, company.end, 227, 292)"
              :fill="company.color"
              :fill-opacity="company.opacity"
            >
              <title>{{ company.name }}: {{ formatShare(company.share) }} emisií EU ETS</title>
            </path>
          </g>

          <g class="company-labels">
            <g v-for="company in radialHierarchy.labels" :key="`${company.name}-outer-label`">
              <path class="leader-line" :d="company.leaderPath"></path>
              <text
                class="company-label"
                :x="company.labelX"
                :y="company.labelY"
                :text-anchor="company.side === 'right' ? 'start' : 'end'"
              >
                <tspan :x="company.labelX" dy="-0.1em">{{ company.shortName }}</tspan>
                <tspan :x="company.labelX" dy="1.2em">{{ formatShare(company.share) }}</tspan>
              </text>
            </g>
          </g>

          <g class="center-label" text-anchor="middle">
            <text y="-19" class="center-year">EU ETS {{ radialYear }}</text>
            <text y="9" class="center-total">{{ formatMt(radialCurrent.totalKt / 1000) }}</text>
            <text y="29" class="center-unit">Mt CO₂</text>
            <text y="49" class="center-share">{{ formatShare(radialNationalShare) }} emisií SR</text>
          </g>
        </svg>
      </div>

      <div class="ring-key" aria-label="Vysvetlenie kruhov">
        <span><i class="ring-one"></i><strong>1.</strong> široký sektor</span>
        <span><i class="ring-two"></i><strong>2.</strong> odvetvie</span>
        <span><i class="ring-three"></i><strong>3.</strong> prevádzkovateľ</span>
      </div>

      <section class="radial-ranking">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">Najväčší prevádzkovatelia</p>
            <h3>Podiel na emisiách</h3>
          </div>
          <p>Percentá pomáhajú porovnať veľkosť firmy voči EU ETS aj voči všetkým národným emisiám.</p>
        </div>
        <ol>
          <li v-for="company in radialHierarchy.topCompanies" :key="`${company.name}-ranking`">
            <span class="ranking-name">
              <i :style="{ backgroundColor: company.color }"></i>
              <span>
                <strong>{{ company.name }}</strong>
                <small>{{ categoryLabel(company.categoryId) }}</small>
              </span>
            </span>
            <span class="ranking-shares">
              <strong>{{ formatShare(company.share) }} EU ETS</strong>
              <small>{{ formatShare(company.nationalShare) }} emisií SR</small>
            </span>
          </li>
        </ol>
      </section>
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
      radialYear: 2024,
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
    },
    radialCurrent() {
      return this.etsYears.find(year => year.year === this.radialYear) || this.etsYears[0]
    },
    radialNational() {
      return this.normalizedYears.find(year => year.year === this.radialYear) || this.normalizedYears[0]
    },
    radialNationalShare() {
      return this.radialCurrent.totalKt / (this.radialNational.total * 1000) * 100
    },
    radialHierarchy() {
      const total = Math.max(this.radialCurrent.totalKt, 1)
      const nationalTotalKt = this.radialNational.total * 1000
      const fullCircle = Math.PI * 2
      const broadDefinitions = [
        {
          id: 'industry',
          label: 'Priemysel',
          color: '#315f70',
          categoryIds: ['metals', 'minerals', 'chemicals', 'other_industry']
        },
        {
          id: 'energy',
          label: 'Energetika',
          color: '#9b6046',
          categoryIds: ['power_heat', 'fuels', 'other_energy']
        },
        {
          id: 'transport',
          label: 'Doprava',
          color: '#7d3c38',
          categoryIds: ['transport']
        },
        {
          id: 'other',
          label: 'Nezaradené',
          color: '#8a8c86',
          categoryIds: ['unassigned']
        }
      ]
      const categoryShortLabels = {
        power_heat: 'Elektrina a teplo',
        fuels: 'Rafinérie a palivá',
        metals: 'Kovy',
        chemicals: 'Chémia',
        minerals: 'Minerály',
        other_industry: 'Ostatný priem.',
        transport: 'Doprava',
        other_energy: 'Ostatná energia',
        unassigned: 'Nezaradené'
      }
      const companies = this.radialCurrent.companies.filter(company => company.valueKt > 0)
      const sectors = []
      const categoryNodes = []
      const companyNodes = []
      let sectorStart = -Math.PI / 2

      broadDefinitions.forEach(definition => {
        const sectorCompanies = companies.filter(company => definition.categoryIds.includes(company.categoryId))
        const sectorValue = sectorCompanies.reduce((sum, company) => sum + company.valueKt, 0)
        if (!sectorValue) return
        const sectorEnd = sectorStart + sectorValue / total * fullCircle
        const sectorLabel = this.arcLabelGeometry(sectorStart, sectorEnd, 107)
        sectors.push({
          ...definition,
          start: sectorStart,
          end: sectorEnd,
          valueKt: sectorValue,
          share: sectorValue / total * 100,
          ...sectorLabel
        })

        let categoryStart = sectorStart
        definition.categoryIds.forEach(categoryId => {
          const categoryCompanies = sectorCompanies.filter(company => company.categoryId === categoryId)
          const categoryValue = categoryCompanies.reduce((sum, company) => sum + company.valueKt, 0)
          if (!categoryValue) return
          const categoryEnd = categoryStart + categoryValue / total * fullCircle
          const categoryMeta = this.categories.find(category => category.id === categoryId)
          const categoryColor = categoryMeta ? categoryMeta.color : '#8a8c86'
          const categoryLabel = this.arcLabelGeometry(categoryStart, categoryEnd, 185)
          categoryNodes.push({
            id: categoryId,
            label: categoryMeta ? categoryMeta.label : 'Nezaradené',
            shortLabel: categoryShortLabels[categoryId] || 'Nezaradené',
            color: categoryColor,
            start: categoryStart,
            end: categoryEnd,
            valueKt: categoryValue,
            share: categoryValue / total * 100,
            ...categoryLabel
          })

          let companyStart = categoryStart
          categoryCompanies.forEach((company, index) => {
            const companyEnd = companyStart + company.valueKt / total * fullCircle
            companyNodes.push({
              ...company,
              color: categoryColor,
              opacity: Math.max(0.38, 0.9 - index * 0.045),
              start: companyStart,
              end: companyEnd,
              mid: (companyStart + companyEnd) / 2,
              share: company.valueKt / total * 100,
              nationalShare: company.valueKt / nationalTotalKt * 100
            })
            companyStart = companyEnd
          })
          categoryStart = categoryEnd
        })
        sectorStart = sectorEnd
      })

      const topCompanies = [...companyNodes].sort((a, b) => b.valueKt - a.valueKt).slice(0, 10)
      return {
        sectors,
        categories: categoryNodes,
        companies: companyNodes,
        labels: this.distributeRadialLabels(topCompanies),
        topCompanies
      }
    },
    radialAriaLabel() {
      const topCompany = this.radialHierarchy.topCompanies[0]
      return `Štruktúra emisií EU ETS v roku ${this.radialYear}. Spolu ${this.formatMt(this.radialCurrent.totalKt / 1000)} megatony CO2, čo je ${this.formatShare(this.radialNationalShare)} národných emisií. Najväčší prevádzkovateľ ${topCompany ? topCompany.name : ''}.`
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
    formatShare(value) {
      return `${new Intl.NumberFormat('sk-SK', {
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
    },
    polarPoint(angle, radius) {
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      }
    },
    donutPath(start, end, innerRadius, outerRadius) {
      const outerStart = this.polarPoint(start, outerRadius)
      const outerEnd = this.polarPoint(end, outerRadius)
      const innerEnd = this.polarPoint(end, innerRadius)
      const innerStart = this.polarPoint(start, innerRadius)
      const largeArc = end - start > Math.PI ? 1 : 0
      return [
        `M ${outerStart.x} ${outerStart.y}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
        `L ${innerEnd.x} ${innerEnd.y}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
        'Z'
      ].join(' ')
    },
    arcLabelGeometry(start, end, radius) {
      const mid = (start + end) / 2
      const point = this.polarPoint(mid, radius)
      let rotation = mid * 180 / Math.PI + 90
      while (rotation > 180) rotation -= 360
      while (rotation < -180) rotation += 360
      if (rotation > 90) rotation -= 180
      if (rotation < -90) rotation += 180
      return {
        labelX: point.x,
        labelY: point.y,
        rotation
      }
    },
    shortCompanyName(name) {
      const cleaned = name
        .replace(/,?\s+(a\.\s*s\.|a\.s\.|s\.\s*r\.\s*o\.|s\.r\.o\.)$/i, '')
        .trim()
      return cleaned.length > 27 ? `${cleaned.slice(0, 25)}…` : cleaned
    },
    distributeRadialLabels(companies) {
      const labels = companies.map(company => {
        const anchor = this.polarPoint(company.mid, 294)
        const elbow = this.polarPoint(company.mid, 317)
        const side = Math.cos(company.mid) >= 0 ? 'right' : 'left'
        return {
          ...company,
          side,
          anchor,
          elbow,
          rawY: Math.sin(company.mid) * 330,
          labelX: side === 'right' ? 354 : -354,
          shortName: this.shortCompanyName(company.name)
        }
      })
      const minY = -264
      const maxY = 264
      const gap = 33

      ;['left', 'right'].forEach(side => {
        const sideLabels = labels.filter(label => label.side === side).sort((a, b) => a.rawY - b.rawY)
        let previous = minY - gap
        sideLabels.forEach(label => {
          label.labelY = Math.max(label.rawY, previous + gap)
          previous = label.labelY
        })
        if (sideLabels.length && sideLabels[sideLabels.length - 1].labelY > maxY) {
          const overflow = sideLabels[sideLabels.length - 1].labelY - maxY
          sideLabels.forEach(label => { label.labelY -= overflow })
        }
        for (let index = sideLabels.length - 2; index >= 0; index -= 1) {
          sideLabels[index].labelY = Math.min(sideLabels[index].labelY, sideLabels[index + 1].labelY - gap)
        }
        sideLabels.forEach(label => {
          const lineEndX = label.side === 'right' ? label.labelX - 7 : label.labelX + 7
          label.leaderPath = `M ${label.anchor.x} ${label.anchor.y} L ${label.elbow.x} ${label.elbow.y} L ${lineEndX} ${label.labelY}`
        })
      })
      return labels
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

.radial-toolbar {
  align-items: center;
  background: #f7f7f5;
  border-radius: 10px;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  padding: 1rem 1.1rem;
}

.radial-toolbar > p {
  font-size: 0.78rem;
  margin: 0;
  max-width: 590px;
}

.radial-chart-wrap {
  margin: 1.25rem auto 0;
  max-width: 1040px;
}

.radial-chart {
  display: block;
  height: auto;
  overflow: visible;
  width: 100%;
}

.radial-chart path:not(.leader-line) {
  stroke: #ffffff;
  stroke-width: 1.6;
}

.radial-center {
  fill: #ffffff;
  stroke: #d9dcd8;
  stroke-width: 1.5;
}

.arc-label,
.company-labels,
.center-label {
  pointer-events: none;
}

.arc-label text {
  fill: #ffffff;
  font-family: 'chivo-bold';
}

.broad-label {
  font-size: 12px;
}

.category-label {
  font-size: 10.5px;
}

.leader-line {
  fill: none;
  stroke: #a3a8a4;
  stroke-width: 1;
}

.company-label {
  fill: #555550;
  font-size: 10.5px;
}

.company-label tspan:first-child {
  font-family: 'chivo-bold';
}

.center-label {
  fill: #595959;
}

.center-year,
.center-share {
  font-family: 'chivo-bold';
  font-size: 10px;
  letter-spacing: 0.02em;
}

.center-total {
  fill: #28758c;
  font-family: 'chivo-bold';
  font-size: 22px;
}

.center-unit {
  font-size: 10px;
}

.center-share {
  fill: #99362b;
  font-size: 9px;
}

.ring-key {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.4rem;
  justify-content: center;
  margin-top: -0.5rem;
}

.ring-key span {
  align-items: center;
  display: flex;
  font-size: 0.78rem;
}

.ring-key i {
  border: 2px solid #28758c;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.45rem;
}

.ring-key strong {
  margin-right: 0.25rem;
}

.ring-one {
  height: 12px;
  width: 12px;
}

.ring-two {
  height: 17px;
  opacity: 0.75;
  width: 17px;
}

.ring-three {
  height: 22px;
  opacity: 0.5;
  width: 22px;
}

.radial-ranking {
  margin-top: 3rem;
}

.radial-ranking ol {
  display: grid;
  gap: 0 1.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}

.radial-ranking li {
  align-items: center;
  border-bottom: 1px solid #e4e6e3;
  display: flex;
  justify-content: space-between;
  min-height: 64px;
  padding: 0.6rem 0;
}

.ranking-name {
  align-items: center;
  display: flex;
  min-width: 0;
}

.ranking-name > i {
  border-radius: 2px;
  flex: 0 0 auto;
  height: 0.8rem;
  margin-right: 0.6rem;
  width: 0.8rem;
}

.ranking-name > span,
.ranking-shares {
  display: flex;
  flex-direction: column;
}

.ranking-name strong {
  font-family: 'chivo-bold';
}

.ranking-name small,
.ranking-shares small {
  color: #777771;
}

.ranking-shares {
  flex: 0 0 auto;
  margin-left: 1rem;
  text-align: right;
}

.ranking-shares strong {
  color: #28758c;
  font-family: 'chivo-bold';
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

  .radial-ranking ol {
    grid-template-columns: 1fr;
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

  .radial-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .company-labels {
    display: none;
  }

  .radial-chart {
    margin: -1rem auto;
    max-width: 680px;
  }

  .radial-chart-wrap {
    margin-left: -3rem;
    margin-right: -3rem;
    width: calc(100% + 6rem);
  }

  .broad-label {
    font-size: 18px;
  }

  .category-label {
    font-size: 15px;
  }

  .center-year,
  .center-unit {
    font-size: 14px;
  }

  .center-total {
    font-size: 30px;
  }

  .center-share {
    font-size: 13px;
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

  .category-label {
    display: none;
  }

  .broad-label {
    font-size: 23px;
  }

  .radial-ranking li {
    align-items: flex-start;
  }
}
</style>
