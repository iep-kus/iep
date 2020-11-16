<template>  
    
    <b-container fluid>
    
        
        <div class="background-cover"> 
            <div class="celkovo">  
                <b-row class="nadpis-title"> 
                    <b-col class="text-left"><h1>Tvoja celková uhlíková stopa je <strong>{{uhlikova_stopa_celkovo}}</strong> kilogramov CO2e ročne.</h1></b-col>
                </b-row>
                <div class="graf_celkovo">    
                    <b-row align-h="center" align-v="center">
                
                        <b-col cols=12 md="6" lg="3" order="1" order-md="1">
                            <DoughnutExample
                                ref="celkovo_chart"
                                :chart-data="chartDataDoughnut"
                                :options="optionsDoughnut"                        
                            > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="12" lg="6" order="3" order-md="3" order-lg="2" class="[text-left,suggestions-column]">
                            <div class="nadpis-undertitle"><b-row><h2>Zhrnutie</h2></b-row></div>
                            <div class="suggestions">
                                <div class="suggestion" v-if="celkovo_sugg_between">
                                    To je o <strong>{{diff_sugg_between1}}</strong> kg CO2e viac ako priemerný Slovák, no o <strong>{{diff_sugg_between2}}</strong> kg CO2e menej ako priemerný Európan
                                </div>
                                <div class="suggestion" v-if="celkovo_sugg_over">
                                    To je až o <strong>{{diff_sugg_over1}}</strong> kg CO2e viac ako priemerný Slovák a takisto aj o <strong>{{diff_sugg_over2}}</strong> kg CO2e viac ako priemerný Európan
                                </div>
                                <div class="suggestion" v-if="celkovo_sugg_under">
                                    To je o <strong>{{diff_sugg_under1}}</strong> kg CO2e menej ako priemerný Slovák no dokonca až o <strong>{{diff_sugg_under2}}</strong> kg CO2e menej ako priemerný Európan
                                </div>
                                <div class="suggestion">
                                    Najväčšiu časť tvojej uhlíkovej stopy tvorí kategória <strong>{{sugg_biggest_name}}</strong> a to <strong>{{sugg_biggest_ratio}}%</strong> z celku, čo je <strong>{{sugg_biggest_value}}</strong> kg CO2e
                                </div>
                                <div class="suggestion">
                                    Naopak najmenšiu časť tvojej uhlíkovej stopy tvorí kategória <strong>{{sugg_lowest_name}}</strong> a to <strong>{{sugg_lowest_ratio}}%</strong> z celku, čo je <strong>{{sugg_lowest_value}}</strong> kg CO2e
                                </div>
                                <div class="suggestion">
                                    Ak by si ročne nasadil <strong>{{stromy}}</strong> stromov, tvoja uhlíková stopa by bola nulová :)
                                </div>
                            </div> 
                        </b-col>
                        <b-col cols=12 md="6" lg="3" order="2" order-md="2" order-lg="3">
                            <BarExample
                                ref="celkovo_porovnanie_chart"
                                :chart-data="chartDataBar"
                                :options="optionsBar"    
                            > 
                            </BarExample>
                        </b-col>
                        
                    
                    </b-row>
                </div>
            </div>
        </div>
        <div class="celkovo">  
            <b-row><h1>Výsledky po jednotlivých kategóriách</h1></b-row>  
            <div class="pocastiach">
                <div class="obsah">   
                    <b-row class="nadpis"> 
                        <b-col cols="12" md="6" class="text-left"><h3>Bývanie</h3></b-col>
                        <b-col cols="12" md="6" class="text-left"><h3>Doprava</h3></b-col>
                    </b-row>
                    <b-row class="kategoria">
                        <b-col cols=12 md="2">
                            <DoughnutExample
                            ref="celkovo_byvanie"
                            :chart-data="chartData_byvanie"
                            :options="options1"
                            class="graf"
                            > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="4">
                        
                        </b-col>
                        <b-col cols=12 md="2">
                           <DoughnutExample
                            ref="celkovo_doprava"
                            :chart-data="chartData_doprava"
                            :options="options1"
                            class="graf"
                            > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="4">
                            
                        </b-col>
                    </b-row>


                    <b-row class="nadpis-2"> 
                        <b-col cols="12" md="6" class="text-left"><h3>Jedlo</h3></b-col>
                        <b-col cols="12" md="6" class="text-left"><h3>Spotreba</h3></b-col>
                    </b-row>
                    <b-row class="kategoria">
                        <b-col cols=12 md="2">
                            <DoughnutExample
                            ref="celkovo_jedlo"
                            :chart-data="chartData_jedlo"
                            :options="options1"
                            class="graf"
                            > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="4">
                        
                        </b-col>
                        <b-col cols=12 md="2">
                            <DoughnutExample
                            ref="celkovo_spotreba"
                            :chart-data="chartData_spotreba"
                            :options="options1"
                            class="graf"
                            > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="4">
                        
                        </b-col>
                    </b-row>


                    


                    <b-row class="nadpis-2"> 
                        <b-col cols="12" md="6" class="text-left"><h3>životný štýl</h3></b-col>
                    </b-row>
                    <b-row class="kategoria-2">
                        <b-col cols=12 md="2">
                            <DoughnutExample
                            ref="celkovo_ziv_styl"
                            :chart-data="chartData_ziv_styl"
                            :options="options1"
                            class="graf"
                            > 
                            </DoughnutExample>
                        </b-col>
                        <b-col cols=12 md="4">
                        
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
            display: false,
            
         },
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            },
        cutoutPercentage: 55
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
                            beginAtZero: true,
                            fontColor: "#FFFFFF",
						},
						gridLines: {
                            display: true,
                            fontColor: '#FFFFFF',
						}
					}],
					xAxes: [{
						ticks: {
                            beginAtZero: true,
                            fontColor: '#FFFFFF',
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
        cutoutPercentage: 0,
        },

        chartDataDoughnut :{
        
            labels: ["Bývanie","Doprava","Jedlo","Spotreba","Životný štýl"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94','#BEBEBE'],
                data: [673,2651,1657,804,515],
                borderWidth: 0
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

        chartData_byvanie :{
        
            labels: ["Centrálne vykurovanie","Elektrina","Zemný plyn","LPG","Tuhé palivo"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94','#BEBEBE'],
                data: [413,260,0,0,0],
            }
            ],
        },

        chartData_doprava :{
        
            labels: ["Automobilová doprava","Hromadná doprava","Vlaková doprava","Letecká doprava"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94'],
                data: [1199,633,31,788],
            }
            ],
        },

        chartData_jedlo :{
        
            labels: ["Hovädzie mäso","Ostatné mäso","mliečne výrobky a vajcia","Syry","Zelenina","Alkohol"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94','#BEBEBE','#AD4B41'],
                data: [210.6,449.7375,520.35,159.6,137.2,128.945],
            }
            ],
        },

        chartData_spotreba :{
        
            labels: ["Automobil","Biela technika","Ostatné elektrospotrebiče","Osobná elektronika" ,"Nábytok"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94' ,'#BEBEBE'],
                data: [388.20,45.15,98.21,206.23,66],
            }
            ],
        },

        chartData_ziv_styl :{
        
            labels: ["Oblečenie","Dovolenkovanie","Odpady"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5'],
                data: [201.99,197.5,115.53],
            }
            ],
        },


        celkovo_sugg_under : false,
        diff_sugg_under1: 0,
        diff_sugg_under2: 0,
        celkovo_sugg_between : true,
        diff_sugg_between1: 0,
        diff_sugg_between2: 0,
        celkovo_sugg_over : false,
        diff_sugg_over1: 0,
        diff_sugg_over2: 0,

        celkovo_sugg_biggest : 1,
        sugg_biggest_value: 0,
        celkovo_sugg_lowest : 4,
        sugg_lowest_value: 0,
        sugg_biggest_name: '',
        sugg_lowest_name: '',
        sugg_biggest_ratio:0,
        sugg_lowest_ratio:0,

        stromy: 0,





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
        emisie_byvanie: {
            get() {
                return this.$store.state.emisie_byvanie
            },
        },
        emisie_doprava: {
            get() {
                return this.$store.state.emisie_doprava
            },
        },
        emisie_jedlo: {
            get() {
                return this.$store.state.emisie_jedlo
            },
        },
        emisie_spotreba: {
            get() {
                return this.$store.state.emisie_spotreba
            },
        },
        emisie_ziv_styl: {
            get() {
                return this.$store.state.emisie_ziv_styl
            },
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
        emisie_byvanie() {
            this.fillChart()           
        },
        emisie_doprava() {
            this.fillChart()           
        },
        emisie_jedlo() {
            this.fillChart()            
        },
        emisie_spotreba() {
            this.fillChart()
            },
        emisie_ziv_styl() {
            this.fillChart()    
        },
    },
    
    mounted() {
            this.fillChart();
    },

    methods: {
        
        fillChart() {
            this.chartDataDoughnut.datasets[0].data = [this.uhlikova_stopa_byvanie,this.uhlikova_stopa_doprava, this.uhlikova_stopa_jedlo,
            this.uhlikova_stopa_spotreba, this.uhlikova_stopa_ziv_styl];
            this.uhlikova_stopa_celkovo = this.uhlikova_stopa_byvanie+this.uhlikova_stopa_doprava + this.uhlikova_stopa_jedlo + this.uhlikova_stopa_spotreba + this.uhlikova_stopa_ziv_styl;
            this.chartDataBar.datasets[0].data[1] = this.uhlikova_stopa_celkovo
            this.updateChart()
            this.celkovo_suggestions(this.chartDataDoughnut.datasets[0].data)
            this.updateChartBar()
            this.updateChartByvanie()
            this.updateChartDoprava()
            this.updateChartJedlo()
            this.updateChartSpotreba()
            this.updateChartZivstyl()
        },
        updateChart() {
         this.$refs.celkovo_chart.update();
        },
        updateChartBar() {
         this.$refs.celkovo_porovnanie_chart.update();
        }, 
        updateChartByvanie() {
         this.$refs.celkovo_byvanie.update();
        },
        updateChartDoprava() {
         this.$refs.celkovo_doprava.update();
        },
        updateChartJedlo() {
         this.$refs.celkovo_jedlo.update();
        },
        updateChartSpotreba() {
         this.$refs.celkovo_spotreba.update();
        },
        updateChartZivstyl() {
         this.$refs.celkovo_ziv_styl.update();
        },
        celkovo_suggestions(value) {
            if(this.uhlikova_stopa_celkovo > 5888 && this.uhlikova_stopa_celkovo < 8480 ) {
                this.celkovo_sugg_between = true
                this.celkovo_sugg_under = false
                this.celkovo_sugg_over = false
                this.diff_sugg_between1 = this.uhlikova_stopa_celkovo - 5888
                this.diff_sugg_between2 = 8480 - this.uhlikova_stopa_celkovo 
            }
            if(this.uhlikova_stopa_celkovo < 5888) {
                this.celkovo_sugg_between = false
                this.celkovo_sugg_under = true
                this.celkovo_sugg_over = false
                this.diff_sugg_under1 = 5888 - this.uhlikova_stopa_celkovo
                this.diff_sugg_under2 = 8480 - this.uhlikova_stopa_celkovo 
            }
            if(this.uhlikova_stopa_celkovo > 8480 ) {
                this.celkovo_sugg_between = false
                this.celkovo_sugg_under = false
                this.celkovo_sugg_over = true
                this.diff_sugg_over1 = this.uhlikova_stopa_celkovo - 5888
                this.diff_sugg_over2 = this.uhlikova_stopa_celkovo - 8480
            }
            this.celkovo_sugg_biggest = this.indexOfMax(value)
            this.sugg_biggest_value = value[this.celkovo_sugg_biggest]
            this.sugg_biggest_ratio = Math.round(100*(this.sugg_biggest_value/this.uhlikova_stopa_celkovo))
            
            this.celkovo_sugg_lowest = this.indexOfMin(value)
            this.sugg_lowest_value = value[this.celkovo_sugg_lowest]
            this.sugg_lowest_ratio = Math.round(100*(this.sugg_lowest_value/this.uhlikova_stopa_celkovo))

            const section_names = ["bývanie","doprava","jedlo","spotreba","životný štýl"]
            this.sugg_biggest_name = section_names[this.celkovo_sugg_biggest]
            this.sugg_lowest_name = section_names[this.celkovo_sugg_lowest]
            console.log(this.celkovo_sugg_biggest)
            console.log(this.celkovo_sugg_lowest)

            this.stromy = Math.round(this.uhlikova_stopa_celkovo/100);
            
        },
        indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }

            var max = arr[0];
            var maxIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }

            return maxIndex;
        },
        indexOfMin(arr) {
            if (arr.length === 0) {
                return -1;
            }

            var min = arr[0];
            var minIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    minIndex = i;
                    min = arr[i];
                }
            }

            return minIndex;
        },
    }
}

