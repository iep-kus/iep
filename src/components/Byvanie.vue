<template>


    <b-container fluid >
                
                
        <div class="item">   
            <div class="byvanie">
                <div class="wrapper">    
                    <b-row md="4" style="height: 20vh" align-h="start" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="1" class="text-left">   
                        <b-col offset-md="0.5" cols="4" align-h="start"><h1>Bývanie</h1></b-col>
                            
                    </b-row>    


                    <div class="otazka">
                        <div> 
                            <b-row style="margin-bottom: 2vh"  align-v="center">      
                                <b-col cols="1" class="text-right">6.</b-col>
                                <b-col cols="11" class="text-left" align-h="start">Aký zdroj energie alebo palivo primárne používate v domácnosti na vykurovanie a ohrev vody?</b-col>
                            </b-row> 
                        </div> 
                        <div>   
                            <b-row  style="margin-bottom: 2vh" align-v="center">    
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" class="text-left" > 
                                    <b-form-radio-group
                                            id="kurenie"
                                            v-model="vykurovanievybrate"
                                            :options="vykurovanie"
                                            name="vykurovanie"
                                            v-on:change="fillData()"
                                            
                                    ></b-form-radio-group>
                                    </b-col>
                    
                            </b-row>

                        </div> 
                        
                        <div v-if="details_byvanie==true">
                            <b-row  style="margin-bottom: 2vh" align-v="stretch">      
                                    <b-col md="1" cols="1" class="text-right"></b-col>
                                    <b-col cols="11" class="text-left h-100" align-h="start">Uveď konkrétnu ročnú spotrebu jednotlivých zdrojov energií alebo paliva (vykurovanie, varenie, spotrebiče...)</b-col>
                            </b-row>    
                                
                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center" v-if="vykurovanievybrate=='1'" >    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">Centrálne vykurovanie:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                        <b-form-input v-on:change="fillData()" v-model="centralne" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected1" :options="['kWh', '€']"></b-form-select></b-col>
                            
                                </b-row>
                            </div>

                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center">    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">Elektrina:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                        <b-form-input v-model="elektrika" v-on:change="fillData()" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected2" :options="['kWh', '€']"></b-form-select></b-col>
                        
                                </b-row>
                            </div>

                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center">    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">Zemný plyn:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" >
                                        <b-form-input v-model="plyn" v-on:change="fillData()" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col  md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected3" :options="['kWh', '€']"></b-form-select></b-col>
                        
                                </b-row>
                            </div>

                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center">    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">LPG:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                        <b-form-input v-model="lpg" v-on:change="fillData()" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col  md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected4" :options="['litrov', '€']"></b-form-select></b-col>
                        
                                </b-row>
                            </div>

                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center">    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">Tuhé palivo:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                        <b-form-input v-model="tuhe" v-on:change="fillData()" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected5" :options="['prm', 'm3' , 't']"></b-form-select></b-col>
                        
                                </b-row>
                            </div>
                        </div>
                    </div>



                    <div class="otazka">
                        <b-row  style="margin-bottom: 2vh" align-v="center">      
                            <b-col md="1" cols="1" class="text-right">7.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Vyrábate si elektrickú energiu z obnoviteľných zdrojov? <b-icon-question-circle-fill font-scale="1.2" id="question7"></b-icon-question-circle-fill></b-col>
                                <b-tooltip target="question7" title="Napríklad vyrábate energiu pomocou solárnych panelov"  variant="dark"></b-tooltip>
                            <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" >                         
                                <b-form-radio-group
                                class="pt-2"
                                v-model="obnovitelnezdroje"
                                :options="['Áno', 'Nie']"
                                ></b-form-radio-group>
                            </b-col>
                             
                        </b-row>    
                        
                        <div v-if="obnovitelnezdroje=='Áno' && details_byvanie==true">
                            <b-row  style="margin-bottom: 2vh" align-v="center">      
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="11" class="text-left">Vlastná spotreba:</b-col>
                                <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-input v-model="vlastna" placeholder="Vložte spotrebu"></b-form-input>
                                </b-col>
                                <b-col  md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="vlastnakwhe" :options="['kWh', '€']"></b-form-select></b-col>
                                
                                
                            </b-row>   
                            <b-row  style="margin-bottom: 2vh" align-v="center"> 
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="11" class="text-left">Dodávam do siete:</b-col>
                                <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-input v-model="dodavam"  placeholder="Vložte spotrebu"></b-form-input>
                                </b-col>
                                <b-col  md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="dodavamkwhe" :options="['kWh', '€']"></b-form-select></b-col>
                            </b-row>
           
                        </div>

                    </div>

                    <b-row align-h="center">
                        <b-col align-v="center">
                            <div >
                                <b-button class="zacat" :pressed.sync="details_byvanie">podrobnejšie</b-button>
                            </div>
                        </b-col>
                    </b-row>

                   
                </div>
                  
            </div>
        </div>
    </b-container>

