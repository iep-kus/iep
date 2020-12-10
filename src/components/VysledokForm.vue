<template>  
    
    <b-container fluid>
    
        
        <div class="background-cover"> 
            <div class="celkovo">  
                <b-row class="nadpis-title"> 
                    <b-col class="text-center"><h1>Tvoja celková uhlíková stopa je <strong>{{celkovo}}</strong> kilogramov CO2e ročne.</h1></b-col>
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
                                    Vyzerá to, že uhlíková stopa tvojho bývania je výrazne vyššia ako stopa bývania bežného Slováka. Skús zvážiť investíciu do zníženia energetickej náročnosti Vášho bývania.
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
                                    Zdá sa, že uhlíková stopa tvojho odpadu je vyššia ako u priemerného Slováka. Skús viac triediť! Pomôže to planéte, tvojmu mestu no takisto aj tebe. 
                                </div>

                            



                                <div class="suggestion" v-if="stromy>4">
                                    Ak by si každoročne nasadil <strong>{{stromy}}</strong> stromov, tvoja uhlíková stopa by bola nulová :)
                                </div>
                                <div class="suggestion" v-if="stromy<=4">
                                    Ak by si každoročne nasadil <strong>{{stromy}}</strong> stromy, tvoja uhlíková stopa by bola nulová :)
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
            <div class="share_button"> 
                <div class="share_button_item_excel">
                    <download-excel 
                        :fetch = "fillExcel"
                        :fields = "json_fields"
                        worksheet="Moja uhlikova stopa"
                        name="moja_uhlikova_stopa.xls"
                        >
                        <saveButton></saveButton>
                    </download-excel>
                </div>
                <div class="share_button_item_facebook">
                    <ShareNetwork
                        network="facebook"
                        :url="'https://iep.sk'+$route.fullPath"
                        title="Kalkulačka uhlíkovej stopy"
                        description="Každý z nás svojou aktivitou produkuje uhlíkovú stopu. Jej veľkosť závisí od toho čo robíš, ako žiješ a ako veľa cestuješ. Táto kalkulačka ju dokáže na základe tvojich odpovedí vypočítať. Tak poďme nato!"
                        :quote="'Moja uhlíková stopa je '+uhlikova_stopa_celkovo+' kg CO2e, z čoho až '+sugg_biggest_ratio+'% tvorí '+sugg_biggest_name+'! Vypočítaj si aj ty tvoju uhlíkovú stopu tu: https://iep.sk/Kalkulacka  ' "
                        hashtags="uhlikovastopa"
                    >
                        <shareButton></shareButton>
                    </ShareNetwork>
                </div>
            </div>  
        </div>
        <div class="background_dyo">
            <div class="do_your_own">
                <h1>Daj tomu druhý pohľad a pozri sa ako by si mohol svoju uhlíkovú stopu zmeniť. </h1> 
                <div class="scroll">
                    <img :src='require(`@/assets/scroll-down-black.png`)' />
                </div>
            </div>
        </div>
    
     



     
    </b-container>

</template>


<script>
import DoughnutExample from "./DoughnutExample.vue";
import BarExample from "./BarExample.vue";
import shareButton from "./shareButton.vue";
import saveButton from "./saveButton.vue";
import database from '../firebase';

