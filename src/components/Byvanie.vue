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
                                <b-col cols="11" class="text-left" align-h="start">Aké zdroje energie alebo palivo primárne používate na vykurovanie a ohrev vody?</b-col>
                            </b-row> 
                        </div> 
                        <div>   
                            <b-row  style="margin-bottom: 2vh" align-v="center">    
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" class="text-left" > 
                                    <b-form-checkbox-group
                                            id="kurenie"
                                            v-model="vykurovanievybrate"
                                            :options="vykurovanie"
                                            name="vykurovanie"
                                            
                                    ></b-form-checkbox-group>
                                    </b-col>
                    
                            </b-row>

                        </div> 
                        
                        <div v-if="details==true">
                            <b-row  style="margin-bottom: 2vh" align-v="stretch">      
                                    <b-col md="1" cols="1" class="text-right"></b-col>
                                    <b-col cols="11" class="text-left h-100" align-h="start">Uveďte konkrétnu spotrebu jednotlivých zdrojov energií alebo paliva (vykurovanie, varenie, spotrebiče...)</b-col>
                            </b-row>    
                                
                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center" v-if="vykurovanievybrate==1">    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">Centrálne vykurovanie:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                        <b-form-input v-model="centralne" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col md="2" cols="5" class="text-left"><b-form-select v-model="selected1" :options="['kWh', '€']"></b-form-select></b-col>
                            
                                </b-row>
                            </div>

                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center">    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">Elektrika:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                        <b-form-input v-model="elektrika" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col md="2" cols="5" class="text-left"><b-form-select v-model="selected2" :options="['kWh', '€']"></b-form-select></b-col>
                        
                                </b-row>
                            </div>

                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center">    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">Zemný plyn:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" >
                                        <b-form-input v-model="plyn" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col  md="2" cols="5" class="text-left"><b-form-select v-model="selected3" :options="['kWh', '€']"></b-form-select></b-col>
                        
                                </b-row>
                            </div>

                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center" v-if="vykurovanievybrate==4">    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">LPG:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                        <b-form-input v-model="lpg" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col  md="2" cols="5" class="text-left"><b-form-select v-model="selected4" :options="['kWh', '€']"></b-form-select></b-col>
                        
                                </b-row>
                            </div>

                            <div>
                                <b-row  style="margin-bottom: 2vh" align-v="center" v-if="vykurovanievybrate==5">    
                                    <b-col md="2" cols="1" class="text-right"></b-col>
                                    <b-col md="4" cols="11" class="text-left">Tuhé palivo:</b-col>
                                    <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                        <b-form-input v-model="tuhe" placeholder="Vložte spotrebu"></b-form-input>
                                    </b-col>
                                    <b-col md="2" cols="5" class="text-left"><b-form-select v-model="selected5" :options="['prm', 'm3' , 't']"></b-form-select></b-col>
                        
                                </b-row>
                            </div>
                        </div>
                    </div>



                    <div class="otazka">
                        <b-row  style="margin-bottom: 2vh" align-v="center">      
                            <b-col md="1" cols="1" class="text-right">7.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Vyrábate si energiu z obnoviteľných zdrojov?</b-col>
                            <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" >                         
                                <b-form-radio-group
                                class="pt-2"
                                v-model="obnovitelnezdroje"
                                :options="['Áno', 'Nie']"
                                ></b-form-radio-group>
                            </b-col>
                        </b-row>    
                        
                        <div v-if="obnovitelnezdroje=='Áno' && details==true">
                            <b-row  style="margin-bottom: 2vh" align-v="center">      
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="11" class="text-left">Vlastná spotreba:</b-col>
                                <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-input v-model="vlastna" placeholder="Vložte spotrebu"></b-form-input>
                                </b-col>
                                <b-col  md="2" cols="5" class="text-left"><b-form-select v-model="vlastnakwhe" :options="['kWh', '€']"></b-form-select></b-col>
                                
                                
                            </b-row>   
                            <b-row  style="margin-bottom: 2vh" align-v="center"> 
                                <b-col md="2" cols="1" class="text-right"></b-col>
                                <b-col md="4" cols="11" class="text-left">Dodávam do siete:</b-col>
                                <b-col md="3" cols="6" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-input v-model="dodavam" placeholder="Vložte spotrebu"></b-form-input>
                                </b-col>
                                <b-col  md="2" cols="5" class="text-left"><b-form-select v-model="dodavamkwhe" :options="['kWh', '€']"></b-form-select></b-col>
                            </b-row>
           
                        </div>

                    </div>

                    <b-row align-h="center">
                        <b-col align-v="center">
                            <div >
                                <b-button class="zacat" :pressed.sync="details">podrobnejšie</b-button>
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
    data() {
      return {
        
        details: false,
        
        vykurovanievybrate:[1],
        
        vykurovanie: [
         
          { value: 1, text: 'Centrálne vykurovanie' },
          { value: 2, text: 'Zemný plyn' },
          { value: 3, text: 'Elektrika' },
          { value: 4, text: 'LPG' },
          { value: 5, text: 'Tuhé palivo' }
         ],

        centralne: '',
        elektrika: '',
        plyn: '',
        lpg: '',
        tuhe: '',
        

        selected1: 'kWh',
        selected2: 'kWh',
        selected3: 'kWh',
        selected4: 'kWh',
        selected5: 'kWh',

            
        obnovitelnezdroje: 'Nie',
        vlastna: '',
        dodavam: '',
        vlastnakwhe: 'kWh',
        dodavamkwhe: 'kWh',
      }
    },
    
    methods: {
        

    }

}


</script>

<style scoped>

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}



.item{
    
    background-color: white;
    overflow: auto;
    width: 100%;
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
