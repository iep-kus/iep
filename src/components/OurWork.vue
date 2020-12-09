<template>
    
    <b-container fluid >
        <div class="background">
            
            <div class="obsah">
                <div class="title">   
                    <b-row align-v="center">
                        <b-col><h2>Publikácie</h2></b-col>    
                    </b-row>
                </div> 
                <div >
                    <b-row  align-v="center">
                            
                        <b-col cols="12" lg="3">
                            <a href="https://www.minzp.sk/iep/publikacie/ekonomicke-analyzy/" style="text-decoration: none;">    
                                <div class="wrapper-publication">
                                    <b-row align-h="center">
                                        <div class="icon"><i class="far fa-edit"></i></div>
                                    </b-row>
                                    <b-row align-h="center">
                                    <span><h4>Diskusné štúdie</h4></span>
                                    </b-row>
                                </div>
                            </a>
                        </b-col>
                    
                        
                        <b-col cols="12" lg="3">
                            <a href="https://www.minzp.sk/iep/publikacie/komentare/" style="text-decoration: none;">    
                                <div class="wrapper-publication">
                                    <b-row align-h="center">
                                        <div class="icon"><i class="far fa-newspaper"></i></div>
                                    </b-row>
                                    <b-row align-h="center">
                                    <span><h4>Komentáre</h4></span>
                                    </b-row>
                                </div>
                            </a>
                        </b-col>
                        
                        
                        <b-col cols="12" lg="3">
                            <a href="https://www.minzp.sk/iep/strategicke-materialy/envirostrategia-2030/" style="text-decoration: none;">    
                                <div class="wrapper-publication">
                                    <b-row align-h="center">
                                        <div class="icon"><i class="fas fa-tasks"></i></div>
                                    </b-row>
                                    <b-row align-h="center">
                                    <span><h4>Strategické materiály</h4></span>
                                    </b-row>
                                </div>
                            </a>
                        </b-col>

                        <b-col cols="12" lg="3">
                            <a href="https://www.minzp.sk/iep/publikacie/prezentacie-seminare/" style="text-decoration: none;">    
                                <div class="wrapper-publication">
                                    <b-row align-h="center">
                                        <div class="icon"><i class="fas fa-calculator"></i></div>
                                    </b-row>
                                    <b-row align-h="center">
                                    <span><h4>Kalkulačky</h4></span>
                                    </b-row>
                                </div>
                            </a>
                        </b-col>


                    </b-row>
                </div>
            </div>    
            
        </div>
    </b-container>
</template>

<script>

export default {
    name: 'OurWork',
    components: {},
}
</script>

<style lang="scss" scoped>

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.background {
    background-color: whitesmoke;
    min-height: 30vh;
}

.obsah {
    padding: 5%;

}

.icons {
    width: 10%;
    height: auto;
    margin-bottom: 1rem;
}

.wrapper-publication {
    min-width: 100px;
    background-color:whitesmoke;
    padding: 1rem 2rem;
    text-decoration: none;
    color:rgba(71, 71, 71, 1);;
    border-radius: 10px;
    transition: all .2s ease-in-out;
    margin-bottom: 3%;
   
    i {
      color: rgba(71, 71, 71, 1);;
      font-size: 32px;
      transition: all .3s ease-in-out;
    }
    span {
      font-family: "Roboto", sans-serif;    
      align-self: center;
      transform: translateX(0px);
      transition: all .1s ease-in-out;
      opacity: 1;
     }
   
   &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color:#C69C94;
    box-shadow: 0px 10px 30px rgba(0,0,0,0.10);
      i {
        transform: scale(1.1);
        color: #FFF;
        align-self: center;
        justify-content: center;

      }
      span {
        transform: scale(1.1);
        color: #FFF;
      }
    }
   &:active {
     transform: scale(1);
     box-shadow: 0px 2px 10px rgba(0,0,0,0.10);
   }
}

.title {
    font-family: 'montserrat-bold';
    margin-bottom: 4%;
}


</style>