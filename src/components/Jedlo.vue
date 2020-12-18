<template>


    <b-container fluid >
                
       <div class="item">
            <div class="jedlo">
                
                
                
                
                
                
                <div class="wrapper">    
                    <b-row md="4" style="height: 15vh" align-h="start" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="1" class="text-left">   
                        <b-col offset-md="0.5" cols="4" align-h="start"><h1>Jedlo</h1></b-col>
                    </b-row>  

                    <div class="otazka">    
                        <b-row  style="margin-bottom:2.5vh" align-v="center">      
                            <b-col cols="1" class="text-right">14.</b-col>
                            <b-col cols="10" md="5" class="text-left" align-h="start">Si vegánom?</b-col>
                            <b-col cols="10" md="5" offset="1" offset-md="0" class="text-left" align-h="start">                        
                                <b-form-radio-group
                                class="pt-2"
                                v-model="vegan"
                                :options="['Áno', 'Nie']"
                                ></b-form-radio-group>
                            </b-col>
                        </b-row> 
                    </div>


                    <div >
                        <b-row  style="margin-bottom:2.5vh" align-v="center">      
                            <b-col cols="1" class="text-right">15.</b-col>
                            <b-col cols="10" class="text-left" align-h="start">Ako často priemerne konzumuješ:</b-col>
                        </b-row> 

                        <div>
                            <b-row v-if="vegan=='Nie'"  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Hovädzie mäso:</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="hovadzie" v-on:change="countEmissions()" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row v-if="vegan=='Nie'"  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1"  md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Ostatné mäso (kuracie, bravčové...):</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="ostatne" v-on:change="countEmissions()" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row v-if="vegan=='Nie'"  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Mliečne výrobky:</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="mliecne" v-on:change="countEmissions()" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row v-if="vegan=='Nie'"  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Syry:</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="syry" v-on:change="countEmissions()" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row v-if="vegan=='Nie'"  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Zelenina:</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="zelenina" v-on:change="countEmissions()" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Alkohol (pivo, víno, tvrdé):</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="alkohol" v-on:change="countEmissions()" :options="pitiefrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>
                    </div>

                </div>  


                
                


            </div> 
        </div>         
        
    </b-container>

</template>


<script>


export default {
    name: 'Jedlo',
    components: {},
    data() {
      return {


        jedlofrekvencia: [
          { value: 0, text: 'V každom jedle' },
          { value: 1, text: 'Každý deň' },
          { value: 2, text: 'Niekoľkokrát do týždňa' },
          { value: 3, text: 'Raz za týždeň' },
          { value: 4, text: 'Zriedkavo' },
          { value: 5, text: 'Vôbec' }
        ],

        pitiefrekvencia: [
          { value: 0, text: 'Každý deň' },
          { value: 1, text: 'Niekoľkokrát do týždňa' },
          { value: 2, text: 'Raz za týždeň' },
          { value: 3, text: 'Príležitostne' },
          { value: 4, text: 'Vôbec' }
        ],

        
        hovadzie_emisie:[2211.3,1474.2,842.4,210.6,52.65,0],
        ostatne_emisie:[674.60625,449.7375,256.9928571,64.24821429,16.06205357,0],
        mliecne_emisie:[780.525,520.35,297.3428571,74.33571429,17.10739726,0],
        syry_emisie:[418.95,279.3,159.6,45.6,11.4,0],
        zelenina_emisie:[137.2,91.46666667,52.26666667,13.06666667,3.266666667,0],
        alkohol_emisie:[225.65375,128.945,32.23625,8.0590625,0],

        

        

        
      }
    },

    
    
    watch: {
        vegan() {
            this.countEmissions();
        },
    },

    methods: {
        countEmissions() {
            if(this.vegan=='Nie'){
                this.emisie_jedlo = [Math.round(this.hovadzie_emisie[this.hovadzie]),Math.round(this.ostatne_emisie[this.ostatne]),Math.round(this.mliecne_emisie[this.mliecne]),
                    Math.round(this.syry_emisie[this.syry]),Math.round(this.zelenina_emisie[this.zelenina]),Math.round(this.alkohol_emisie[this.alkohol]),608
                ];
            }
            if(this.vegan=='Áno'){
                this.emisie_jedlo = [0,0,0,0,598,Math.round(this.alkohol_emisie[this.alkohol]), 608
                ];
            }
            this.uhlikova_stopa_jedlo = Math.round(this.emisie_jedlo[0]+this.emisie_jedlo[1]+this.emisie_jedlo[2]+this.emisie_jedlo[3]+this.emisie_jedlo[4]+this.emisie_jedlo[5]+this.emisie_jedlo[6]);
            
            
            if(this.uhlikova_stopa_jedlo<1214){this.emisie_jedlo[4]=this.emisie_jedlo[4]+(1214-this.uhlikova_stopa_jedlo)
            this.uhlikova_stopa_jedlo=1214}
        },
        
        
    },



    computed: {
        
        emisie_jedlo: {
            get() {
                return this.$store.state.emisie_jedlo
            },
            set(value) {
                this.$store.commit('setemisie_jedlo',value)
                
            }
        },
        uhlikova_stopa_jedlo: {
            get() {
                return this.$store.state.uhlikova_stopa_jedlo
            },
            set(value) {
                this.$store.commit('setuhlikova_stopa_jedlo',value)
                
            }
        },
        vegan: {
            get() {
                return this.$store.state.vegan
            },
            set(value) {
                this.$store.commit('setvegan',value)
                
            }
        },
        hovadzie: {
            get() {
                return this.$store.state.hovadzie
            },
            set(value) {
                this.$store.commit('sethovadzie',value)
                
            }
        },
        ostatne: {
            get() {
                return this.$store.state.ostatne
            },
            set(value) {
                this.$store.commit('setostatne',value)
                
            }
        },
        mliecne: {
            get() {
                return this.$store.state.mliecne
            },
            set(value) {
                this.$store.commit('setmliecne',value)
                
            }
        },
        syry: {
            get() {
                return this.$store.state.syry
            },
            set(value) {
                this.$store.commit('setsyry',value)
                
            }
        },
        zelenina: {
            get() {
                return this.$store.state.zelenina
            },
            set(value) {
                this.$store.commit('setzelenina',value)
                
            }
        },
        alkohol: {
            get() {
                return this.$store.state.alkohol
            },
            set(value) {
                this.$store.commit('setalkohol',value)
                
            }
        },

    
    }
    


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

.celkova_hodnota {
    z-index: 1;
    text-align: center;
}


.item{
    min-height: 50vh;
    background-color: white;
    overflow: auto;
    width: 100%;
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

.wrapper{
    width: 100%;
    padding: 5%;
    
}
.wrapper-right{
    position: relative;
    width: 70%;
    padding: 5%;
    left: 30%;
}

.otazka {
    margin-bottom: 5%;
}






</style>
