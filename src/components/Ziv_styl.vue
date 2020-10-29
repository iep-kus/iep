<template>


    <b-container fluid >
        
        <div class="item">
                
            <div class="ziv_styl">
                <div class="wrapper-right">    
                    <b-row md="4" style="height: 20vh" align-h="start" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="1" class="text-left">   
                        <b-col offset-md="0.5" cols="4" align-h="start"><h1>Životný štýl</h1></b-col>
                        
                    </b-row>   
                    
                    
                
    



                    <div class="otazka">
                        <b-row  style="margin-bottom:2.5vh" align-v="start">      
                            <b-col lg="1" cols="1" class="text-right">21.</b-col>
                            <b-col lg="5" cols="10" class="text-left" align-h="start">Ako často priemerne nakupuješ oblečenie?</b-col>
                            <b-col lg="5" cols="10" offset-lg="0" offset="1" class="text-left" align-h="start"><b-form-select v-model="nakupoblecenie" :options="oblecenie"></b-form-select></b-col>
                        </b-row>
                        <div v-if="details_ziv_styl==true">
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col lg="2" cols="1" class="text-right"></b-col>
                                <b-col lg="4" cols="10" class="text-left">z toho z druhej ruky kupuješ:</b-col>
                                <b-col lg="5" cols="10" offset-lg="0" offset="1" class="text-right" >
                                <b-form-spinbutton id="druharukanabytok" v-model="druharukaoblecenie" min="0" max="100" step="5"></b-form-spinbutton>
                                </b-col> 
                                
                    
                            </b-row>
                        </div>
                    </div>





                    <div class="otazka">
                        <b-row  style="margin-bottom:2.5vh" align-v="start">      
                            <b-col md="1" cols="1" class="text-right">22.</b-col>
                            <b-col md="10" cols="10" class="text-left" align-h="start">Koľko nocí ročne stráviš v:</b-col>
                        </b-row> 

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="10" class="text-left">Stan (voľne v prírode)</b-col>
                                <b-col md="5" cols="10" offset-md="0" offset="1" class="text-right" > 
                                    <b-form-spinbutton id="stan" v-model="stan" min="0" max="365"></b-form-spinbutton>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="10" class="text-left">Kemp, Hostel</b-col>
                                <b-col md="5" cols="10" offset-md="0" offset="1" class="text-right" > 
                                    <b-form-spinbutton id="kemp" v-model="kemp" min="0" max="365"></b-form-spinbutton>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="10" class="text-left">Štandardný hotel (3*-4*)</b-col>
                                <b-col md="5" cols="10" offset-md="0" offset="1" class="text-right" > 
                                    <b-form-spinbutton id="hotel" v-model="hotel" min="0" max="365"></b-form-spinbutton>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="10" class="text-left">Luxusný hotel (5*+)</b-col>
                                <b-col md="5" cols="10" offset-md="0" offset="1" class="text-right" > 
                                    <b-form-spinbutton id="luxus" v-model="luxus" min="0" max="365"></b-form-spinbutton>
                                </b-col>
                    
                            </b-row>
                        </div>

                    </div>



                    
                    
                    
                    
                    <div class="otazka">
                        <b-row  style="margin-bottom:2.5vh" align-v="start">      
                            <b-col md="1" cols="1" class="text-right">23.</b-col>
                            <b-col md="10" cols="10" class="text-left" align-h="start">Ktoré z nasledujúcich odpadov triediš?</b-col>
                        </b-row> 

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="10" class="text-left">Plasty</b-col>
                                <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" > 
                                    <b-form-radio-group class="pt-2" v-model="plasty" :options="['Áno', 'Nie']"></b-form-radio-group>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="10" class="text-left">Sklo</b-col>
                                <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" > 
                                    <b-form-radio-group class="pt-2" v-model="sklo" :options="['Áno', 'Nie']"></b-form-radio-group>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="10" class="text-left">Papier</b-col>
                                <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" > 
                                    <b-form-radio-group class="pt-2" v-model="papier" :options="['Áno', 'Nie']"></b-form-radio-group>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="start">    
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="10" class="text-left">BIO-odpad</b-col>
                                <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" > 
                                    <b-form-radio-group class="pt-2" v-model="bioodpad" :options="['Áno', 'Nie']"></b-form-radio-group>
                                </b-col>
                    
                            </b-row>
                        </div>

                    
                    </div>



                    <b-row align-h="center">
                        <b-col align-v="center">
                            <div >
                                <b-button class="zacat" :pressed.sync="details_ziv_styl">podrobnejšie</b-button>
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
    name: 'Ziv_styl',
    components: {},
    data() {
      return {
        
        details_ziv_styl:false,

        


        druharukaoblecenie:30,



        stan:0,
        kemp:0,
        hotel:10,
        luxus:0,


        plasty:'Áno',
        sklo:'Áno',
        papier: 'Áno',
        bioodpad: 'Nie',





        nakupoblecenie: 3,
        oblecenie: [
          { value: 1, text: 'Niekoľkokrát do týždňa' },
          { value: 2, text: 'Niekoľkokrát mesačne' },
          { value: 3, text: 'Raz mesačne' },
          { value: 4, text: 'Niekoľkokrát ročne' },
          { value: 5, text: 'Raz ročne' },
          { value: 6, text: 'Raz za 3 roky' },
          { value: 7, text: 'Vôbec' }
        ],


        
      }
    },
    


}


</script>

<style scoped>




.item{
    
    background-color: white;
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
