<template>  
    
    <b-container fluid>
    
        <div class="celkovo">
            <b-row class="nadpis"> 
                <b-col class="text-left">Tvoja celková uhlíková stopa je <strong>{{uhlikova_stopa_celkovo}}</strong> kilogramov CO2e.</b-col>
            </b-row>
            <div class="graf_celkovo">    
                <b-row align-h="center">
               
                    <b-col cols=12 lg="3" order="1" order-lg="1">
                        <DoughnutExample
                            ref="celkovo_chart"
                            :chart-data="chartDataDoughnut"
                            :options="optionsDoughnut"                        
                        > 
                        </DoughnutExample>
                    </b-col>
                    <b-col cols=12 lg="6" order="3" order-lg="2">
                        Suggestions
                    </b-col>
                    <b-col cols=12 lg="3" order="2" order-lg="3">
                        <BarExample
                            ref="celkovo_porovnanie_chart"
                            :chart-data="chartDataBar"
                            :options="optionsBar"    
                        > 
                        </BarExample>
                    </b-col>
                    
                 
                </b-row>
            </div>
            <div class="pocastiach">
                 <div class="obsah">   
                    <b-row class="nadpis"> 
                        <b-col class="text-left"><h3>Bývanie</h3></b-col>
                    </b-row>
                    <b-row class="kategoria">
                        <b-col cols=12 md="4">
                            <DoughnutExample
                            ref="celkovo_chart"
                            :chart-data="chartData"
                            :options="options1"
                            class="graf"
                            
                        > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="8">
                        
                        </b-col>
                    </b-row>



                    <b-row class="nadpis"> 
                        <b-col class="text-left"><h3>Doprava</h3></b-col>
                    </b-row>
                    <b-row class="kategoria">
                        <b-col cols=12 md="4">
                            <DoughnutExample
                            ref="celkovo_chart"
                            :chart-data="chartData"
                            :options="options1"
                            class="graf"
                            
                        > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="8">
                        
                        </b-col>
                    </b-row>


                    <b-row class="nadpis"> 
                        <b-col class="text-left"><h3>Jedlo</h3></b-col>
                    </b-row>
                    <b-row class="kategoria">
                        <b-col cols=12 md="4">
                            <DoughnutExample
                            ref="celkovo_chart"
                            :chart-data="chartData"
                            :options="options1"
                            class="graf"
                            
                        > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="8">
                        
                        </b-col>
                    </b-row>


                    <b-row class="nadpis"> 
                        <b-col class="text-left"><h3>Spotreba</h3></b-col>
                    </b-row>
                    <b-row class="kategoria">
                        <b-col cols=12 md="4">
                            <DoughnutExample
                            ref="celkovo_chart"
                            :chart-data="chartData"
                            :options="options1"
                            class="graf"
                            
                        > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="8">
                        
                        </b-col>
                    </b-row>


                    <b-row class="nadpis"> 
                        <b-col class="text-left"><h3>životný štýl</h3></b-col>
                    </b-row>
                    <b-row class="kategoria">
                        <b-col cols=12 md="4">
                            <DoughnutExample
                            ref="celkovo_chart"
                            :chart-data="chartData"
                            :options="options1"
                            class="graf"
                            
                        > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="8">
                        
                        </b-col>
                    </b-row>

                </div>
            </div>
        </div>
    
     



     
    </b-container>

</template>


<script>
import DoughnutExample from "./DoughnutExample.vue";
import BarExample from "./BarExample.vue";

export default {
    name: 'VysledokForm',
    components: {DoughnutExample,BarExample},
    data() {
      return { 
        optionsDoughnut: {
        responsive: true,
        legend: {
            display: false
         },
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            },
        },

        optionsBar: {
            responsive: true,
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            animation: {
                animateRotate: true,
                },
            scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
        },

        options1: {
        responsive: true,
        legend: {
            display: false
         },
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            },
        },

        chartDataDoughnut :{
        
            labels: ["Bývanie","Doprava","Jedlo","Spotreba","Životný štýl"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94','#BEBEBE'],
                data: [673,2651,1657,804,515],
            }
            ],
        },

        chartDataBar :{
        
            labels: ["Slovák","Ty","Európan"],
            datasets: [
            {
                backgroundColor: ['#6F6F6F','#FF6600','#6F6F6F'],
                data: [5888,5888,8480],
            }
            ],
        },
      }
    },
    computed: {
        uhlikova_stopa_byvanie: {
            get() {
                return this.$store.state.uhlikova_stopa_byvanie
            },
        },
        uhlikova_stopa_doprava: {
            get() {
                return this.$store.state.uhlikova_stopa_doprava
            },
        },
        uhlikova_stopa_jedlo: {
            get() {
                return this.$store.state.uhlikova_stopa_jedlo
            },
        },
        uhlikova_stopa_spotreba: {
            get() {
                return this.$store.state.uhlikova_stopa_spotreba
            },
        },
        uhlikova_stopa_ziv_styl: {
            get() {
                return this.$store.state.uhlikova_stopa_ziv_styl
            },
        },
        uhlikova_stopa_celkovo: {
            get() {
                return this.$store.state.uhlikova_stopa_celkovo
            },
            set(value) {
                this.$store.commit('setuhlikova_stopa_celkovo',value)
            }
        },
    },
    watch: {
        uhlikova_stopa_byvanie() {
            this.fillChart()
            
        },
        uhlikova_stopa_doprava() {
            this.fillChart()
            
        },
        uhlikova_stopa_jedlo() {
            this.fillChart()
            
        },
        uhlikova_stopa_spotreba() {
            this.fillChart()
            
        },
        uhlikova_stopa_ziv_styl() {
            this.fillChart()
            
        },
    },

    methods: {
        fillChart() {
            this.chartDataDoughnut.datasets[0].data = [this.uhlikova_stopa_byvanie,this.uhlikova_stopa_doprava, this.uhlikova_stopa_jedlo,
            this.uhlikova_stopa_spotreba, this.uhlikova_stopa_ziv_styl];
            this.uhlikova_stopa_celkovo = this.uhlikova_stopa_byvanie+this.uhlikova_stopa_doprava + this.uhlikova_stopa_jedlo + this.uhlikova_stopa_spotreba + this.uhlikova_stopa_ziv_styl;
            this.chartDataBar.datasets[0].data[1] = this.uhlikova_stopa_celkovo
            this.updateChart()
            this.updateChartBar()
        },
        updateChart() {
         this.$refs.celkovo_chart.update();
        },
        updateChartBar() {
         this.$refs.celkovo_porovnanie_chart.update();
        },
    }
}

</script>

    

<style scoped>
.celkovo {
    padding: 5%;
}

.nadpis {
    font-size: 2rem;
    font-weight: 1000;
    margin-bottom: 5%;
}

.pocastiach {
    margin-top: 10%;
    background: #F2F2F2;
    box-shadow: 5px 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-left: 5%;
    width:90%;
    height: 250vh;
}

.obsah {
    padding: 5%;
}

.kategoria {
    height: 10%;
}
.graf_celkovo{
    margin-right: 5%;
}

</style>
