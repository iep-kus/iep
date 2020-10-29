<template>
    
      
    <b-container fluid>

        <div class="celkovo">
            <div class="obsah">  
                <b-row>
                    <h2>Nápady a myšlienky prosím posielajte na môj FB</h2>
                </b-row>
                
                
                <b-row align-v="center">    
                    <b-col> 
                        <div class="vysledok">
                             
                        </div>
                    </b-col> 
                    
                    
                    <b-col> 
                        <div class="vysledovka">
                            
                            <b-row>
                                <b-col>
                                    <div class="nadpis">
                                         <h1> Ďakujem za pilotné testovanie  </h1>
                                    </div>
                                    <div class="graf">
                                        
                                    </div>
                                </b-col>
                                <b-col>
                                    <div class="nadpis">
                                        
                                    </div>
                                    <div class="graf">
                                            
                                    </div>
                                </b-col>
                            </b-row>
                            
                            
                            
                            <b-row>
                                
                                <b-col>
                                    <div class="nadpis">
                                       
                                    </div>
                    
                                    <div class="graf">
                                            
                                    </div>
                                </b-col>

                                <b-col>
                                    <div class="nadpis">
                                        
                                    </div>
                                    <div class="graf">
                                            
                                    </div>
                                </b-col>

                            </b-row>


                        </div>
                    </b-col> 
                
                    
                    
                
                
                
                
                </b-row>

                
                    

                <b-row>
                    <b-col>
                        <h2>Simple verzia: čas: 5.40</h2>
                    </b-col>
                    <b-col>
                        <h2>Advanced verzia: čas: 15.20</h2>
                    </b-col>
                </b-row>
                
            </div>
        </div>
            
    </b-container>

    
</template>


<script>

export default {
    name: 'VysledokForm'
    

}

</script>

<style  scoped>

h1 {
    padding: 5%;
    font-weight: 1000;
}

.celkovo {
    background-color:rgba(237, 237, 237, 1);
    
    overflow: auto;
    position: relative;
}

.vysledok {

    position: relative;
    padding: 10%;
    width: 90%;

}

 vysledovka {

    width: 90%;
    background: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.36);
    box-sizing: border-box;
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.25);
    border-radius: 12px;


}

.nadpis {
    padding: 5%;
    text-align: left;
    margin-top: 20vh;
}

.graf {
    display: block;
    position: relative;
    margin-left: 5vh;
    margin-right: auto;
    text-align: left; 
    height: 15vh; 
    
}

.obsah {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10vh;
}

.zacat {
    position: relative;
  text-align: center;
  top: 5vh;
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
  padding: 1rem;
  width: 223px;
   height: 52px;  
   background: #FF6600;
    border-radius: 20px; 
    border: 0px solid #000000;
    color: white;

   
}

.zacat {
  transition-duration: 0.4s;
}

.zacat:hover {
  background-color: rgba(172, 69, 0, 1); /* Green */
  color: white;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}


</style>
