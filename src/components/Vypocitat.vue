<template>
    <b-container fluid>
        <div class="vypocitat">   
            <div class="obsah">
                <b-row class="text-left" style="margin-left:0%">
                    <b-col align-h="start"><div class="title">Hotovo!</div></b-col>
                </b-row>
                <b-row class="text-left" style="margin-left:0%">
                    <b-col align-h="start"><h3>Pre výpočet tvojej uhlíkovej stopy stlač tlačítko <strong>Vypočítať!</strong></h3></b-col>
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

.title {
    margin-left: 0%;
    color: white;
    font-size: 5rem;
    font-weight: 1100;
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

.nav-link-wrapper {
    height: 1.5rem;
    position: center;
    text-align: center;
    z-index: 10;
  }
.nav-link-wrapper a {
    color: white;
    text-decoration: none;
    transition: color 0.5s;
  }
.nav-link-wrapper:hover {
    color: #FF6600;
  }


.zacat {
    position: relative;
    text-align: center;
    top: 5vh;
    margin-left: auto;
    margin-right: auto;
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
    


   
}

.button_vysledky {
    color: #FF6600;
    text-align: center;
    position: center;
    margin-left: 2.5rem;
}

.zacat {
  transition-duration: 0.4s;
}

.zacat:hover {
  background-color:white; /* Green */
  color: #FF6600;;
}


</style>
