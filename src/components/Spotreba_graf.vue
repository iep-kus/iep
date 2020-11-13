<template>


    <b-container fluid >
        
        <div class="item">
                
            <div class="spotreba">
                <div class="wrapper-right">    
                    <b-row md="4" style="height: 20vh" align-h="start" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="1" class="text-left">   
                        <b-col offset-md="0.5" cols="4" align-h="start"><h1>Spotreba</h1></b-col>
                        
                    </b-row>   
                    
                    <b-row>
                        
                        <b-col cols="12" lg="4" order="2" order-lg="1">
                            <div class="graf">
                                <DoughnutExample
                                        ref="spotreba_chart"
                                        :chart-data="chartData"
                                        :options="options"
                                        
                                    > 
                                </DoughnutExample>
                                <div class="celkova_hodnota"><h2>Uhlíková stopa tvojej spotreby je <strong>{{uhlikova_stopa_spotreba}}</strong>  kg CO2e</h2></div>
                            </div>
                        </b-col>


                        <b-col cols="12" lg="8" order="1" order-lg="2">
                
                            <div class="otazka">
                                <b-row v-if="details_spotreba==true" style="margin-bottom:2.5vh" align-v="start">      
                                    <b-col cols="1" class="text-right">16.</b-col>
                                    <b-col cols="10" lg="5" class="text-left" align-h="start">Koľko áut vlastní Vaša domácnosť?</b-col>
                                    <b-col cols="11" lg="5" offset="1" offset-lg="0" class="text-left" align-h="start">
                                        <b-form-spinbutton v-on:change="countEmissions()" id="vlastnenieaut" v-model="vlastnenieaut" min="0" max="20"></b-form-spinbutton>
                                    </b-col>
                                </b-row>
                                <div v-if="details_spotreba==true">
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col cols="1" lg="2" class="text-right"></b-col>
                                        <b-col cols="10" lg="4" class="text-left">Priemerne po koľkých rokoch vymeníte auto za nové?
                                            <b-icon-question-circle-fill font-scale="1.2" id="question16"></b-icon-question-circle-fill>
                                            <b-tooltip target="question16" title="Príklad: Vlastním 2 autá. Jedno auto vymením po 14-tich rokoch a druhé vymením po 10-tich rokoch. To znamená, že priemerne mením autá po 12-tich rokoch. Do odpoveďe preto zadám číslo 12."  variant="dark"></b-tooltip>
                                        </b-col>
                                        <b-col cols="10" lg="5" offset="1" offset-lg="0" class="text-right" > 
                                            <b-form-spinbutton v-on:change="countEmissions()" id="vekaut" v-model="vekaut" min="1" max="40"></b-form-spinbutton>
                                        </b-col>
                            
                                    </b-row>

                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col cols="1" lg="2" class="text-right"></b-col>
                                        <b-col cols="10" lg="4" class="text-left">Prevažne kupujete autá:</b-col>
                                        <b-col cols="10" lg="5" offset="1" offset-lg="0" class="text-right" > 
                                            <b-form-select v-on:change="countEmissions()" v-model="nakupauta" :options="nakupaut"></b-form-select>
                                        </b-col>
                            
                                    </b-row>
                                </div>
                            </div>
                            




                            
                            
                            
                            <div class="otazka">
                                <b-row  style="margin-bottom:2.5vh" align-v="start">      
                                    <b-col cols="1" class="text-right">17.</b-col>
                                    <b-col cols="10" lg="5" class="text-left" align-h="start">Koľko z týchto elektrospotrebičov vlastníte? (chladnička, práčka, sušička, umývačka riadu, sporák, rúra, klimatizácia)</b-col>
                                    <b-col cols="10" lg="5" offset="1" offset-lg="0" class="text-left" align-h="start">
                                        <b-form-spinbutton id="vlastneniebielatechnika" v-model="vlastneniebielatechnika" min="0" max="6" v-on:change="countEmissions()"></b-form-spinbutton>
                                    </b-col>
                                </b-row>
                                <div v-if="details_spotreba==true">
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col cols="1" lg="2" class="text-right"></b-col>
                                        <b-col cols="10" lg="4"  class="text-left">Priemerne ako často ich meníte?
                                            <b-icon-question-circle-fill font-scale="1.2" id="question17"></b-icon-question-circle-fill>
                                            <b-tooltip target="question17" title="Príklad: Z uvedených spotrebičov vlastním 3: Chladničku , práčku a sporák. Chladničku zvyknem meniť po 8-ich rokoch. Práčku mením raz za 12 rokov. Sporák mením po 16-tich rokoch. Do odpoveďe preto uvediem číslo 12, teda priemer týchto čísel. (8+12+16)/3=12 Tento princíp použite aj pri otázkach 18,19"  variant="dark"></b-tooltip>
                                        </b-col>
                                        <b-col lg="2" cols="3" offset="1" offset-lg="0" class="text-right">Raz za</b-col>
                                        <b-col lg="2" cols="5" class="text-right" >
                                            <b-form-spinbutton id="vekbielatechnika" v-model="vekbielatechnika" min="1" max="40" v-on:change="countEmissions()"></b-form-spinbutton>
                                        </b-col> 
                                        
                                        <b-col lg="1" cols="2" class="text-left" v-if="vekbielatechnika>4">rokov</b-col>
                                        <b-col lg="1" cols="2" class="text-left" v-if="vekbielatechnika<5">roky</b-col>
                                    
                                    </b-row>

                                    
                                </div>
                            </div>






                            <div class="otazka" v-if="details_spotreba==true">
                                <b-row  style="margin-bottom:2.5vh" align-v="start">      
                                    <b-col lg="1" cols="1" class="text-right">18.</b-col>
                                    <b-col lg="5" cols="10" class="text-left" align-h="start">Koľko ďalších elektronických zariadení, ktoré používa viacero členov domácností, máte? (televízor, repráky, herná konzola, vysávač, kuchynské roboty, kávovar, rýchlovarná kanvica, mikrovlnka, odšťavovač, žehlička, ohrievač... )</b-col>
                                    <b-col lg="5" cols="10" offset-lg="0" offset="1" class="text-left" align-h="start">
                                        <b-form-spinbutton id="vlastnenieciernatechnika" v-model="vlastnenieciernatechnika" min="0" max="20" v-on:change="countEmissions()"></b-form-spinbutton>
                                    </b-col>
                                </b-row>

                                <div v-if="details_spotreba==true">
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col lg="2" cols="1" class="text-right"></b-col>
                                        <b-col lg="4" cols="10" class="text-left">Priemerne ako často ich meníte?</b-col>
                                        <b-col lg="2" cols="3" offset="1" offset-lg="0" class="text-right">Raz za</b-col>
                                        <b-col lg="2" cols="5" class="text-right" >
                                            
                                            <b-form-spinbutton id="vekciernatechnika" v-model="vekciernatechnika" min="1" max="40" v-on:change="countEmissions()"></b-form-spinbutton>
                                        </b-col> 
                                        <b-col lg="1" cols="2" class="text-right" v-if="vekciernatechnika>4">rokov</b-col>
                                        <b-col lg="1" cols="2" class="text-right" v-if="vekciernatechnika<5">roky</b-col>
                            
                                    </b-row>

                                    
                                </div>
                            </div>








                            <div class="otazka">
                                <b-row  style="margin-bottom:2.5vh" align-v="start">      
                                    <b-col lg="1" cols="1" class="text-right" v-if="details_spotreba==true">19.</b-col>
                                    <b-col lg="1" cols="1" class="text-right" v-if="details_spotreba==false">18.</b-col>
                                    <b-col lg="5" cols="10" class="text-left" align-h="start">Koľko zariadení z osobnej elektroniky vlastníš? (mobil, notebook, tablet, smart hodinky, power banka, čítačka kníh ...)</b-col>
                                    <b-col lg="5" cols="10" offset="1" offset-lg="0" class="text-left" align-h="start">
                                        <b-form-spinbutton id="vlastnenietechnika" v-model="vlastnenietechnika" min="0" max="20" v-on:change="countEmissions()">
                                    </b-form-spinbutton></b-col>
                                </b-row>
                                <div v-if="details_spotreba==true">
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col lg="2" cols="1" class="text-right"></b-col>
                                        <b-col lg="4" cols="10" class="text-left">Priemerne ako často ich meníš?</b-col>
                                        <b-col lg="2" cols="3" offset-lg="0" offset="1" class="text-right">Raz za</b-col>
                                        <b-col lg="2" cols="5" class="text-right" >
                                            
                                            <b-form-spinbutton id="vektechnika" v-model="vektechnika" min="1" max="40" v-on:change="countEmissions()"></b-form-spinbutton>
                                        </b-col> 
                                        <b-col lg="1" cols="2" class="text-right" v-if="vektechnika>4">rokov</b-col>
                                        <b-col lg="1" cols="2" class="text-right" v-if="vektechnika<5">roky</b-col>
                            
                                    </b-row>

                                    
                                </div>
                            </div>





                            


                            <div class="otazka">
                                <b-row  style="margin-bottom:2.5vh" align-v="start">      
                                    <b-col lg="1" cols="1" class="text-right" v-if="details_spotreba==true">20.</b-col>
                                    <b-col lg="1" cols="1" class="text-right" v-if="details_spotreba==false">19.</b-col>
                                    <b-col lg="5" cols="10" class="text-left" align-h="start">Koľko percent tvojich všetkých nákupov (biela technika a iné elektrospotrebiče, osobná elektronika alebo nábytok) tvoria nákupy z druhej ruky?</b-col>
                                    <b-col lg="5" cols="10" offset="1" offset-lg="0" class="text-left" align-h="start" >
                                        <b-form-input type="range" id="druharuka" v-model="druharuka" min="0" max="100" v-on:change="countEmissions()"></b-form-input>
                                    </b-col>
                                </b-row>
                                
                            </div>


                            <b-row align-h="center">
                                <b-col align-v="center">
                                    <div >
                                        <b-button class="zacat" :pressed.sync="details_spotreba">podrobnejšie</b-button>
                                    </div>
                                </b-col>
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

