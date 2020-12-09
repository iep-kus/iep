<template>
    
    <b-container fluid >
        <div class="background">  
            <div class="obsah">
                <div data-aos="slide-up" class="title">   
                    <b-row align-v="center">
                        <b-col><h2>Kto sme?</h2></b-col>    
                    </b-row>
                </div> 
                <div  class="text-wrapper">
                    <div data-aos="slide-up" data-aos-duration="800">   
                        <b-row align-v="center">
                            <b-col><p>Inštitút environmentálnej politiky (IEP) je analytickým útvarom Ministerstva životného prostredia SR (MŽP SR). Našim poslaním je poskytovať kvalitné a spoľahlivé analýzy a prognózy v oblasti životného prostredia pre slovenskú vládu a verejnosť. Objektivita IEP je zabezpečená jeho nezávislosťou. Výstupy nemusia nutne odzrkadľovať oficiálne názory MŽP SR, ich cieľom je podnecovať a zlepšovať odbornú a verejnú diskusiu na aktuálne témy. IEP vedie bývalý dlhoročný analytik IFP a priemerný vek analytikov IEP je 32 rokov.</p></b-col>    
                        </b-row>
                    </div> 
                    <div data-aos="slide-up" data-aos-duration="800">
                        <b-row align-v="center">
                            <b-col><p>Dlhodobo spolupracujeme so zahraničnými organizáciami, v rámci čoho sme realizovali a naďalej realizujeme spoločné projekty v spolupráci s OECD, či Svetovou bankou, v rámci ktorých boli naši analytici vyslaní na niekoľko týždňov priamo do danej organizácie.</p></b-col>    
                        </b-row>
                    </div>
      
                    <div data-aos="slide-up" data-aos-duration="800">    
                        <b-row align-v="center">    
                                
                            <b-col class="text-center">    
                                <div class="share_button">    
                                    <div class="share_button_facebook">   
                                        <div class="btn-a">
                                            <a href="https://www.facebook.com/iep.mzp">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="share_button_insta">     
                                        <div class="btn-i">
                                            <a href="https://www.instagram.com/iep_sk/?hl=sk">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </div> 
                                    </div> 
                                </div>
                            </b-col>
                            
                        </b-row>
                    </div>
                </div>
            </div>
        </div>

    </b-container>
</template>

<script>
export default {
    name: 'Onas',
    components: {},
}
</script>

<style lang="scss" scoped>

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}


.background {
    background: linear-gradient(180deg, rgba(100, 100, 100, 0.64) 5.41%, rgba(1, 1, 1, 0) 100%),url('../assets/footer-color.jpg') 40% 40%;
}

.obsah {
    padding: 5%;
}

.title {
    color: white;
    font-family: 'montserrat-bold';
    margin-bottom: 2%;
}

.text-wrapper {
    color: white;
    margin-left: 10%;
    margin-right: 10%;
}

@media only screen and (max-width: 768px){
  .text-wrapper {
    color: white;
    margin-left: 0%;
    margin-right: 0%;
  }
}

.btn-i {
    min-width: 90px;
    background-color: transparent;
    padding: 1rem 1rem;
    text-decoration: none;
    border-radius: 10px;
    transition: all .3s ease-in-out;
   
    i {
      color:white;
      font-size: 2rem;
      transition: all .3s ease-in-out;
    }
   
   &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    box-shadow: 0px 10px 30px rgba(0,0,0,0.10);
      i {
        
        color: #FFF;
        align-self: center;
        justify-content: center;

      }
    }
   &:active {
     transform: scale(1);
     box-shadow: 0px 2px 10px rgba(0,0,0,0.10);
   }
}

.btn-a {
    min-width: 90px;
    background-color:transparent;
    padding: 1rem 1rem;
    text-decoration: none;
    border-radius: 10px;
    transition: all .3s ease-in-out;
   
    i {
      color:white;
      font-size: 2rem;
      transition: all .3s ease-in-out;
    }
   
   &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color:#3b5998;
    box-shadow: 0px 10px 30px rgba(0,0,0,0.10);
      i {
        
        color: #FFF;
        align-self: center;
        justify-content: center;

      }
    }
   &:active {
     transform: scale(1);
     box-shadow: 0px 2px 10px rgba(0,0,0,0.10);
   }
}


.share_button {
    justify-content: center;
    display: flex;
    text-align: center;
    height: auto;
}


.share_button_insta {
    margin-left: 1rem;
}
.share_button_facebook {
    margin-right: 1rem;
}


</style>