</template>

<script>
 

export default {
    name: 'Byvanie',
    components: {},
    props: {
    },

    

    
    data() {
      return {
                                                                                                                                                                                                                                                                                
        
       
        
        vykurovanie: [
         
          { value: 1, text: 'Centrálne vykurovanie' },
          { value: 2, text: 'Elektrina' },          
          { value: 3, text: 'Zemný plyn' },
          { value: 4, text: 'LPG' },
          { value: 5, text: 'Tuhé palivo' }
        ],

        
        EF_centralne: [0.254524819,0.253483,0.434007,0.519568,0.050929,	0.004886,0.464345,0.095771,	0.096154,0.067771,0.558332,0.434007 ],
    

        

            
        

    
      }
    },
    mounted() {
            this.fillData();
    },

    methods: {
       
        fillData() {
            
            this.emisie_jedlo = [Math.round(this.emisie_centralne()*this.centralne/this.clenovia),Math.round(this.emisie_elektrika()*this.elektrika/this.clenovia),
                Math.round(this.emisie_plyn()*this.plyn/this.clenovia),Math.round(this.emisie_lpg()*this.lpg/this.clenovia),Math.round(this.emisie_tuhe()*this.tuhe/this.clenovia)];
            this.uhlikova_stopa_byvanie = Math.round(this.emisie_jedlo[0]+this.emisie_jedlo[1]+this.emisie_jedlo[2]+this.emisie_jedlo[3]+this.emisie_jedlo[4]);
            
            
            
        },
        
        emisie_centralne() {
            let ef = this.EF_centralne[0];
            if (this.okres==5){ef = this.EF_centralne[1]}
            if (this.okres==18 || this.okres==19 ){ef = this.EF_centralne[2]}
            if (this.okres==71){ef = this.EF_centralne[3]}
            
            if (this.okres==62){ef = this.EF_centralne[5]}
            if (this.okres==27){ef = this.EF_centralne[6]}
            if (this.okres==41){ef = this.EF_centralne[7]}
            if (this.okres==2){ef = this.EF_centralne[8]}
            if (this.okres==32){ef = this.EF_centralne[9]}
            if (this.okres==68){ef = this.EF_centralne[9]}
            if (this.selected1=='kWh') {
                return ef;
            }
            else {
                return ef/0.092307;
            }
        },
            
        emisie_elektrika() {
            
            if (this.selected2=='kWh') {
                return 0.169;
            }
            else {
                return 0.169/0.1577;
            }
        },
            
        emisie_plyn() {
            
            if (this.selected3=='kWh') {
                return 0.2003;
            }
            else {
                return 0.2003/0.0533;
            }
        },
            
        emisie_lpg() {
            
            if (this.selected4=='litrov') {
                return 1.655;
            }
            else {
                return 1.655/0.59;
            }
        },
            
         emisie_tuhe() {      
            if (this.selected5=='prm') {
                return 1212.96;
            }
            if (this.selected5=='m3') {
                return 910;
            }
            if (this.selected5=='t') {
                return 910/0.865;
            }
          
             
        },

        

   
    },

    watch: {
        okres() {
            this.fillData();
        },
        clenovia() {
            this.fillData();
        },
        centralne() {
            this.fillData();
        },
        elektrika() {
            this.fillData();
        },
        plyn() {
            this.fillData();
        },
        lpg() {
            this.fillData();
        },
        tuhe() {
            this.fillData();
        },
    },
    
    
    computed: {
        
        emisie_byvanie: {
            get() {
                return this.$store.state.emisie_byvanie
            },
            set(value) {
                this.$store.commit('setemisie_byvanie',value)
                
            }
        },
        uhlikova_stopa_byvanie: {
            get() {
                return this.$store.state.uhlikova_stopa_byvanie
            },
            set(value) {
                this.$store.commit('setuhlikova_stopa_byvanie',value)
                
            }
        },

        okres: {
            get() {
                return this.$store.state.okres
            },
            change_okres() {
                return this.$store.state.okres
            }
        },

        clenovia: {
            get() {
                return this.$store.state.clenovia
            },
        },
       
        
        vykurovanievybrate: {
            get() {
                return this.$store.state.vykurovanievybrate
            },
            set(value) {
                this.$store.commit('setvykurovanievybrate',value)
                this.$store.commit('prepocetzateplenie');
                this.$store.commit('prepocetenergie');
                
            }
        },
        
        centralne: {
            get() {
                return this.$store.state.centralne 
            },
            set(value) {
                this.$store.commit('setcentralne',value)
            }
        },

        elektrika: {
            get() {
                return this.$store.state.elektrika
            },
            set(value) {
                this.$store.commit('setelektrika',value)
            }
        },

        plyn: {
            get() {
                return this.$store.state.plyn
            },
            set(value) {
                this.$store.commit('setplyn',value)
            }
        },

        lpg: {
            get() {
                return this.$store.state.lpg
            },
            set(value) {
                this.$store.commit('setlpg',value)
            }
        },

        tuhe: {
            get() {
                return this.$store.state.tuhe
            },
            set(value) {
                this.$store.commit('settuhe',value)
            }
        },

        selected1: {
            get() {
                return this.$store.state.selected1
            },
            set(value) {
                this.$store.commit('setselected1',value)
                this.$store.commit('conversion',0)
                
            }
        },
        selected2: {
            get() {
                return this.$store.state.selected2
            },
            set(value) {
                this.$store.commit('setselected2',value)
                this.$store.commit('conversion',1)
            }
        },
        selected3: {
            get() {
                return this.$store.state.selected3
            },
            set(value) {
                this.$store.commit('setselected3',value)
                this.$store.commit('conversion',2)
            }
        },
        selected4: {
            get() {
                return this.$store.state.selected4
            },
            set(value) {
                this.$store.commit('setselected4',value)
                this.$store.commit('conversion',3)
            }
        },
        selected5: {
            get() {
                return this.$store.state.selected5
            },
            set(value) {
                this.$store.commit('setselected5',value)
                this.$store.commit('conversion',4)
            }
        },

        centralne_jednotky: {
            get() {
                return this.$store.state.centralne_jednotky
            },
        },
        
        obnovitelnezdroje: {
            get() {
                return this.$store.state.obnovitelnezdroje
            },
            set(value) {
                this.$store.commit('setobnovitelnezdroje',value)
            }
        },
        vlastna: {
            get() {
                return this.$store.state.vlastna
            },
            set(value) {
                this.$store.commit('setvlastna',value)
            }
        },
        dodavam: {
            get() {
                return this.$store.state.dodavam
            },
            set(value) {
                this.$store.commit('setdodavam',value)
            }
        },
        vlastnakwhe: {
            get() {
                return this.$store.state.vlastnakwhe
            },
            set(value) {
                this.$store.commit('setvlastnakwhe',value)
            }
        },
        dodavamkwhe: {
            get() {
                return this.$store.state.dodavamkwhe
            },
            set(value) {
                this.$store.commit('setdodavamkwhe',value)
            }
        },

        details_byvanie: {
            get() {
                return this.$store.state.details_byvanie
            },
            set(value) {
                this.$store.commit('setdetails_byvanie',value)
            }
        },

    
    }

}


</script>

<style scoped>



.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.graf_byvanie {
   
    height: auto;
    position: relative;
    margin-left: 10%;
    margin-right: 10%;
   
}


.celkova_hodnota {
    z-index: 1;
    text-align: center;
}

.item{
    
    background-color: white;
    overflow: auto;
    width: 100%;
}

.graf {
    width: 30%;
    height: auto;
    position: relative;
    left:35%;
}


.category {
    font-weight: bold;
    text-align: left;
    padding: 5vh;
    margin-left: auto;

}

.wrapper{
    width: 100%;
    padding: 5%;
}

.otazka {
    position: relative;
    margin-bottom: 5vh;
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
    margin-bottom: 10vh;

   
}




</style>
