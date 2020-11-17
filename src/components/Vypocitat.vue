<template>
    <b-container fluid>
        <div class="vypocitat">   
            <div class="obsah">
                <b-row class="text-center" style="margin-left:0%">
                    <b-col align-h="start"><div class="title"><h1>Hotovo!</h1></div></b-col>
                </b-row>
                <b-row class="text-left" style="margin-left:0%">
                    <b-col align-h="start"><div class="undertitle"><h4>Pre výpočet tvojej uhlíkovej stopy stlač tlačítko <strong>Vypočítať!</strong></h4></div></b-col>
                </b-row>
            
                <b-row class="zacat">
                    <div class="button_vysledky">
                        <router-link to="/Kalkulacka/vysledky">
                            Vypočítať!
                        </router-link>
                    </div>  
                </b-row>
            </div>
            



            
            
        </div>
    </b-container>
</template>


<script>

export default {
    name: 'Vypocitat',
    
}

</script>

<style scoped>
h3 {
    color: whitesmoke;
}

h1 {
    color: white;
    font-family: 'montserrat-bold' ;
    font-size: 3rem;
}

.title {
    margin-left: 0%;
   
    
}
.undertitle {
    margin-top: 5%;
    color: white;
    text-align: center;
}

.box {
    position: relative;
    left: 50%;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.vypocitat {
    overflow: auto;
    background-color: #FF6600;
}

.obsah{
    padding: 5%;
}


.zacat {
    position: relative;
    text-align: center;
    top: 5vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    vertical-align: middle;
    padding: 1rem;
    width: 20rem;
    height: 6rem; 
    background-color:white;
    border-radius: 20px; 
    border: 3px solid white;
    color: white;
    font-size: 2.5rem;
    font-weight: 1000;
    transition: color 0.5s;
    z-index: 1;
    margin-bottom: 10%;
    


   
}

.button_vysledky {
    color: #FF6600;
    text-align: center;
    position: center;
    margin-left: 2.5rem;
    margin-bottom: 10%;
}

.zacat {
  transition-duration: 0.4s;
}

.zacat:hover {
  background-color:white; /* Green */
  color: #FF6600;;
}


</style>
