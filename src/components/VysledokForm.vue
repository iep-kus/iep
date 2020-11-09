<template>
    
      
    <b-container fluid>

        <div class="celkovo">
            <div class="obsah">  
                <b-row>
                    <h2>Tvoja uhlíková stopa</h2>
                </b-row>
                
                <b-row>
                    <b-col> 
                        <div class="celkovy graf">
                             <DoughnutExample
                                    ref="celkovo_chart"
                                    :chart-data="chartData"
                                    :options="options"
                                    
                                > 
                            </DoughnutExample>
                            <div class="celkova_hodnota"><h2>{{uhlikova_stopa_celkovo}} kg CO2e</h2></div>
                        </div>
                    </b-col> 
                </b-row>
                
                

                
                    

                
                
            </div>
        </div>
            
    </b-container>

    
</template>


<script>
import DoughnutExample from "./DoughnutExample.vue";

export default {
    name: 'VysledokForm',
    components: {DoughnutExample},
    data() {
      return { 
        options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            },
        },

        chartData :{
        
            labels: ["Bývanie","Doprava","Jedlo","Spotreba","Životný štýl"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94','#BEBEBE'],
                data: [673,2651,1657,804,515],
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
            this.chartData.datasets[0].data = [this.uhlikova_stopa_byvanie,this.uhlikova_stopa_doprava, this.uhlikova_stopa_jedlo,
             this.uhlikova_stopa_spotreba, this.uhlikova_stopa_ziv_styl];
            this.updateChart()
        },
        updateChart() {
         this.$refs.celkovo_chart.update();
        },
    }
}

</script>

<style  scoped>

h1 {
    padding: 5%;
    font-weight: 1000;
}

.celkovo {
    background-color:rgba(237, 237, 237, 1);
    
    overflow: auto;
    position: relative;
}


.celkova_hodnota {
    text-align: center;
}

.nadpis {
    padding: 5%;
    text-align: left;
    margin-top: 20vh;
}

.graf {
    display: block;
    position: relative;
    margin-left: 5vh;
    margin-right: auto;
    text-align: left; 
    height: 15vh; 
    
}

.obsah {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10vh;
}

.zacat {
    position: relative;
  text-align: center;
  top: 5vh;
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
  padding: 1rem;
  width: 223px;
   height: 52px;  
   background: #FF6600;
    border-radius: 20px; 
    border: 0px solid #000000;
    color: white;

   
}

.zacat {
  transition-duration: 0.4s;
}

.zacat:hover {
  background-color: rgba(172, 69, 0, 1); /* Green */
  color: white;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}


</style>
