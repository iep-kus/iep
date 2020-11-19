<template>
    
    <div id="kalkulacka_grafy">
       
        <div v-if="!path_vypocitat" class="background-cover"> 
            <div class="celkovo">  
                <b-row class="nadpis-title"> 
                    <b-col class="text-center"><h1>Moja celková uhlíková stopa je <strong>{{celkovo}}</strong> kilogramov CO2e ročne.</h1></b-col>
                </b-row>
                <div class="graf_celkovo">    
                    <b-row align-h="center" align-v="center">
                
                        <b-col cols=12 md="6" lg="3" order="1" order-md="1">
                            <DoughnutExample
                                ref="category_chart"
                                :chart-data="chartData_category"
                                :options="options_category"                        
                            > 
                            </DoughnutExample>
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
        <div class="background_dyo">    
            <div v-if="!path_vypocitat" class="do_your_own">
                <h1>Vypočítaj si tvoju vlastnú uhlíkovú stopu a porovnaj sa. Zaberie ti to len 5 minút!</h1> 
                <b-button class="zacat" @click="kalkulacka()" ><h1>Začať</h1></b-button>
            </div>
        </div>


        <div v-if="path_vypocitat" class="section"><VysledokForm></VysledokForm></div>
        
        <div v-if="path_vypocitat" class="section"><CalculationForm_graf></CalculationForm_graf></div>
        

    </div>

</template>

<script>
import VysledokForm from '@/components/VysledokForm'
import CalculationForm_graf from '@/components/CalculationForm_graf'
import DoughnutExample from "@/components/DoughnutExample.vue";
import BarExample from "@/components/BarExample.vue";
import database from '../firebase';


export default {
    name: 'Kalkulacka_grafy',
    components: {CalculationForm_graf,VysledokForm,DoughnutExample,BarExample},
    
     data() {
      return { 
        options_category: {
            responsive: true,
            legend: {
                display: false,
                
            },
            title: {
                display: true,
                text: 'Moja uhlíková stopa podľa kategórií (v kg CO2e)',
                fontColor: "#FFFFFF",
                fontSize: 15,
                fontFamily: "montserrat",
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
            title: {
                display: true,
                text: 'Porovnanie s priemerným Slovákom a Európanom (v kg CO2e)',
                fontColor: "#FFFFFF",
                fontSize: 15,
                fontFamily: "montserrat",
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

    

        chartData_category :{
        
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
        
            labels: ["Slovák","Ja","Európan"],
            datasets: [
            {
                backgroundColor: ['#6F6F6F','#FF6600','#6F6F6F'],
                data: [5888,5888,8480],
            }
            ],
        },
        
        celkovo: 0,
        byvanie : 0,
        jedlo : 0,
        doprava : 0,
        spotreba : 0,
        ziv_styl : 0,


      }
    },
    

    created() {
        var user_reportId = this.$route.params.user_key;
        database.ref('report/'+ user_reportId).once("value").then((snapshot)=>{
            this.celkovo = snapshot.child("celkovo").val();
            this.byvanie = snapshot.child("byvanie").val();
            this.doprava = snapshot.child("doprava").val();
            this.jedlo = snapshot.child("jedlo").val();
            this.spotreba = snapshot.child("spotreba").val();
            this.ziv_styl = snapshot.child("ziv_styl").val();
            })

    },
    
    computed: {
        path_vypocitat: {
            get() {
                return this.$store.state.path_vypocitat
            },
        },
    },
    

    watch: {
        celkovo() {
            this.fillData();
        },
    },
    methods: {
        kalkulacka() {
            this.$router.push({name:'Kalkulacka'})
        },
        fillData() {
            this.chartData_category.datasets[0].data = [Number(this.byvanie),this.doprava,this.jedlo,this.spotreba,this.ziv_styl]
            this.chartDataBar.datasets[0].data[1] = Number(this.celkovo)
            this.updateChart()
        },
        updateChart() {
            this.$refs.celkovo_porovnanie_chart.update();    
            this.$refs.category_chart.update();
        }
    }
}
</script>

<style scoped>
#kalkulacka {
    width: 100%;
}


.section {
    position:relative;
}

.celkovo {
    padding: 5%;
}

.nadpis-2 {
   margin-top: 5%;
}


.nadpis-title {
    font-family: 'montserrat-bold' ;
    margin-bottom: 3%;
    color: white;
}

.nadpis-undertitle {
    margin-left: 5%;
    color: white;
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
    margin-right: 0%;
   
}

.background-cover {
    background: linear-gradient(180deg, rgba(206, 206, 206, 0.24) 5.21%, rgba(1, 1, 1, 0) 100%),url('../assets/background-results.jpg') 50% 50%;
    background-size: cover;
    overflow: auto;
}


.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.zacat {
    position: relative;
    text-align: center;
    top: 5vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    margin-bottom: 10%;
    vertical-align: middle;
    padding: 1rem;
    width: 18rem;
    height: 5.5rem; 
    background-color:#FF6600;
    border-radius: 20px; 
    border-color:white;
    color: white;
    font-family: 'montserrat-bold';
    transition: color 0.5s;
    z-index: 1;
   
    


   
}


.zacat {
  transition-duration: 0.4s;
}

.zacat:hover {
  background-color: rgba(172, 69, 0, 1); /* Green */ /* Green */
  color: white;;
}

.background_dyo {
    overflow: auto;
    background-color:whitesmoke;
}

.do_your_own {
    padding: 5%;
    margin-left: 5%;
    margin-right: 5%;
    font-family: 'montserrat-bold';
}

</style>