</script>

    

<style scoped>
.celkovo {
    padding: 5%;
}

.nadpis-2 {
   margin-top: 5%;
}

.nadpis-title {
    font-family: 'montserrat-bold' ;
    margin-bottom: 5%;
    color: white;
}

.nadpis-undertitle {
    margin-left: 5%;
    color: white;
}

.pocastiach {
    margin-top: 5%;
    background: #F2F2F2;
    box-shadow: 5px 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-left: 5%;
    width:90%;
    overflow: auto;
}

.obsah {
    padding: 5%;
}

.kategoria {
    height: 10%;
    border-bottom: 2px solid rgba(206, 206, 206, 1);
}
.kategoria-2 {
    height: 10%;
   
}
.graf_celkovo{
    margin-right: 5%;
   
}

.background-cover {
    background: linear-gradient(180deg, rgba(206, 206, 206, 0.24) 5.21%, rgba(1, 1, 1, 0) 100%),url('../assets/background-results.jpg') 50% 50%;
    background-size: cover;
}

.suggestions {
    padding: 5%;
    overflow: auto;
    background: rgba(85, 85, 85, 0.65);
    border-radius: 10px;
    color: white;
}
.suggestion {
    margin-bottom:5% ;
    color: white;
}
.suggestions-column {
    padding: 5%;
    color: white;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

</style>
