<template>


    <b-container fluid >
                
                
        <div class="item">   
            <div class="byvanie">
                <div class="wrapper">    
                    <b-row md="4" style="height: 20vh" align-h="start" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="1" class="text-left">   
                        <b-col offset-md="0.5" cols="4" align-h="start"><h1>Bývanie</h1></b-col>
                            
                    </b-row>    

                    <b-row>
                        <b-col cols="12" lg="8">  
                            <div class="otazka">
                                <div> 
                                    <b-row style="margin-bottom: 2vh"  align-v="center">      
                                        <b-col cols="1" class="text-right">6.</b-col>
                                        <b-col cols="11" class="text-left" align-h="start">Aké zdroje energie alebo palivo primárne používa tvoja domácnosť na vykurovanie a ohrev vody?
                                            <b-icon-question-circle-fill font-scale="1.2" id="question6"></b-icon-question-circle-fill>
                                    <b-tooltip target="question6" title="V prípade ak využívaš rozdielne alebo viacero zdrojov energie na ohrev vody a vykurovanie, uveď konrétnu spotrebu po zakliknutí tlačidla podrobnejšie. V prípade ak používaš tepelné čerpadlo, zaklikni elektrinu a následne po zakliknutí tlačidla podrobnejšie uprav jej spotrebu podľa skutočnosti."  variant="dark"></b-tooltip>
                                        </b-col>
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
                                        <b-row  style="margin-bottom: 2vh" align-v="center" v-if="vykurovanievybrate==1" >    
                                            <b-col md="2" cols="1" class="text-right"></b-col>
                                            <b-col md="4" cols="11" class="text-left">Centrálne vykurovanie(tepláreň):</b-col>
                                            <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                                <b-form-input v-model="centralne" placeholder="Vložte spotrebu"></b-form-input>
                                            </b-col>
                                            <b-col md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected1" :options="['kWh', '€']"></b-form-select></b-col>
                                    
                                        </b-row>
                                    </div>

                                    <div>
                                        <b-row  style="margin-bottom: 2vh" align-v="center">    
                                            <b-col md="2" cols="1" class="text-right"></b-col>
                                            <b-col md="4" cols="11" class="text-left">Elektrina:</b-col>
                                            <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                                <b-form-input v-model="elektrika" placeholder="Vložte spotrebu"></b-form-input>
                                            </b-col>
                                            <b-col md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected2" :options="['kWh', '€']"></b-form-select></b-col>
                                
                                        </b-row>
                                        <b-row  style="margin-bottom: 2vh" align-v="center">    
                                            <b-col md="2" cols="1" class="text-right"></b-col>
                                            <b-col md="4" cols="11" class="text-left">Odoberáš elektrinu z OZE? <b-icon-question-circle-fill font-scale="1.2" id="question6oze"></b-icon-question-circle-fill></b-col>
                                            <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" >                         
                                                <b-form-radio-group
                                                class="pt-2"
                                                v-model="Oze"
                                                :options="['Áno', 'Nie']"
                                                ></b-form-radio-group>
                                            </b-col>
                                             <b-tooltip target="question6oze" title="Dodávateľ elektriny garantuje pôvod elektriny zo 100 % obnoviteľných zdrojov."  variant="dark"></b-tooltip>
                                        </b-row>

                                    </div>

                                    <div>
                                        <b-row  style="margin-bottom: 2vh" align-v="center">    
                                            <b-col md="2" cols="1" class="text-right"></b-col>
                                            <b-col md="4" cols="11" class="text-left">Zemný plyn:</b-col>
                                            <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" >
                                                <b-form-input v-model="plyn" placeholder="Vložte spotrebu"></b-form-input>
                                            </b-col>
                                            <b-col  md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected3" :options="['kWh', '€']"></b-form-select></b-col>
                                
                                        </b-row>
                                    </div>

                                    <div>
                                        <b-row  style="margin-bottom: 2vh" align-v="center">    
                                            <b-col md="2" cols="1" class="text-right"></b-col>
                                            <b-col md="4" cols="11" class="text-left">LPG:</b-col>
                                            <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                                <b-form-input v-model="lpg" placeholder="Vložte spotrebu"></b-form-input>
                                            </b-col>
                                            <b-col  md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected4" :options="['litrov', '€']"></b-form-select></b-col>
                                
                                        </b-row>
                                    </div>

                                    <div>
                                        <b-row  style="margin-bottom: 2vh" align-v="center">    
                                            <b-col md="2" cols="1" class="text-right"></b-col>
                                            <b-col md="4" cols="11" class="text-left">Tuhé palivo: <b-icon-question-circle-fill font-scale="1.2" id="question6tuhe"></b-icon-question-circle-fill></b-col>
                                            <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                                <b-form-input v-model="tuhe" placeholder="Vložte spotrebu"></b-form-input>
                                            </b-col>
                                            <b-col md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="selected5" :options="['priestorový meter', 'm3' , 't']"></b-form-select></b-col>
                                            <b-tooltip target="question6tuhe" title="Pri tuhom palive predpokladáme kúrenie drevom, ktoré z pohľadu individuálnej spotreby má podľa oficiálnych štatistík nenulový emisný faktor. Zároveň z pohľadu národnej bilancie je tento zdroj emisne neutrálny. "  variant="dark"></b-tooltip>
                                        </b-row>
                                    </div>
                                </div>
                            </div>



                            <div class="otazka">
                                <b-row  style="margin-bottom: 2vh" align-v="center">      
                                    <b-col md="1" cols="1" class="text-right">7.</b-col>
                                    <b-col md="5" cols="11" class="text-left" align-h="start">Vyrába tvoja domácnosť elektrickú energiu z obnoviteľných zdrojov?</b-col>
                                    <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" >                         
                                        <b-form-radio-group
                                        class="pt-2"
                                        v-model="obnovitelnezdroje"
                                        :options="['Áno', 'Nie']"
                                        ></b-form-radio-group>
                                    </b-col>
                                </b-row>    
                                
                                <div v-if="obnovitelnezdroje=='Áno'">
                                    <b-row  style="margin-bottom: 2vh" align-v="center">      
                                        <b-col md="2" cols="1" class="text-right"></b-col>
                                        <b-col md="4" cols="11" class="text-left">Vyrábam:</b-col>
                                        <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                            <b-form-input v-on:change="fillData()" v-model="vlastna" placeholder="Vložte spotrebu"></b-form-input>
                                        </b-col>
                                        <b-col  md="2" cols="5" class="text-left"><b-form-select v-on:change="fillData()" v-model="vlastnakwhe" :options="['kWh']"></b-form-select></b-col>
                                        
                                        
                                    </b-row>   
                                    
                
                                </div>

                            </div>
                            <b-row align-h="center">
                                <b-col align-v="center">
                                    <div >
                                        <b-button class="zacat" :pressed.sync="details_byvanie">
                                            <div v-if="details_byvanie==false">podrobnejšie</div>
                                            <div v-if="details_byvanie==true">menej podrobne</div>
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>  
                        <b-col cols="12" lg="4" >  
                            <DoughnutExample
                                ref="byvanie_chart"
                                :chart-data="chartData"
                                :options="options"
                                class="graf_byvanie"
                        
                            > 
                            </DoughnutExample>
                            <div class="celkova_hodnota"><h2>Uhlíková stopa tvojho bývania je <strong>{{uhlikova_stopa_byvanie}}</strong>  kg CO2e</h2></div>


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
    name: 'Byvanie_graf',
    components: {DoughnutExample},
    props: {
    },

    

    
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
        
            labels: ["Centrálne vykurovanie","Elektrina","Zemný plyn","LPG","Tuhé palivo"],
            datasets: [
            {
                backgroundColor: ['#FB8622','#FFC08A','#28758C','#8FBECD','#99362B'],
                data: [413,260,0,0,0],
            }
            ],
        },
 
        
        
       
        
        
       
        
        vykurovanie: [
         
          { value: 1, text: 'Centrálne vykurovanie (tepláreň)' },
          { value: 2, text: 'Elektrina' },          
          { value: 3, text: 'Zemný plyn' },
          { value: 4, text: 'LPG' },
          { value: 5, text: 'Tuhé palivo' }
        ],

        // centralne kurenie: [priemer, BA, KE, ZA, Veolia, TT, MT, PO, BB, NT, ZV, ?]
        EF_centralne: [0.2867, 0.3930, 0.4330, 0.6780, 0.1753, 0, 0.3315, 0.3026, 0.1644, 0.3550, 0.0346,  0.434007],
        ef_elektrika: 0.0317, // pre rok 2024, rucne vypocitane, podla slovenskeho energetickeho mixu
        ef_plyn: 0.202,
        ef_lpg: 1.667,
        ef_tuhe_prm: 1212.96 ,
        ef_tuhe_m3: 96.9105 , // v pripade platnosti smernice o obnovitelnom dreve

        centralne_eurkwh: 0.1383, // ceny 2024
        elektrika_eurkwh: 0.1770,
        plyn_eurkwh: 0.0500,
        lpg_eurl: 0.711,
        tuhe_m3t:0.865, 
        tuhe_tm3:0.865, 
        tuhe_tprm: 0.585,
        

            
       
    
      }
    },
    
    mounted() {
        this.fillData();
    },

    methods: {
        updateChart() {
         this.$refs.byvanie_chart.update();
        },
        fillData() {
            /*
            this.chartData.datasets[0].data = [Math.round(this.emisie_centralne()*this.centralne/this.clenovia),Math.round((this.emisie_elektrika()*this.elektrika/this.clenovia)-this.dodavanie()),
                Math.round(this.emisie_plyn()*this.plyn/this.clenovia),Math.round(this.emisie_lpg()*this.lpg/this.clenovia),Math.round(this.emisie_tuhe()*this.tuhe/this.clenovia)];
            this.emisie_byvanie = Math.round(this.chartData.datasets[0].data);
            this.uhlikova_stopa_byvanie = Math.round(this.chartData.datasets[0].data[0]+this.chartData.datasets[0].data[1]+this.chartData.datasets[0].data[2]+this.chartData.datasets[0].data[3]+this.chartData.datasets[0].data[4]);
            this.updateChart();   
            */

            const elektrina_celkovo = Math.round(this.emisie_elektrika()*this.elektrika/this.clenovia)-Math.round(this.dodavanie());
            this.emisie_byvanie[0] = Math.round(this.emisie_centralne()*this.centralne/this.clenovia);
            this.emisie_byvanie[1] = elektrina_celkovo
            this.emisie_byvanie[2] = Math.round(this.emisie_plyn()*this.plyn/this.clenovia);
            this.emisie_byvanie[3] = Math.round(this.emisie_lpg()*this.lpg/this.clenovia);
            this.emisie_byvanie[4] = Math.round(this.emisie_tuhe()*this.tuhe/this.clenovia);
            
            this.chartData.datasets[0].data = [this.emisie_byvanie[0], (elektrina_celkovo < 0) ? 0 : elektrina_celkovo, this.emisie_byvanie[2], this.emisie_byvanie[3], this.emisie_byvanie[4],];
            this.uhlikova_stopa_byvanie = Math.round(this.emisie_byvanie[0] + this.emisie_byvanie[1] + this.emisie_byvanie[2] + this.emisie_byvanie[3] + this.emisie_byvanie[4]);
            this.updateChart();
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
            if (this.okres==68){ef = this.EF_centralne[10]} //opraveny index
            if (this.selected1=='kWh') {
                return ef;
            }
            else {
                return ef/this.centralne_eurkwh;
            }
        },
            
        emisie_elektrika() {
            
            if(this.Oze=='Nie'){
                if (this.selected2=='kWh') {
                    return this.ef_elektrika;
                }
                else {
                    return this.ef_elektrika/this.elektrika_eurkwh;
                }
            }
            else {
                return 0;
            }

        },
            
        emisie_plyn() {
            
            if (this.selected3=='kWh') {
                return this.ef_plyn;
            }
            else {
                return this.ef_plyn/this.plyn_eurkwh;
            }
        },
            
        emisie_lpg() {
            
            if (this.selected4=='litrov') {
                return this.ef_lpg;
            }
            else {
                return this.ef_lpg/this.lpg_eurl;
            }
        },
            
         emisie_tuhe() {      
            if (this.selected5=='priestorový meter') {
                return this.ef_tuhe_m3/this.tuhe_tm3*this.tuhe_tprm;
            }
            if (this.selected5=='m3') {
                return this.ef_tuhe_m3;
            }
            if (this.selected5=='t') {
                return this.ef_tuhe_m3/this.tuhe_tm3;
            }
          
             
        },

        dodavanie() {
            return (Number(this.vlastna))*this.ef_elektrika
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
        Oze() {
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

        Oze: {
            get() {
                return this.$store.state.Oze
            },
            set(value) {
                this.$store.commit('setOze',value)
            }
        },

      

    
    }

}


</script>

<style lang="scss" scoped>



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
    margin-top: 5%;
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
    top: 5vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    vertical-align: middle;
    padding: .75rem;
    width: 12rem;
    height:auto;  
    background: #FB8622;
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

.do_your_own {
    padding: 10%;
    
    overflow: auto;
    background-color:whitesmoke;
    font-family: 'chivo-bold';
}




</style>
