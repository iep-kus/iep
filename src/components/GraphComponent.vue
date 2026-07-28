<template>
  <div style="width:100%; height:100%;">
    <component
      :is="chartComponent"
      :chart-data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
// POSLEDNA FUNKCNA VERZIA
import { Pie, Doughnut, Bar, Line } from 'vue-chartjs'
import Chart from 'chart.js'

// V nasledujúcej časti sú zaregistrované "plugin-y" - funkcie, ktoré niektorým grafom dodávajú extra funkcionality.

// plugin, ktorý nalepí na graf ikony z Font Awesome, funguje pre všetky typy okrem "line" (čiarový graf):
Chart.plugins.register({
  id: 'datasetIcons',
  afterDatasetsDraw(chart) {
    const ctx = chart.ctx

    chart.config.data.datasets.forEach((dataset, datasetIndex) => {
      if (!dataset.icons) return // only run if icons exist

      const meta = chart.getDatasetMeta(datasetIndex)

      dataset.data.forEach((value, i) => {
        const element = meta.data[i]
        if (!element) return

        let center
        if (element.getCenterPoint) {
          center = element.getCenterPoint()
        } else if (element._model) {
          center = { x: element._model.x, y: element._model.y }
        } else {
          return
        }

        ctx.save()
        ctx.font = `${dataset.iconSize || 20}px FontAwesome`
        ctx.fillStyle = dataset.iconColor || '#000'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(dataset.icons[i], center.x, center.y)
        ctx.restore()
      })
    })
  }
})

// plugin, ktorý pridá do stredu grafu text a dáva zmysel iba pri "doughnut" grafe:
Chart.plugins.register({
  id: 'centerText',
  afterDraw(chart) {
    const opts = chart.config.options.centerText
    if (!opts || !opts.text) return

    const ctx = chart.chart.ctx
    const width = chart.chartArea.right - chart.chartArea.left
    const height = chart.chartArea.bottom - chart.chartArea.top
    const centerX = chart.chartArea.left + width / 2
    const centerY = chart.chartArea.top + height / 2

    ctx.save()
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = opts.color || '#000'
    ctx.font = `${opts.fontSize || 20}px ${opts.fontFamily || 'sans-serif'}`

    const lineHeight = opts.lineHeight || opts.fontSize || 20
    const lines = Array.isArray(opts.text) ? opts.text : [opts.text]
    const totalHeight = lineHeight * (lines.length - 1)

    lines.forEach((line, i) => {
      ctx.fillText(line, centerX, centerY - totalHeight / 2 + i * lineHeight)
    })

    ctx.restore()
  }
})

export default {
  name: 'GraphComponent',
  props: {
    graphType: { type: String, required: true },
    data: { type: [Array, Object], required: true },
    options: { type: Object, default: () => ({}) }
  },

  computed: {
    // následne spracujeme dáta do každého typu grafu, toto sa líši pre rôzne grafy.
    chartData() {

      // 1) ČIAROVÝ GRAF S VIAC AKO JEDNOU ČIAROU
      if (
        !Array.isArray(this.data) &&
        Array.isArray(this.data.datasets)
      ) {
        return {
          labels: this.data.labels,
          datasets: this.data.datasets.map(ds => ({
            ...ds,
            fill: ds.fill ?? false
          }))
        }
      }

      // 2) JEDNODUCHÉ GRAFY S JEDNÝM DATASETOM (bar, pie, doughnut, line)
      if (!Array.isArray(this.data)) {
        return {
          labels: this.data.labels,
          datasets: [
            {
              data: this.data.values,
              backgroundColor:
                this.data.backgroundColor ||
                this.data.values.map(() => '#36A2EB'),
              borderColor:
                this.data.borderColor ||
                this.data.backgroundColor ||
                this.data.values.map(() => '#36A2EB'),
              borderWidth: 1,
              fill: false,
              ...(this.data.icons ? {
                icons: this.data.icons,
                iconSize: this.data.iconSize || 20,
                iconColor: this.data.iconColor || '#000'
              } : {})
            }
          ]
        }
      }

      // 3) VIACVRSTVOVÝ DOUGHNUT
      return {
        labels: this.data.flatMap(layer => layer.labels),
        datasets: this.data.map(layer => ({
          data: layer.values,
          labels: layer.labels,
          backgroundColor:
            layer.backgroundColor ||
            layer.values.map(() => '#36A2EB'),
          borderColor: '#fff',
          borderWidth: 1,
          fill: false,
          ...(layer.icons ? {
            icons: layer.icons,
            iconSize: layer.iconSize || 20,
            iconColor: layer.iconColor || '#000'
          } : {})
        }))
      }
    },


    // definujeme základné vlastnosti každého grafu
    chartOptions() {
      const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        
        // definujeme default-né nastavenia legendy:
        legend: {
          display: true,
          position: 'top',
          labels: {
            generateLabels: chart => {
              const labels = []
              chart.data.datasets.forEach((ds, datasetIndex) => {
                const dsLabels = ds.labels || chart.data.labels
                if (!dsLabels) return
                dsLabels.forEach((label, i) => {
                  labels.push({
                    text: label,
                    fillStyle: ds.backgroundColor[i],
                    hidden: false,
                    datasetIndex,
                    index: i
                  })
                })
              })
              return labels
            }
          }
        },
        // základné nastavenie okienok, ktoré sa zobrazujú, keď kurzorom prechádzame po rôznych častiach grafu:
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const dataset = data.datasets[tooltipItem.datasetIndex]
              const value = dataset.data[tooltipItem.index]
              const label = dataset.labels?.[tooltipItem.index] || data.labels[tooltipItem.index]
              return label + ': ' + value
            }
          }
        },
        plugins: {
          datalabels: { display: false }
        }
      }
      return { ...defaultOptions, ...this.options }
    },
    // definujeme všetky typy grafov
    chartComponent() {
      const components = {
        pie: {
          extends: Pie,
          props: ['chartData', 'options'],
          mounted() { this.renderChart(this.chartData, this.options) }
        },
        doughnut: {
          extends: Doughnut,
          props: ['chartData', 'options'],
          mounted() { this.renderChart(this.chartData, this.options) }
        },
        bar: {
          extends: Bar,
          props: ['chartData', 'options'],
          mounted() { this.renderChart(this.chartData, this.options) }
        },
        line: {
          extends: Line,
          props: ['chartData', 'options'],
          mounted() { this.renderChart(this.chartData, this.options) }
        }
      }
      return components[this.graphType] || components.pie
    }
  }
}
</script>

<style scoped>
div { width: 100%; height: 100%; min-height: 250px; }
canvas { display: block; width: 100% !important; height: 100% !important; }
</style>