export default {
    name: 'Spotreba_graf',
    components: {DoughnutExample},
    data() {
      return {
        
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
               display: false
            },
            animation: {
                animateRotate: true,
            },
        },

        chartData :{
        
            labels: ["Automobil","Biela technika","Ostatné elektrospotrebiče","Osobná elektronika" ,"Nábytok"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5','#C69C94' ,'#BEBEBE'],
                data: [388.20,45.15,98.21,206.23,66],
            }
            ],
        },


        nakupaut: [
          { value: 1, text: 'Nové' },
          { value: 2, text: 'Novšie ako 3 roky' },
          { value: 3, text: 'Staršie ako 3 roky' },
          { value: 4, text: 'Staršie ako 10 rokov' }
        ],

        

        
      }
    },

    methods: {
        countEmissions() {
            if(this.details_spotreba==false) {
                this.emisie_spotreba[0] = 7764*this.pocetaut*1/(10*this.clenovia);
                this.emisie_spotreba[1] = 270.925*(1-this.druharuka/100)*this.vlastneniebielatechnika/(15*this.clenovia);
                this.emisie_spotreba[2] = 196.42*(1-this.druharuka/100)*this.vlastnenieciernatechnika/(10*this.clenovia);
                this.emisie_spotreba[3] = 257.785*(1-this.druharuka/100)*this.vlastnenietechnika/(5);
                this.emisie_spotreba[4] = this.nabytok(); 
                this.chartData.datasets[0].data = this.emisie_spotreba;
                this.uhlikova_stopa_spotreba = Math.round(this.emisie_spotreba[0]+this.emisie_spotreba[1]+this.emisie_spotreba[2]+this.emisie_spotreba[3] + +this.emisie_spotreba[4]);
                this.updateChart();
            }
            if(this.details_spotreba==true) {
                this.emisie_spotreba[0] = 7764*this.vlastnenieaut*this.carage()/(this.vekaut*this.clenovia);
                this.emisie_spotreba[1] = 270.925*(1-this.druharuka/100)*this.vlastneniebielatechnika/(this.vekbielatechnika*this.clenovia);
                this.emisie_spotreba[2] = 196.42*(1-this.druharuka/100)*this.vlastnenieciernatechnika/(this.vekciernatechnika*this.clenovia);
                this.emisie_spotreba[3] = 257.785*(1-this.druharuka/100)*this.vlastnenietechnika/(this.vektechnika);
                this.emisie_spotreba[4] = this.nabytok(); 
                this.chartData.datasets[0].data = this.emisie_spotreba;
                this.uhlikova_stopa_spotreba = Math.round(this.emisie_spotreba[0]+this.emisie_spotreba[1]+this.emisie_spotreba[2]+this.emisie_spotreba[3]+ +this.emisie_spotreba[4]);
                this.updateChart();
            }
            console.log(this.emisie_spotreba[0])
        },
        carage() {
            if(this.nakupauta==1){return 1}
            if(this.nakupauta==2){return 0.68}
            if(this.nakupauta==3){return 0.38}
            if(this.nakupauta==4){return 0.16}
        },
        updateChart() {
         this.$refs.spotreba_chart.update();
        },
        nabytok() {
            return Math.round(((39.5 + 31 + 27)*this.clenovia + 84 + (this.rozloha/50)*(42 + 26) + 90 + 25)/15*this.clenovia)
        }
        
    },
    
    computed: {
        emisie_spotreba: {
            get() {
                return this.$store.state.emisie_spotreba
            },
            set(value) {
                this.$store.commit('setemisie_spotreba',value)
            }
        },
        clenovia: {
            get() {
                return this.$store.state.clenovia
            },
        },
        uhlikova_stopa_spotreba: {
            get() {
                return this.$store.state.uhlikova_stopa_spotreba
            },
            set(value) {
                this.$store.commit('setuhlikova_stopa_spotreba',value)
            }
        },
        rozloha: {
            get() {
                return this.$store.state.rozloha
            },
        },
        pocetaut: {
            get() {
                return this.$store.state.pocetaut
            },
        },

        details_spotreba: {
            get() {
                return this.$store.state.details_spotreba
            },
            set(value) {
                this.$store.commit('setdetails_spotreba',value)
            }
        },
        vlastnenieaut: {
            get() {
                return this.$store.state.vlastnenieaut
            },
            set(value) {
                this.$store.commit('setvlastnenieaut',value)
            }
        },
        vekaut: {
            get() {
                return this.$store.state.vekaut
            },
            set(value) {
                this.$store.commit('setvekaut',value)
            }
        },

        vlastneniebielatechnika: {
            get() {
                return this.$store.state.vlastneniebielatechnika
            },
            set(value) {
                this.$store.commit('setvlastneniebielatechnika',value)
            }
        },
        vekbielatechnika: {
            get() {
                return this.$store.state.vekbielatechnika
            },
            set(value) {
                this.$store.commit('setvekbielatechnika',value)
            }
        },

        vlastnenieciernatechnika: {
            get() {
                return this.$store.state.vlastnenieciernatechnika
            },
            set(value) {
                this.$store.commit('setvlastnenieciernatechnika',value)
            }
        },
        vekciernatechnika: {
            get() {
                return this.$store.state.vekciernatechnika
            },
            set(value) {
                this.$store.commit('setvekciernatechnika',value)
            }
        },

        vlastnenietechnika: {
            get() {
                return this.$store.state.vlastnenietechnika
            },
            set(value) {
                this.$store.commit('setvlastnenietechnika',value)
            }
        },
        vektechnika: {
            get() {
                return this.$store.state.vektechnika
            },
            set(value) {
                this.$store.commit('setvektechnika',value)
            }
        },

        druharuka: {
            get() {
                return this.$store.state.druharuka
            },
            set(value) {
                this.$store.commit('setdruharuka',value)
            }
        },

        nakupauta: {
            get() {
                return this.$store.state.nakupauta
            },
            set(value) {
                this.$store.commit('setnakupauta',value)
            }
        },

    },
    watch: {
        clenovia() {
            this.countEmissions()
        },
        rozloha() {
            this.countEmissions()
        },
        pocetaut() {
            this.countEmissions()
        }
    }

}


</script>

<style scoped>

.graf {
    height: auto;
    position: relative;
    margin-right:10%;
    margin-left: 10%;
    margin-top:10%;
}

.celkova_hodnota {
    z-index: 1;
    text-align: center;
    margin-top: 5%;
}

.item{
    min-height: 100vh;
    background-color: #F2F2F2;
    overflow: auto;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}




.category {
    font-weight: bold;
    text-align: left;
    padding: 5vh;
    margin-left: auto;

}


.wrapper-right{
    position: relative;
    width: 100%;
    padding: 5%;
}

.otazka {
    margin-bottom: 5%;
}


.zacat {
    position: relative;
  text-align: center;
  top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  vertical-align: center;

  width: 10rem;
   height: 3rem;  
   background: #FF6600;
    border-radius: 20px; 
    border: 0px solid #000000;
    color: white;

   
}


</style>
