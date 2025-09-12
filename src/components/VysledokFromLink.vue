<template>
    
    <div id="kalkulacka_grafy">
       
        <div class="background-cover"> 
            <div class="celkovo">  
                <b-row class="nadpis-title"> 
                    <b-col class="text-center"><h1>Moja celková osobná uhlíková stopa je <strong>{{celkovo}}</strong> kilogramov CO2e ročne.</h1></b-col>
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
                        <b-col cols=12 md="12" lg="6" order="3" order-md="3" order-lg="2" class="[text-left,suggestions-column]">
                            <div class="suggestions">
                                <div class="suggestion" v-if="celkovo_sugg_between">
                                    To je o <strong>{{diff_sugg_between1}}</strong> kg CO2e viac ako priemerný Slovák, no o <strong>{{diff_sugg_between2}}</strong> kg CO2e menej ako priemerný Európan
                                </div>
                                <div class="suggestion" v-if="celkovo_sugg_over">
                                    To je až o <strong>{{diff_sugg_over1}}</strong> kg CO2e viac ako priemerný Slovák a takisto aj o <strong>{{diff_sugg_over2}}</strong> kg CO2e viac ako priemerný Európan
                                </div>
                                <div class="suggestion" v-if="celkovo_sugg_under">
                                    To je o <strong>{{diff_sugg_under1}}</strong> kg CO2e menej ako priemerný Slovák no dokonca až o <strong>{{diff_sugg_under2}}</strong> kg CO2e menej ako priemerný Európan. To však ešte neznamená, že sa nemôžeš ďalej zlepšovať. Nižšie sú uvedené návrhy ako svoju uhlíkovú stopu znížiť ešte viac!
                                </div>


                                <div class="suggestion" v-if="byv_zat">
                                    Vyzerá to, že uhlíková stopa tvojho bývania je výrazne vyššia ako stopa bývania bežného Slováka. Skús zvážiť investíciu do zníženia energetickej náročnosti tvojho bývania.
                                </div>
                                <div class="suggestion" v-if="byv">
                                    Vyzerá to, že uhlíková stopa tvojho bývania je výrazne vyššia ako stopa bežného Slováka. Jednou z možností na jej zníženie by mohla byť zmena typu kúrenia. 
                                </div>
                                <div class="suggestion" v-if="dop_aut">
                                    Zdá sa, že automobilová doprava tvorí veľkú časť tvojej uhlíkovej stopy. Najlepšou možnosťou by bolo jazdiť viac vlakmi alebo MHD. 
                                </div>
                            
                                <div class="suggestion" v-if="dop_let">
                                    Vyzerá to, že emisne najnáročnejšie je tvoje lietanie. Skús nahradiť lietanie aspoň na krátku vzdialenosť vlakmi. 
                                </div>
                                <div class="suggestion" v-if="jed_hov">
                                    Zdá sa, že tvoj jedálniček obsahuje veľmi veľa hovädzieho mäsa. Práve to je emisne najnáročnejšie a preto to navyšuje tvoju uhlíkovú stopu.
                                </div>
                                <div class="suggestion" v-if="jed_ost">
                                   Tvoja spotreba mäsa je výrazne vyššia ako spotreba bežného Slováka. Pri chove zvierat, následnej produkcii a transporte mäsa však vzniká výrazna uhlíkova stopa. Skús zmeniť svoj jedálniček a pomôž planéte.
                                </div>
                                <div class="suggestion" v-if="jed_mli">
                                    Chov hovädzieho dobytka a následná výroba mliečnych výrobkov je emisne celkom náročná. Skús zvážiť obmedzenie spotreby týchto výrobkov.
                                </div>
                                <div class="suggestion" v-if="jed_syr">
                                    Syry podobne ako mliečne výrobky sú emisne celkom náročné.
                                </div>
                                <div class="suggestion" v-if="spo">
                                    Zdá sa, že kategória spotreba u teba tvorí relatívne výraznu uhlíkovú stopu. Pri výrobe týchto elektronických zariadení a ich následnom dovoze na Slovensko vzniká relatívne vysoká uhlíková stopa. Obmedzením nákupov týchto zariadení môžeš svoju uhlíkovú stopu výrazne znížiť.
                                </div>
                                <div class="suggestion" v-if="ziv_obl">
                                    Vyzerá to, že nakupovanie oblečenia je jednou z tvojich obľúbených činností. Avšak pri výrobe oblečenia a pri jeho transporte vzniká veľmi veľká uhlíková stopa. Porozmýšlaj o častejšom nákupe oblečenia z druhej ruky. Ušetríš aj v peňaženke, no takisto aj znížiš svoju uhlíkovú stopu.
                                </div>
                                <div class="suggestion" v-if="ziv_dov">
                                    Nie len tvoje aktivity doma ale aj dovolenkovanie mimo domu môže výrazne zvýšiť tvoju uhlíkovú stopu. Čím vyššia kvalita služieb, tým vyššia uhlíková stopa. 
                                </div>
                                <div class="suggestion" v-if="ziv_odp">
                                   Skús viac triediť! Pomôže to planéte, tvojmu mestu no takisto aj tebe. 
                                </div>


                                
                                <div class="suggestion" v-if="stromy<4">
                                    Na to, aby si dosiahol uhlíkovo neutrálny život, by si musel ročne vysadiť <strong>{{stromy}}</strong> stromy (najlepšie na vlastnej záhrade, v meste, aleji, remízkach). :)
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
        <div class="background_dyo">    
            <div class="do_your_own">
                <h1>Vypočítaj si tvoju vlastnú uhlíkovú stopu a porovnaj sa. Zaberie ti to len 5 minút!</h1> 
                <b-button class="zacat" @click="kalkulacka()" ><h1>Začať</h1></b-button>
            </div>
        </div>

        

    </div>

