
<script>
import { Bar } from 'vue-chartjs'

export default {
  name:'BarExample',
  extends: Bar,
  props:['chartData','options'],
  methods: {
    update() {
      this.$data._chart.update()
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
