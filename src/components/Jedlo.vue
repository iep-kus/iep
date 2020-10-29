<template>


    <b-container fluid >
                
       <div class="item">
            <div class="jedlo">
                
                
                
                
                
                
                <div class="wrapper">    
                    <b-row md="4" style="height: 20vh" align-h="start" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="1" class="text-left">   
                        <b-col offset-md="0.5" cols="4" align-h="start"><h1>Jedlo</h1></b-col>
                    </b-row>  

                    <div class="otazka">    
                        <b-row  style="margin-bottom:2.5vh" align-v="center">      
                            <b-col cols="1" class="text-right">14.</b-col>
                            <b-col cols="10" md="5" class="text-left" align-h="start">Ste vegánom?</b-col>
                            <b-col cols="10" md="5" offset="1" offset-md="0" class="text-left" align-h="start">                        
                                <b-form-radio-group
                                class="pt-2"
                                v-model="vegan"
                                :options="['Áno', 'Nie']"
                                ></b-form-radio-group>
                            </b-col>
                        </b-row> 
                    </div>


                    <div v-if="vegan=='Nie'">
                        <b-row  style="margin-bottom:2.5vh" align-v="center">      
                            <b-col cols="1" class="text-right">15.</b-col>
                            <b-col cols="10" class="text-left" align-h="start">Koľkokrát týždenne priemerne konzumujete:</b-col>
                        </b-row> 

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Hovädzie mäso:</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="hovadzie" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1"  md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Ostatné mäso(kuracie, bravčové...):</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="ostatne" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Mliečne výrobky:</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="mliecne" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Syry:</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="syry" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Zelenina:</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="zelenina" :options="jedlofrekvencia"></b-form-select>
                                </b-col>
                    
                            </b-row>
                        </div>

                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="center">    
                                <b-col cols="1" md="2" class="text-right"></b-col>
                                <b-col cols="10" md="4" class="text-left">Alkohol(pivo, víno, tvrdé):</b-col>
                                <b-col cols="10" md="5" offset="1" offset-md="0" class="text-right" > 
                                    <b-form-select v-model="alkohol" :options="pitiefrekvencia"></b-form-select>
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

        vegan: 'Nie',
        
        hovadzie: 4,
        ostatne: 2,
        mliecne: 2,
        syry: 3,
        zelenina: 2,
        alkohol: 3,

        jedlofrekvencia: [
          { value: 1, text: 'V každom jedle' },
          { value: 2, text: 'Každý deň' },
          { value: 3, text: 'Niekoľkokrát do týždňa' },
          { value: 4, text: 'Raz za týždeň' },
          { value: 5, text: 'Zriedkavo' },
          { value: 6, text: 'Vôbec' }
        ],

        pitiefrekvencia: [
          { value: 1, text: 'Každý deň' },
          { value: 2, text: 'Niekoľkokrát do týždňa' },
          { value: 3, text: 'Raz za týždeň' },
          { value: 5, text: 'Príležitostne' },
          { value: 4, text: 'Vôbec' }
        ],


        
      }
    },
    


}


</script>

<style scoped>




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
