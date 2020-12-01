<template>  
    
    <b-container fluid>
    
        
        <div class="background-cover"> 
            <div class="celkovo">  
               <b-row class="nadpis-title"> 
                    <b-col class="text-center"><h1>Výsledky</h1></b-col>
                </b-row>
    
                <div class="graf_celkovo">    
                    <b-row align-h="center" align-v="center">
                
                        <b-col cols=12 lg="3" order="1" >
                            <b-row class="titles"  align-h="center" align-v="center">
                                <h3>Tvoja pôvodná uhlíková stopa bola {{celkovo}} kg CO2e.</h3>
                            </b-row>
                            <b-row class="charts"  align-h="center" align-v="center">
                                <DoughnutExample
                                    ref="povodne_chart"
                                    :chart-data="povodneDoughnut"
                                    :options="povodneDoughnut_o"                        
                                > 
                                </DoughnutExample>
                            </b-row>
                        </b-col>
                        <b-col cols=12 lg="4" offset-lg="1" order="2" order-lg="2" class="zmena">
                            <b-row align-h="center" align-v="center" v-if="celk_zmena<0" class="titles">
                                <h3>Celkovo by si vykonanými zmenami znížil svoju uhlíkovú stopu o {{-celk_zmena}} kg CO2e</h3>
                            </b-row>
                            <b-row align-h="center" align-v="center" v-if="celk_zmena==0" class="titles">
                                <h3>Celkovo by sa vykonanými zmenami tvoja uhlíkova stopa nezmenila</h3>
                            </b-row>
                            <b-row align-h="center" align-v="center"  v-if="celk_zmena>0" class="titles">
                                <h3>Celkovo by si vykonanými zmenami zvýšil svoju uhlíkovú stopu o {{celk_zmena}} kg CO2e</h3>
                            </b-row>
                            <b-row class="charts" align-h="center" align-v="center">
                                <BarExample
                                    ref="zmena_chart"
                                    :chart-data="zmenaBar"
                                    :options="zmenaBar_o"    
                                > 
                                </BarExample>
                            </b-row> 
                        </b-col>
                        <b-col cols=12 lg="3" offset-lg="1" order="2" order-lg="3">

                            <b-row align-h="center" align-v="center" class="titles">
                                <h3>Po vykonaných zmenách by tvoja uhlíkova stopa bola {{uhlikova_stopa_celkovo}} kg CO2e.</h3>
                            </b-row>
                            <b-row class="charts" align-h="center" align-v="center">
                                <DoughnutExample
                                    ref="nove_chart"
                                    :chart-data="noveDoughnut"
                                    :options="noveDoughnut_o"                        
                                > 
                                </DoughnutExample>
                            </b-row>
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
import database from '../firebase';