export default {
    name: 'VysledokForm',
    components: {DoughnutExample,BarExample,shareButton,saveButton},
    data() {
      return { 
        optionsDoughnut: {
        responsive: true,
        legend: {
            display: false,
            
         },
        title: {
            display: true,
            text: 'Tvoja uhlíková stopa podľa kategórií',
            fontColor: "#FFFFFF",
            fontSize: 15,
            fontFamily: "montserrat-bold",
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
                text: 'Porovnanie s priemerným Slovákom a Európanom',
                fontColor: "#FFFFFF",
                fontSize: 15,
                fontFamily: "montserrat-bold",
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
        
        
        text: '',

        url : '',

        
        json_fields: {
    
            Kategória: "kategoria",
            Hodnota_v_kg_CO2e: "hodnota",
              
        },
    
        celkovo: 0,
        byvanie : 0,
        jedlo : 0,
        doprava : 0,
        spotreba : 0,
        ziv_styl : 0,

        e_byvanie: [0,0,0,0,0],
        e_doprava: [0,0,0,0],
        e_jedlo: [0,0,0,0,0,0],
        e_spotreba: [0,0,0,0,0],
        e_ziv_styl: [0,0,0],
       

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
        zateplenie:  {
            get() {
                return this.$store.state.zateplenie
            },
        },
    },
   
   watch: {
        celkovo() {
            this.fillChart();
        },
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
            this.e_byvanie = snapshot.child("emisie_byvanie").val();
            this.e_doprava = snapshot.child("emisie_doprava").val();
            this.e_jedlo = snapshot.child("emisie_jedlo").val();
            this.e_spotreba = snapshot.child("emisie_spotreba").val();
            this.e_ziv_styl = snapshot.child("emisie_ziv_styl").val();
        })
        
        
    },
    
    methods: {
        
        fillExcel() {
     const celkovo = [
                {kategoria: " " , hodnota: null},
                {kategoria: "Bývanie" , hodnota: null},
                {kategoria: "Centrálne vykurovanie" , hodnota: Math.round(Number(this.e_byvanie[0]))},
                {kategoria: "Elektrina" , hodnota: Math.round(this.e_byvanie[1])},
                {kategoria: "Zemný plyn" , hodnota: Math.round(this.e_byvanie[2])},
                {kategoria: "LPG" , hodnota: Math.round(this.e_byvanie[3])},
                {kategoria: "Tuhé palivo" , hodnota: Math.round(this.e_byvanie[4])},
                {kategoria: "Bývanie-celkovo" , hodnota: this.byvanie},
                
                {kategoria: " " , hodnota: null},

                {kategoria: "Doprava" , hodnota: null},
                {kategoria: "Automobilová doprava" , hodnota: Math.round(this.e_doprava[0])},
                {kategoria: "Hromadná doprava" , hodnota: Math.round(this.e_doprava[1])},
                {kategoria: "Vlaková doprava" , hodnota: Math.round(this.e_doprava[2])},
                {kategoria: "Letecká doprava" , hodnota: Math.round(this.e_doprava[3])},
                {kategoria: "Doprava-celkovo" , hodnota: this.doprava},

                {kategoria: " " , hodnota: null},
                
                {kategoria: "Jedlo" , hodnota: null},
                {kategoria: "Hovädzie mäso" , hodnota: Math.round(this.e_jedlo[0])},
                {kategoria: "Ostatné mäso" , hodnota: Math.round(this.e_jedlo[1])},
                {kategoria: "Mliečne výrobky a vajcia" , hodnota: Math.round(this.e_jedlo[2])},
                {kategoria: "Syry" , hodnota: Math.round(this.e_jedlo[3])},
                {kategoria: "Zelenina" , hodnota: Math.round(this.e_jedlo[4])},
                {kategoria: "Alkohol" , hodnota: Math.round(this.e_jedlo[5])},

                {kategoria: "Jedlo-celkovo" , hodnota: this.jedlo},
                
                {kategoria: " " , hodnota: null},
                
                {kategoria: "Spotreba" , hodnota: null},
                {kategoria: "Autá" , hodnota: Math.round(this.e_spotreba[0])},
                {kategoria: "Biela technika" , hodnota: Math.round(this.e_spotreba[1])},
                {kategoria: "Elektrospotrebiče" , hodnota: Math.round(this.e_spotreba[2])},
                {kategoria: "Osobná elektronika" , hodnota: Math.round(this.e_spotreba[3])},
                {kategoria: "Nábytok" , hodnota: Math.round(this.e_spotreba[4])},
                {kategoria: "Spotreba-celkovo" , hodnota: this.spotreba},

                {kategoria: " " , hodnota: null},

                {kategoria: "Životný štýl" , hodnota: null},
                {kategoria: "Oblečenie" , hodnota: Math.round(this.e_ziv_styl[0])},
                {kategoria: "Dovolenkovanie" , hodnota: Math.round(this.e_ziv_styl[1])},
                {kategoria: "Odpady" , hodnota: Math.round(this.e_ziv_styl[2])},
                {kategoria: "Životný štýl-celkovo" , hodnota: this.ziv_styl},
                
                {kategoria: " " , hodnota: null},

                {kategoria: "Celková uhlíková stopa" , hodnota: this.celkovo},
                
                {kategoria: " " , hodnota: null},
                
                {kategoria: "Link na výsledok" , hodnota: 'https://iep-stranka.vercel.app'+this.$route.fullPath },
                
                
                ];
            console.log(celkovo)
            return celkovo
        },


        fillChart() {
            this.chartDataDoughnut.datasets[0].data = [this.byvanie,this.doprava, this.jedlo, this.spotreba, this.ziv_styl];
            this.uhlikova_stopa_celkovo = this.byvanie+this.doprava + this.jedlo + this.spotreba + this.ziv_styl;
            this.chartDataBar.datasets[0].data[1] = this.celkovo
            this.updateChart()
            this.celkovo_suggestions(this.chartDataDoughnut.datasets[0].data)
            this.updateChartBar()
            this.update_suggestions()
            this.url= this.$route.query.page


        },
        updateChart() {
            this.$refs.celkovo_chart.update();
        },
        updateChartBar() {
            this.$refs.celkovo_porovnanie_chart.update();
        }, 
       
        celkovo_suggestions(value) {
            if(this.celkovo > 5888 && this.celkovo < 8480 ) {
                this.celkovo_sugg_between = true
                this.celkovo_sugg_under = false
                this.celkovo_sugg_over = false
                this.diff_sugg_between1 = this.celkovo - 5888
                this.diff_sugg_between2 = 8480 - this.celkovo 
            }
            if(this.celkovo < 5888) {
                this.celkovo_sugg_between = false
                this.celkovo_sugg_under = true
                this.celkovo_sugg_over = false
                this.diff_sugg_under1 = 5888 - this.celkovo
                this.diff_sugg_under2 = 8480 - this.celkovo 
            }
            if(this.uhlikova_stopa_celkovo > 8480 ) {
                this.celkovo_sugg_between = false
                this.celkovo_sugg_under = false
                this.celkovo_sugg_over = true
                this.diff_sugg_over1 = this.celkovo - 5888
                this.diff_sugg_over2 = this.celkovo - 8480
            }
            this.celkovo_sugg_biggest = this.indexOfMax(value)
            this.sugg_biggest_value = value[this.celkovo_sugg_biggest]
            this.sugg_biggest_ratio = Math.round(100*(this.sugg_biggest_value/this.celkovo))
            
            this.celkovo_sugg_lowest = this.indexOfMin(value)
            this.sugg_lowest_value = value[this.celkovo_sugg_lowest]
            this.sugg_lowest_ratio = Math.round(100*(this.sugg_lowest_value/this.celkovo))

            const section_names = ["bývanie","doprava","jedlo","spotreba","životný štýl"]
            this.sugg_biggest_name = section_names[this.celkovo_sugg_biggest]
            this.sugg_lowest_name = section_names[this.celkovo_sugg_lowest]
            

            this.stromy = Math.round(this.celkovo/1100);
            
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
            const average_slovak = [2084,1199,789,180,330,450,120,815, 200 , 195 , 115]
            for (var i = 0; i < average_slovak.length; i++) {
                diff[i] = emissions[i]-average_slovak[i]; 
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

            console.log(diff,maxIndex,maxIndex2,this.byv,this.ziv_obl)

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

.share_button {
    margin-bottom: 5%;
    justify-content: center;
    display: flex;
    text-align: center;
    height: auto;
}
.share_button_item_excel {
    margin-right: 2%;
}
.share_button_item_facebook {
    margin-left: 2%;
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



.background-cover {
    background: linear-gradient(180deg, rgba(100, 100, 100, 0.24) 5.21%, rgba(1, 1, 1, 0) 100%),url('../assets/background-results.jpg') 50% 50%;
    background-size: cover;
    overflow: auto;
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

.scroll {   
    margin-top: 5%;
    height: 8rem;
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
