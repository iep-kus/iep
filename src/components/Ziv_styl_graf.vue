<template>


    <b-container fluid >
        
        <div class="item">
                
            <div class="ziv_styl">
                <div class="wrapper-right">    
                    <b-row style="height: 15vh" align-h="start" align-v="center" class="text-left">   
                        <b-col offset-md="0.5" cols="12" align-h="start"><h1>Životný štýl</h1></b-col>
                        
                    </b-row>   
                    
                    
                
    

                    <b-row>
                        
         
                        <b-col cols="12" lg="8">

                            <div class="otazka">
                                <b-row  style="margin-bottom:2.5vh" align-v="start">      
                                    <b-col lg="1" cols="1" class="text-right">22.</b-col>
                                    <b-col lg="5" cols="10" class="text-left" align-h="start">Ako často priemerne nakupuješ oblečenie?</b-col>
                                    <b-col lg="5" cols="10" offset-lg="0" offset="1" class="text-left" align-h="start">
                                        <b-form-select v-model="nakupoblecenie" v-on:change="countEmissions_ziv()" :options="oblecenie"></b-form-select>
                                    </b-col>
                                </b-row>
                                <div v-if="details_ziv_styl==true">
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col lg="2" cols="1" class="text-right"></b-col>
                                        <b-col lg="4" cols="10" class="text-left">Koľko percent z toho nakupuješ z druhej ruky?:</b-col>
                                        <b-col lg="4" cols="8" offset-lg="0" offset="1" class="text-right" >
                                        <b-form-input type="range" v-on:change="countEmissions_ziv()" id="druharukaoblecenie" v-model="druharukaoblecenie" min="0" max="100"></b-form-input>
                                        </b-col> 
                                        <b-col v-if="details_ziv_styl==true" lg="1" cols="2" class="text-right">{{druharukaoblecenie}}%</b-col>
                            
                                    </b-row>
                                </div>
                            </div>

                            





                            <div class="otazka">
                                <b-row  style="margin-bottom:2.5vh" align-v="start">      
                                    <b-col md="1" cols="1" class="text-right">23.</b-col>
                                    <b-col md="10" cols="10" class="text-left" align-h="start">Koľko nocí ročne stráviš v: <b-icon-question-circle-fill font-scale="1.2" id="question23"></b-icon-question-circle-fill></b-col>
                                        <b-tooltip target="question23" title="Prosím nezapočítavaj služobné cesty"  variant="dark"></b-tooltip>
                                </b-row> 

                                <div>
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col md="2" cols="1" class="text-right"></b-col>
                                        <b-col md="4" cols="10" class="text-left">Stan (voľne v prírode)</b-col>
                                        <b-col md="5" cols="10" offset-md="0" offset="1" class="text-right" > 
                                            <b-form-spinbutton id="stan" v-on:change="countEmissions_ziv()" v-model="stan" min="0" max="365"></b-form-spinbutton>
                                        </b-col>
                            
                                    </b-row>
                                </div>

                                <div>
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col md="2" cols="1" class="text-right"></b-col>
                                        <b-col md="4" cols="10" class="text-left">Kemp, Hostel, Airbnb</b-col>
                                        <b-col md="5" cols="10" offset-md="0" offset="1" class="text-right" > 
                                            <b-form-spinbutton id="kemp" v-on:change="countEmissions_ziv()" v-model="kemp" min="0" max="365"></b-form-spinbutton>
                                        </b-col>
                            
                                    </b-row>
                                </div>

                                <div>
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col md="2" cols="1" class="text-right"></b-col>
                                        <b-col md="4" cols="10" class="text-left">Štandardný hotel (3*-4*)</b-col>
                                        <b-col md="5" cols="10" offset-md="0" offset="1" class="text-right" > 
                                            <b-form-spinbutton id="hotel" v-on:change="countEmissions_ziv()" v-model="hotel" min="0" max="365"></b-form-spinbutton>
                                        </b-col>
                            
                                    </b-row>
                                </div>

                                <div>
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col md="2" cols="1" class="text-right"></b-col>
                                        <b-col md="4" cols="10" class="text-left">Luxusný hotel (5*+)</b-col>
                                        <b-col md="5" cols="10" offset-md="0" offset="1" class="text-right" > 
                                            <b-form-spinbutton id="luxus" v-on:change="countEmissions_ziv()" v-model="luxus" min="0" max="365"></b-form-spinbutton>
                                        </b-col>
                            
                                    </b-row>
                                </div>

                            </div>



                            
                            
                            
                            
                            <div class="otazka">
                                <b-row  style="margin-bottom:2.5vh" align-v="start">      
                                    <b-col md="1" cols="1" class="text-right">24.</b-col>
                                    <b-col v-if="details_ziv_styl==false" md="10" cols="10" class="text-left" align-h="start">Ktoré z nasledujúcich odpadov triediš?</b-col>
                                    <b-col v-if="details_ziv_styl==true" md="10" cols="10" class="text-left" align-h="start">Na koľko percent triediš nasledujúce odpady?</b-col>
                                </b-row> 

                                <div>
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col md="2" cols="1" class="text-right"></b-col>
                                        <b-col md="4" cols="10" class="text-left">Plasty</b-col>
                                        <b-col v-if="details_ziv_styl==false" md="5" cols="10" offset-md="0" offset="1" class="text-left" > 
                                            <b-form-radio-group class="pt-2" v-model="plasty"  :options="['Áno', 'Nie']"></b-form-radio-group>
                                        </b-col>
                                        <b-col v-if="details_ziv_styl==true" lg="4" cols="8" offset="1" offset-lg="0" class="text-left" align-h="start">
                                            <b-form-input type="range" id="plastyrange"  v-model="plastyrange" min="0" max="100"></b-form-input>
                                        </b-col>
                                        <b-col v-if="details_ziv_styl==true" lg="1" cols="2" class="text-right">{{plastyrange}}%</b-col>
                            
                                    </b-row>
                                </div>

                                <div>
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col md="2" cols="1" class="text-right"></b-col>
                                        <b-col md="4" cols="10" class="text-left">Sklo</b-col>
                                        <b-col v-if="details_ziv_styl==false" md="5" cols="10" offset-md="0" offset="1" class="text-left" > 
                                            <b-form-radio-group class="pt-2" v-model="sklo" :options="['Áno', 'Nie']"></b-form-radio-group>
                                        </b-col>
                                        <b-col v-if="details_ziv_styl==true" lg="4" cols="8" offset="1" offset-lg="0" class="text-left" align-h="start">
                                            <b-form-input type="range" id="sklorange" v-model="sklorange" min="0" max="100"></b-form-input>
                                        </b-col>
                                        <b-col v-if="details_ziv_styl==true" lg="1" cols="2" class="text-right">{{sklorange}}%</b-col>
                            
                                    </b-row>
                                </div>

                                <div>
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col md="2" cols="1" class="text-right"></b-col>
                                        <b-col md="4" cols="10" class="text-left">Papier</b-col>
                                        <b-col v-if="details_ziv_styl==false" md="5" cols="10" offset-md="0" offset="1" class="text-left" > 
                                            <b-form-radio-group class="pt-2"  v-model="papier" :options="['Áno', 'Nie']"></b-form-radio-group>
                                        </b-col>
                                        <b-col v-if="details_ziv_styl==true" lg="4" cols="8" offset="1" offset-lg="0" class="text-left" align-h="start">
                                            <b-form-input type="range" id="papierrange"  v-model="papierrange" min="0" max="100"></b-form-input>
                                        </b-col>
                                        <b-col v-if="details_ziv_styl==true" lg="1" cols="2" class="text-right">{{papierrange}}%</b-col>
                            
                                    </b-row>
                                </div>

                                <div>
                                    <b-row  style="margin-bottom:2vh" align-v="start">    
                                        <b-col md="2" cols="1" class="text-right"></b-col>
                                        <b-col md="4" cols="10" class="text-left">BIO-odpad</b-col>
                                        <b-col v-if="details_ziv_styl==false" md="5" cols="10" offset-md="0" offset="1" class="text-left" > 
                                            <b-form-radio-group class="pt-2"  v-model="bioodpad" :options="['Áno', 'Nie']"></b-form-radio-group>
                                        </b-col>
                                        <b-col v-if="details_ziv_styl==true" lg="4" cols="8" offset="1" offset-lg="0" class="text-left" align-h="start">
                                            <b-form-input type="range" id="bioodpadrange"  v-model="bioodpadrange" min="0" max="100"></b-form-input>
                                        </b-col>
                                        <b-col v-if="details_ziv_styl==true" lg="1" cols="2" class="text-right">{{bioodpadrange}}%</b-col>
                            
                                    </b-row>
                                </div>

                            
                            </div>
                            <b-row align-h="center">
                                <b-col align-v="center">
                                    <div >
                                        <b-button class="zacat"  :pressed.sync="details_ziv_styl">
                                            <div v-if="details_ziv_styl==false">podrobnejšie</div>
                                            <div v-if="details_ziv_styl==true">menej podrobne</div>
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col> 

                        <b-col cols="12" lg="4">

                            <div class="graf">
                                <DoughnutExample
                                        ref="ziv_styl_chart"
                                        :chart-data="chartData"
                                        :options="options"
                                        
                                    > 
                                </DoughnutExample>
                                <div class="celkova_hodnota"><h2>Uhlíková stopa tvojho životného štýlu je <strong>{{uhlikova_stopa_ziv_styl}}</strong>  kg CO2e</h2></div>
                            </div>
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
    name: 'Ziv_styl_graf',
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
        cutoutPercentage: 55
        },

        chartData :{
        
            labels: ["Oblečenie","Dovolenkovanie","Odpady"],
            datasets: [
            {
                backgroundColor: ['#FF6600','#6F6F6F','#FFDAC5'],
                data: [201.99,197.5,115.53],
            }
            ],
        },


        oblecenie: [
          { value: 0, text: 'Niekoľkokrát do týždňa' },
          { value: 1, text: 'Niekoľkokrát mesačne' },
          { value: 2, text: 'Raz mesačne' },
          { value: 3, text: 'Niekoľkokrát ročne' },
          { value: 4, text: 'Raz ročne' },
          { value: 5, text: 'Raz za 3 roky' },
          { value: 6, text: 'Vôbec' }
        ],

        oblecenie_emisie : [605.9766072,353.4863542, 201.9922024, 134.6614683, 100.9961012, 33.66536707, 16.83268353],
        ef_dovolenky : [10,19.75,54],
        ef_odpady : [0.9, -1.024, -0.314, -0.495, 0.06],

      }
    },

    mounted() {
        this.countEmissions_ziv();
    },

    methods: {
        countEmissions_ziv() {
            this.emisie_ziv_styl[0] = Math.round((1-this.druharukaoblecenie/100)*this.oblecenie_emisie[this.nakupoblecenie]);
            this.emisie_ziv_styl[1] = Math.round(this.ef_dovolenky[0]*this.kemp + this.ef_dovolenky[1]*this.hotel + this.ef_dovolenky[2]*this.luxus);
            this.emisie_ziv_styl[2] = Math.round(this.odpady());
            this.chartData.datasets[0].data = this.emisie_ziv_styl;
            this.uhlikova_stopa_ziv_styl = Math.round(this.emisie_ziv_styl[0]+this.emisie_ziv_styl[1]+this.emisie_ziv_styl[2]);
            this.updateChart();     
        },
        odpady() {
            let plast=0;
            let sklo=0;
            let papier=0;
            let bio=0;
            let zko=0;
            let priemer=0;
            

            
            priemer = (Number(this.plastyrange)+Number(this.sklorange)+Number(this.papierrange)+Number(this.bioodpadrange))/400;
            zko = -202.72*Math.pow(priemer,2) + 22.72*priemer + 188.6;
            plast = -15.88*Math.pow((Number(this.plastyrange)/100),2) + 24.58*Number(this.plastyrange)/100 +2.7;
            sklo = -21.12*Math.pow(((Number(this.sklorange))/100),2) + 31.72*Number(this.sklorange)/100 +2.5;
            papier = -10.4*Math.pow(((Number(this.papierrange))/100),2) + 16.2*(Number(this.papierrange))/100 +1;
            bio = -22.6*Math.pow(((Number(this.bioodpadrange))/100),2) + 49.7*(Number(this.bioodpadrange))/100 +0.2;
    
            return this.ef_odpady[0]*zko + this.ef_odpady[1]*plast + this.ef_odpady[2]*sklo + this.ef_odpady[3]*papier + this.ef_odpady[4]* bio
              
            
        },
        updateChart() {
         this.$refs.ziv_styl_chart.update();
        },
        
    },
    
    computed: {
        
        emisie_ziv_styl: {
            get() {
                return this.$store.state.emisie_ziv_styl
            },
            set(value) {
                this.$store.commit('setemisie_ziv_styl',value)
                
            }
        },
        uhlikova_stopa_ziv_styl: {
            get() {
                return this.$store.state.uhlikova_stopa_ziv_styl
            },
            set(value) {
                this.$store.commit('setuhlikova_stopa_ziv_styl',value)
                
            }
        },
        druharukaoblecenie: {
            get() {
                return this.$store.state.druharukaoblecenie
            },
            set(value) {
                this.$store.commit('setdruharukaoblecenie',value)    
            }
        },
        nakupoblecenie: {
            get() {
                return this.$store.state.nakupoblecenie
            },
            set(value) {
                this.$store.commit('setnakupoblecenie',value)    
            }
        },
        details_ziv_styl: {
            get() {
                return this.$store.state.details_ziv_styl
            },
            set(value) {
                this.$store.commit('setdetails_ziv_styl',value)    
            }
        },

        stan: {
            get() {
                return this.$store.state.stan
            },
            set(value) {
                this.$store.commit('setstan',value)    
            }
        },
        kemp: {
            get() {
                return this.$store.state.kemp
            },
            set(value) {
                this.$store.commit('setkemp',value)    
            }
        },
        hotel: {
            get() {
                return this.$store.state.hotel
            },
            set(value) {
                this.$store.commit('sethotel',value)    
            }
        },
        luxus: {
            get() {
                return this.$store.state.luxus
            },
            set(value) {
                this.$store.commit('setluxus',value)    
            }
        },
        
        plasty: {
            get() {
                return this.$store.state.plasty
            },
            set(value) {
                this.$store.commit('setplasty',value)    
            }
        },
        papier: {
            get() {
                return this.$store.state.papier
            },
            set(value) {
                this.$store.commit('setpapier',value)    
            }
        },
        sklo: {
            get() {
                return this.$store.state.sklo
            },
            set(value) {
                this.$store.commit('setsklo',value)    
            }
        },
        bioodpad: {
            get() {
                return this.$store.state.bioodpad
            },
            set(value) {
                this.$store.commit('setbioodpad',value)    
            }
        },

        plastyrange: {
            get() {
                return this.$store.state.plastyrange
            },
            set(value) {
                this.$store.commit('setplastyrange',value)    
            }
        },
        papierrange: {
            get() {
                return this.$store.state.papierrange
            },
            set(value) {
                this.$store.commit('setpapierrange',value)    
            }
        },
        sklorange: {
            get() {
                return this.$store.state.sklorange
            },
            set(value) {
                this.$store.commit('setsklorange',value)    
            }
        },
        bioodpadrange: {
            get() {
                return this.$store.state.bioodpadrange
            },
            set(value) {
                this.$store.commit('setbioodpadrange',value)    
            }
        },

    
    },

    watch: {
        plastyrange() {
            this.countEmissions_ziv();           
        },
        papierrange() {
            this.countEmissions_ziv();           
        },
        sklorange() {
            this.countEmissions_ziv();           
        },
        bioodpadrange() {
            this.countEmissions_ziv();           
        },
    },


}


</script>

<style lang="scss" scoped>

.graf {
    height: auto;
    position: relative;
    margin-right:10%;
    margin-left: 10%;
    margin-top:10%;
}





.item{
    
    background-color: white;
    overflow: auto;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.celkova_hodnota {
    z-index: 1;
    text-align: center;
    margin-top: 5%;
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
    top: 5vh;
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
    padding: .75rem;
    width: 12rem;
    height:auto;  
    background: #FF6600;
    border-radius: 10px; 
    border: 0px solid #000000;
    color: white;
    transition: all .3s ease-in-out;

    
    span {
      font-family: "Roboto", sans-serif;    
      align-self: center;
      transform: translateX(0px);
      transition: all .1s ease-in-out;
      opacity: 1;
     }

    &:hover {
        background-color: rgba(172, 69, 0, 1); /* Green */
        color: white;
        transform: scale(1.1);
        
        span {
            font-family: "Roboto", sans-serif;    
            transform: translateX(-20px);
            transition: all .1s ease-in-out;
            opacity: 1;
        }
    }
   
}


</style>
