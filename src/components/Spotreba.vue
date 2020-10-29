<template>


    <b-container fluid >
        
        <div class="item">
                
            <div class="spotreba">
                <div class="wrapper-right">    
                    <b-row md="4" style="height: 20vh" align-h="start" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="1" class="text-left">   
                        <b-col offset-md="0.5" cols="4" align-h="start"><h1>Spotreba</h1></b-col>
                        
                    </b-row>   
                    
                    
                
                    <div class="otazka">
                        <b-row v-if="details_spotreba==true" style="margin-bottom:2.5vh" align-v="start">      
                            <b-col cols="1" class="text-right">16.</b-col>
                            <b-col cols="10" lg="5" class="text-left" align-h="start">Koľko áut vlastní Vaša domácnosť?</b-col>
                            <b-col cols="11" lg="5" offset="1" offset-lg="0" class="text-left" align-h="start"><b-form-spinbutton id="vlastnenieaut" v-model="vlastnenieaut" min="0" max="20"></b-form-spinbutton></b-col>
                        </b-row>
                        <div v-if="details_spotreba==true">
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col cols="1" lg="2" class="text-right"></b-col>
                                <b-col cols="10" lg="4" class="text-left">Priemerne po koľkých rokoch vymeníte auto za nové?</b-col>
                                <b-col cols="10" lg="5" offset="1" offset-lg="0" class="text-right" > 
                                    <b-form-spinbutton id="vekaut" v-model="vekaut" min="1" max="40"></b-form-spinbutton>
                                </b-col>
                    
                            </b-row>

                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col cols="1" lg="2" class="text-right"></b-col>
                                <b-col cols="10" lg="4" class="text-left">Prevažne kupujete autá:</b-col>
                                <b-col cols="10" lg="5" offset="1" offset-lg="0" class="text-right" > 
                                    <b-form-select v-model="nakupauta" :options="nakupaut"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>
                    </div>
                    




                    
                    
                    
                    <div class="otazka">
                        <b-row  style="margin-bottom:2.5vh" align-v="start">      
                            <b-col cols="1" class="text-right">17.</b-col>
                            <b-col cols="10" lg="5" class="text-left" align-h="start">Koľko z týchto elektrospotrebičov vlastníte? (chladnička, práčka, sušička, umývačka riadu, sporák, rúra, klimatizácia)</b-col>
                            <b-col cols="10" lg="5" offset="1" offset-lg="0" class="text-left" align-h="start"><b-form-spinbutton id="vlastneniebielatechnika" v-model="vlastneniebielatechnika" min="0" max="6"></b-form-spinbutton></b-col>
                        </b-row>
                        <div v-if="details_spotreba==true">
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col cols="1" lg="2" class="text-right"></b-col>
                                <b-col cols="10" lg="4"  class="text-left">Priemerne ako často ich meníte?</b-col>
                                <b-col lg="2" cols="3" offset="1" offset-lg="0" class="text-right">Raz za</b-col>
                                <b-col lg="2" cols="5" class="text-right" >
                                    
                                    <b-form-spinbutton id="vekbielatechnika" v-model="vekbielatechnika" min="1" max="40"></b-form-spinbutton>
                                </b-col> 
                                
                                <b-col lg="1" cols="2" class="text-left" v-if="vekbielatechnika>4">rokov</b-col>
                                <b-col lg="1" cols="2" class="text-left" v-if="vekbielatechnika<5">roky</b-col>
                            
                            </b-row>

                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col lg="2" cols="1" class="text-right"></b-col>
                                <b-col lg="4" cols="10" class="text-left">z toho z druhej ruky:</b-col>
                                <b-col lg="4" cols="8" offset="1" offset-lg="0" class="text-right" >
                                    
                                    <b-form-spinbutton id="druharukabielatechnika" v-model="druharukabielatechnika" min="0" max="100" step="5"></b-form-spinbutton>
                                </b-col> 
                                <b-col lg="1" cols="2" class="text-right">percent</b-col>
                    
                            </b-row>
                        </div>
                    </div>






                    <div class="otazka" v-if="details_spotreba==true">
                        <b-row  style="margin-bottom:2.5vh" align-v="start">      
                            <b-col lg="1" cols="1" class="text-right">18.</b-col>
                            <b-col lg="5" cols="10" class="text-left" align-h="start">Koľko ďalších elektronických zariadení, ktoré používa viacero členov domácností, máte? (televízor, repráky, herná konzola, vysávač, kuchynské roboty, kávovar, rýchlovarná kanvica, odšťavovač, žehlička, ohrievač... )</b-col>
                            <b-col lg="5" cols="10" offset-lg="0" offset="1" class="text-left" align-h="start"><b-form-spinbutton id="vlastnenieciernatechnika" v-model="vlastnenieciernatechnika" min="0" max="20"></b-form-spinbutton></b-col>
                        </b-row>

                        <div v-if="details_spotreba==true">
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col lg="2" cols="1" class="text-right"></b-col>
                                <b-col lg="4" cols="10" class="text-left">Priemerne ako často ich meníte?</b-col>
                                <b-col lg="2" cols="3" offset="1" offset-lg="0" class="text-right">Raz za</b-col>
                                <b-col lg="2" cols="5" class="text-right" >
                                    
                                    <b-form-spinbutton id="vekciernatechnika" v-model="vekciernatechnika" min="1" max="40"></b-form-spinbutton>
                                </b-col> 
                                <b-col lg="1" cols="2" class="text-right" v-if="vekciernatechnika>4">rokov</b-col>
                                <b-col lg="1" cols="2" class="text-right" v-if="vekciernatechnika<5">roky</b-col>
                    
                            </b-row>

                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col lg="2" cols="1" class="text-right"></b-col>
                                <b-col lg="4" cols="10" class="text-left">z toho z druhej ruky:</b-col>
                                <b-col lg="5" cols="10" offset-lg="0" offset="1" class="text-right" >
                                    
                                    <b-form-spinbutton id="druharukaciernatechnika" v-model="druharukaciernatechnika" min="0" max="100" step="5"></b-form-spinbutton>
                                </b-col> 
                                
                    
                            </b-row>
                        </div>
                    </div>








                    <div class="otazka">
                        <b-row  style="margin-bottom:2.5vh" align-v="start">      
                            <b-col lg="1" cols="1" class="text-right" v-if="details_spotreba==true">19.</b-col>
                            <b-col lg="1" cols="1" class="text-right" v-if="details_spotreba==false">18.</b-col>
                            <b-col lg="5" cols="10" class="text-left" align-h="start">Koľko zariadení z osobnej elektroniky vlastníš? (mobil, notebook, tablet, smart hodinky, power banka, čítačka kníh ...)</b-col>
                            <b-col lg="5" cols="10" offset="1" offset-lg="0" class="text-left" align-h="start"><b-form-spinbutton id="vlastnenietechnika" v-model="vlastnenietechnika" min="0" max="20"></b-form-spinbutton></b-col>
                        </b-row>
                        <div v-if="details_spotreba==true">
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col lg="2" cols="1" class="text-right"></b-col>
                                <b-col lg="4" cols="10" class="text-left">Priemerne ako často ich meníš?</b-col>
                                <b-col lg="2" cols="3" offset-lg="0" offset="1" class="text-right">Raz za</b-col>
                                <b-col lg="2" cols="5" class="text-right" >
                                    
                                    <b-form-spinbutton id="vektechnika" v-model="vektechnika" min="1" max="40"></b-form-spinbutton>
                                </b-col> 
                                <b-col lg="1" cols="2" class="text-right" v-if="vektechnika>4">rokov</b-col>
                                <b-col lg="1" cols="2" class="text-right" v-if="vektechnika<5">roky</b-col>
                    
                            </b-row>

                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col lg="2" cols="1" class="text-right"></b-col>
                                <b-col lg="4" cols="10" class="text-left">z toho z druhej ruky kupuješ:</b-col>
                                <b-col lg="5" cols="10" offset-lg="0" offset="1" class="text-right" >
                                    
                                    <b-form-spinbutton id="druharukatechnika" v-model="druharukatechnika" min="0" max="100" step="5"></b-form-spinbutton>
                                </b-col> 
                                
                    
                            </b-row>
                        </div>
                    </div>





                    <div class="otazka">
                        <b-row v-if="details_spotreba==true"  style="margin-bottom:2.5vh" align-v="start">      
                            <b-col lg="1" cols="1" class="text-right">20.</b-col>
                            <b-col lg="5" cols="10" class="text-left" align-h="start">Koľko z týchto kusov veľkého nábytku vlastníš? (gauč, posteľ, skriňa, kuchynká linka...)</b-col>
                            <b-col lg="5" cols="10" offset-lg="0" offset="1" class="text-left" align-h="start"><b-form-spinbutton id="vlastnenienabytok" v-model="vlastnenienabytok" min="0" max="20"></b-form-spinbutton></b-col>
                        </b-row>
                        <div v-if="details_spotreba==true">
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col lg="2" cols="1" class="text-right"></b-col>
                                <b-col lg="4" cols="10" class="text-left">Priemerne ako často ich meníš?</b-col>
                                <b-col lg="2" cols="3" offset-lg="0" offset="1" class="text-right">Raz za</b-col>
                                <b-col lg="2" cols="5" class="text-right" >
                                    
                                    <b-form-spinbutton id="veknabytok" v-model="veknabytok" min="1" max="40"></b-form-spinbutton>
                                </b-col> 
                                <b-col lg="1" cols="2" class="text-left" v-if="veknabytok>4">rokov</b-col>
                                <b-col lg="1" cols="2" class="text-left" v-if="veknabytok<5">roky</b-col>
                    
                            </b-row>

                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col lg="2" cols="1" class="text-right"></b-col>
                                <b-col lg="4" cols="10" class="text-left">z toho z druhej ruky kupuješ:</b-col>
                                <b-col lg="5" cols="10" offset-lg="0" offset="1" class="text-right" >
                                    
                                    <b-form-spinbutton id="druharukanabytok" v-model="druharukanabytok" min="0" max="100" step="5"></b-form-spinbutton>
                                </b-col> 
                                
                    
                            </b-row>
                        </div>
                    </div>








                   


                    <b-row align-h="center">
                        <b-col align-v="center">
                            <div >
                                <b-button class="zacat" :pressed.sync="details_spotreba">podrobnejšie</b-button>
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
    name: 'Spotreba',
    components: {},
    data() {
      return {
        
        details_spotreba:false,

        vlastnenieaut: 1,
        vekaut:10,
        
        vlastneniebielatechnika:5,
        vekbielatechnika:15,
        druharukabielatechnika:20,

        vlastnenieciernatechnika:4,
        vekciernatechnika:5,
        druharukaciernatechnika:20,

        vlastnenietechnika:5,
        vektechnika:10,
        druharukatechnika:20,
        
        vlastnenienabytok:5,
        veknabytok:10,
        druharukanabytok:20,


       



        nakupauta:1 ,
        nakupaut: [
          { value: 1, text: 'Nové' },
          { value: 2, text: 'Novšie ako 3 roky' },
          { value: 3, text: 'Staršie ako 3 roky' },
          { value: 4, text: 'Staršie ako 10 rokov' }
        ],

        

        
      }
    },
    


}


</script>

<style scoped>




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