export default {
    name: 'VysledokZmena',
    components: {DoughnutExample,BarExample},
    data() {
      return { 
        povodneDoughnut_o: {
            responsive: true,
            legend: {
                display: false,
                
            },
            title: {
                display: false,
                text: 'Tvoja uhlíková stopa podľa kategórií (v kg CO2e)',
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

        zmenaBar_o: {
            responsive: true,
            legend: {
                display: false
            },
            title: {
                display: false,
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
                             fontSize: 15, 
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
                            fontSize: 15,
						},
						gridLines: {
							display: false
						}
					}]
				},
        },

        noveDoughnut_o: {
            responsive: true,
            legend: {
                display: false,
                
            },
            title: {
                display: false,
                text: 'Tvoja uhlíková stopa podľa kategórií (v kg CO2e)',
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

        povodneDoughnut :{
        
            labels: ["Bývanie","Doprava","Jedlo","Spotreba","Životný štýl"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94','#BEBEBE'],
                data: [0,0,0,0,0],
                borderWidth: 0
            }
            ],
        },

        zmenaBar :{
        
            labels: ["Bývanie","Doprava","Jedlo","Spotreba","Životný štýl"],
            datasets: [
            {
                backgroundColor: ['#6F6F6F','#6F6F6F','#6F6F6F','#6F6F6F','#6F6F6F'],
                data: [0,0,0,0,0],
            }
            ],
        },

        noveDoughnut:{
        
            labels: ["Bývanie","Doprava","Jedlo","Spotreba","Životný štýl"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94','#BEBEBE'],
                data: [0,0,0,0,0],
                borderWidth: 0
            }
            ],
        },


        celkovo: 0,
        byvanie : 0,
        jedlo : 0,
        doprava : 0,
        spotreba : 0,
        ziv_styl : 0,

       celk_zmena: 0,
    

       

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
        celkovo() {
            this.povodne()
            this.fillChart()
        }
    },
    
    mounted() {
        this.fillChart();
    },

    created() {
        
        var user_reportId = this.$route.params.user_key;
        database.ref('report/'+ user_reportId).once("value").then((snapshot)=>{
            this.celkovo = snapshot.child("celkovo").val();
            this.byvanie = snapshot.child("byvanie").val();
            this.doprava = snapshot.child("doprava").val();
            this.jedlo = snapshot.child("jedlo").val();
            this.spotreba = snapshot.child("spotreba").val();
            this.ziv_styl = snapshot.child("zivotny_styl").val();
           
        })
        
        
    },


    methods: {
        
        

        fillChart() {
            this.noveDoughnut.datasets[0].data = [this.uhlikova_stopa_byvanie,this.uhlikova_stopa_doprava, this.uhlikova_stopa_jedlo,
            this.uhlikova_stopa_spotreba, this.uhlikova_stopa_ziv_styl];
            this.uhlikova_stopa_celkovo = this.uhlikova_stopa_byvanie+this.uhlikova_stopa_doprava + this.uhlikova_stopa_jedlo + this.uhlikova_stopa_spotreba + this.uhlikova_stopa_ziv_styl;
            this.zmenaBar.datasets[0].data = [this.uhlikova_stopa_byvanie-this.byvanie,this.uhlikova_stopa_doprava-this.doprava,this.uhlikova_stopa_jedlo - this.jedlo, this.uhlikova_stopa_spotreba-this.spotreba,
                this.uhlikova_stopa_ziv_styl-this.ziv_styl]
            let i = 0
            for(i = 0; i<= 4; i++)
            {
                    if(this.zmenaBar.datasets[0].data[i]>=0) {
                       this.zmenaBar.datasets[0].backgroundColor[i]= '#FC5E5E';
                    }
                    else{
                        this.zmenaBar.datasets[0].backgroundColor[i]= '#92D050';
                    }
            }
            this.celk_zmena = this.uhlikova_stopa_celkovo- this.celkovo
            
            this.updatenoveChart()
            this.updatezmenaBar()
        },
        povodne() {
            this.povodneDoughnut.datasets[0].data = [this.byvanie,this.doprava, this.jedlo,
            this.spotreba, this.ziv_styl];
            this.updatepovodneChart()
        },
        updatepovodneChart() {
            this.$refs.povodne_chart.update();
        },
        updatezmenaBar() {
            this.$refs.zmena_chart.update();
        }, 
        updatenoveChart() {
            this.$refs.nove_chart.update();
        },
       
        
            
        
    }
}

</script>

    

<style scoped>
.celkovo {
    padding: 10%;
}

.nadpis-2 { 
   margin-top: 5%;
}

.titles {
    font-family: 'montserrat-bold' ;
    margin-bottom: 1rem;
    color: white;
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

.charts {
    margin-bottom: 2rem;
}


.obsah {
    padding: 5%;
}

.suggestions {
    padding: 5%;
    overflow: auto;
    background: rgba(85, 85, 85, 0.65);
    border-radius: 10px;
}


.background-cover {
    background: linear-gradient(180deg, rgba(206, 206, 206, 0.24) 5.21%, rgba(1, 1, 1, 0) 100%),url('../assets/background-results.jpg') 50% 50%;
    background-size: cover;
    overflow: auto;
}


.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}



</style>