</template>

<script>

import DoughnutExample from "@/components/DoughnutExample.vue";
import BarExample from "@/components/BarExample.vue";
import database from '../firebase';


export default {
    name: 'Kalkulacka_grafy',
    components: {DoughnutExample,BarExample},
    
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
                fontFamily: "chivo",
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
                fontFamily: "chivo",
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
                backgroundColor: ['#FB8622','#FFC08A','#28758C','#8FBECD','#99362B'],
                data: [0,0,0,0,0],
                borderWidth: 0
            }
            ],
        },

        chartDataBar :{
        
            labels: ["Slovák","Ja","Európan"],
            datasets: [
            {
                backgroundColor: ['#99362B','#FB8622','#99362B'],
                data: [4997,0,7670],
            }
            ],
        },
        
        celkovo: 0,
        byvanie : 0,
        jedlo : 0,
        doprava : 0,
        spotreba : 0,
        ziv_styl : 0,

        emisie_byvanie: [0,0,0,0,0],
        emisie_doprava: [0,0,0,0],
        emisie_jedlo: [0,0,0,0,0,0],
        emisie_spotreba: [0,0,0,0,0],
        emisie_ziv_styl: [0,0,0],



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

        byv: false,
        byv_zat: false,

        dop_aut: false,
        dop_mhd: false,
        dop_vla: false,
        dop_let: false,

        jed_hov: false,
        jed_ost: false,
        jed_mli: false,
        jed_syr: false,

        spo: false,

        ziv_obl: false,
        ziv_dov: false,
        ziv_odp: false,


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
            this.ziv_styl = snapshot.child("zivotny_styl").val();
            this.emisie_byvanie = snapshot.child("emisie_byvanie").val();
            this.emisie_doprava = snapshot.child("emisie_doprava").val();
            this.emisie_jedlo = snapshot.child("emisie_jedlo").val();
            this.emisie_spotreba = snapshot.child("emisie_spotreba").val();
            this.emisie_ziv_styl = snapshot.child("emisie_ziv_styl").val();
        })
        
        
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

            this.celkovo_suggestions()
            this.update_suggestions()
            this.updateChart()

        },
        updateChart() {
            this.$refs.celkovo_porovnanie_chart.update();    
            this.$refs.category_chart.update();
        },

        celkovo_suggestions() {
            if(this.celkovo > 4997 && this.celkovo < 7670 ) {
                this.celkovo_sugg_between = true
                this.celkovo_sugg_under = false
                this.celkovo_sugg_over = false
                this.diff_sugg_between1 = this.celkovo - 4997
                this.diff_sugg_between2 = 7670 - this.celkovo 
            }
            if(this.celkovo < 4997) {
                this.celkovo_sugg_between = false
                this.celkovo_sugg_under = true
                this.celkovo_sugg_over = false
                this.diff_sugg_under1 = 4997 - this.celkovo
                this.diff_sugg_under2 = 7670 - this.celkovo 
            }
            if(this.celkovo > 7670 ) {
                this.celkovo_sugg_between = false
                this.celkovo_sugg_under = false
                this.celkovo_sugg_over = true
                this.diff_sugg_over1 = this.celkovo - 4997
                this.diff_sugg_over2 = this.celkovo - 7670
            }
            

            if(this.celkovo<=3500){
                this.stromy = Math.round(this.celkovo/1100);
            }
            else {
                this.stromy = 4;
            }
            
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
        update_suggestions() {
            let diff = [0,0,0,0,0,0,0,0,0,0,0];
            let emissions = [this.uhlikova_stopa_byvanie,this.emisie_doprava[0],this.emisie_doprava[3],this.emisie_jedlo[0],this.emisie_jedlo[1],this.emisie_jedlo[2],this.emisie_jedlo[3],this.uhlikova_stopa_spotreba,this.emisie_ziv_styl[0],this.emisie_ziv_styl[1],this.emisie_ziv_styl[2]]
            // priemerny slovak = [byvanie, auto doprava, letecka doprava, hovadzie, ostatne maso, mlieko, syry, spotreba, oblecenie, dovolenky, odpady] - aktualizacia 2025
            const average_slovak = [1460, 844.3, 346, 165, 188, 190, 93, 399, 130, 140, 355]
            for (var i = 0; i < average_slovak.length; i++) {
                diff[i] = emissions[i]/average_slovak[i]; 
            }
            const maxIndex = this.indexOfMax(diff);
            
            diff.splice(maxIndex,1);
            
            let maxIndex2 = this.indexOfMax(diff);
            
            if(maxIndex2>=maxIndex){
                maxIndex2 = maxIndex2+1;
            }
            
            
            if(maxIndex==0 || maxIndex2==0){
                if(this.zateplenie=='žiadne' || this.zateplenie=='čiastočné'){ this.byv_zat=true}
                else { this.byv = true}
            }
            if(maxIndex==1 || maxIndex2==1){this.dop_aut=true}
            if(maxIndex==2 || maxIndex2==2){this.dop_let=true}
            if(maxIndex==3 || maxIndex2==3){this.jed_hov=true}
            if(maxIndex==4 || maxIndex2==4){this.jed_ost=true}
            if(maxIndex==5 || maxIndex2==5){this.jed_mli=true}
            if(maxIndex==6 || maxIndex2==6){this.jed_syr=true}
            if(maxIndex==7 || maxIndex2==7){this.spo=true}
            if(maxIndex==8 || maxIndex2==8){this.ziv_obl=true}
            if(maxIndex==9 || maxIndex2==9){this.ziv_dov=true}
            if(maxIndex==10 || maxIndex2==10){this.ziv_odp=true}
            
            if(maxIndex!=0 && maxIndex2!=0){this.byv=false; this.byv_zat = false}
            if(maxIndex!=1 && maxIndex2!=1){this.dop_aut=false}
            if(maxIndex!=2 && maxIndex2!=2){this.dop_let=false}
            if(maxIndex!=3 && maxIndex2!=3){this.jed_hov=false}
            if(maxIndex!=4 && maxIndex2!=4){this.jed_ost=false}
            if(maxIndex!=5 && maxIndex2!=5){this.jed_mli=false}
            if(maxIndex!=6 && maxIndex2!=6){this.jed_syr=false}
            if(maxIndex!=7 && maxIndex2!=7){this.spo=false}
            if(maxIndex!=8 && maxIndex2!=8){this.ziv_obl=false}
            if(maxIndex!=9 && maxIndex2!=9){this.ziv_dov=false}
            if(maxIndex!=10 && maxIndex2!=10){this.ziv_odp=false}

            

        },
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
    font-family: 'chivo-bold' ;
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
    background-color:#FB8622;
    border-radius: 20px; 
    border-color:white;
    color: white;
    font-family: 'chivo-bold';
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
    font-family: 'chivo-bold';
}

</style>