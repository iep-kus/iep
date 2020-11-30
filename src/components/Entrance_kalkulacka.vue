<template>
    
    <div class="coverphoto">
        <div class="logo">
          <img :src='require(`@/assets/iep_logo_transp_stvorec.png`)' />
        </div>
            
        <div class="title">
            Kalkulačka uhlíkovej stopy
        </div>
            
        <div class="undertitle">
            <h4> Každý z nás svojou aktivitou produkuje uhlíkovú stopu. Jej veľkosť závisí od toho čo robíš, ako žiješ a ako veľa cestuješ. Táto kalkulačka ju dokáže na základe tvojich odpovedí vypočítať. Tak poďme nato!</h4> 
        </div>

        <div class="details" v-if="details_kalkulacka">
            
            <div class="otazka-1">
                <h4>Čo je to uhlíková stopa?</h4>
            </div>
            <div class="odpoved">
                <p> Uhlíková stopa je množstvo emisií takých plynov uvoľnených do atmosféry, ktoré majú dopad na podnebie Zeme,
                pričom tieto emisie sú spôsobené činnosťou človeka. Tieto plyny produkujeme pri väčšine našich aktivít, napríklad
                pri spotrebe fosílnych palív v doprave alebo spotrebe tepla vyrobeného z uhlia či elektriny.</p>
            </div>

            <div class="otazka">
                <h4>Ako sa počíta uhlíková stopa?</h4>
            </div>
            <div class="odpoved">
                <p> Prvým krokom k výpočtu uhlíkovej stopy je stanovenie využitia zdrojov pri výrobe a spotrebe jednotky produktu či
                služby. Následne sa daným k týmto zdrojom priradí zodpovedajúci emisný faktor, ktorý spája množstvo uvoľnenej
                znečisťujúcej látky s aktivitou spojenou s jej vypúšťaním (napr. 0,2 g metánu na kilogram spotrebovanej nafty).
                Výsledné emisie tak získame prenásobením emisného faktora mierou aktivity:
                𝐸𝑚𝑖𝑠𝑖𝑒𝑥 = 𝐸𝐹𝑥 × 𝑄 × 𝐺𝑊𝑃𝑥, 
                kde 𝐸𝑚𝑖𝑠𝑖𝑒𝑥 sú emisie znečisťujúcej látky x, 𝐸𝐹𝑥 je emisný faktor znečisťujúcej látky x, 𝑄 je miera aktivity,
                spotreby alebo produkcie a 𝐺𝑊𝑃𝑥 je potenciál globálneho otepľovania danej látky.</p>
            </div>

            <div class="otazka">
                <h4>V akých jednotkách sa meria uhlíková stopa?</h4>
            </div>
            <div class="odpoved">
                <p> Keďže medzi skleníkové plyny
                patrí viacero látok (oxid uhličitý, metán a iné), emisie týchto látok sa prevádzajú do ekvivalentov emisií oxidu
                uhličitého (CO2e) prenásobením s potenciálom pre globálne otepľovanie (Global Warming Potential – GWP).
                Emisie skleníkových plynov, ktoré škodia v rôznych pomeroch, tak môžeme pomocou CO2e vzájomne porovnávať.</p>
            </div>

        </div>

        
        <div >
            <b-button class="zacat" @click="toStart()" :pressed.sync="details_kalkulacka">Chcem vedieť viac</b-button>
        </div>


        <div class="scroll">
            <img :src='require(`@/assets/scroll-down.png`)' />
        </div>
        
    </div>

</template>

<script>
export default {
    name: 'EntranceModal',
    data() {
      return {
        details_kalkulacka : false,
      }
    },
    methods: {
        toStart() {
            window.scrollTo(0, 0);
        }
    },
}
</script>

<style scoped>

p {
    color:white
}
h4 {
    color: white;
}

.details{
    margin-top: 3%;
    padding: 5%;
    margin-left: 5%;
    margin-right: 5%;
    overflow: auto;
    background: rgba(85, 85, 85, 0.65);
     border-radius: 10px;
    
}

.otazka {
    margin-top: 5%;
}
.coverphoto {
    background: linear-gradient(180deg, rgba(206, 206, 206, 0.54) 5.41%, rgba(1, 1, 1, 0) 100%),url('../assets/background-photo.jpg') 50% 50%;
    background-size: cover;
    overflow:auto;
}

.title {
    text-align: center;
    padding: 1vh;
    color: white;
    font-size: 3rem;
    font-weight: 1000;
}

.undertitle {
    text-align: center;
    padding: 1vh;
    margin-left: 10%;
    margin-right: 10%;
    color: white;
    
}

.logo {

  display: block;
  position: relative;
  top: 5%;
  margin-left: auto;
  margin-right: auto;
  text-align: center; 
  height: 20vh; 
  
    
}
.logo img {
    max-width:100%;
    max-height:100%;
    margin-left: auto;
    margin-right: auto;
    
}

.scroll {   
    margin-top: 5rem;
    height: 8rem;
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


</style>