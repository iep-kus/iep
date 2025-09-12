<template>
    
    <div class="coverphoto">
        <div class="logo">
          <img :src='require(`@/assets/co2.png`)'
          style="width: 150px; height: auto;" />
        </div>
            
        <div class="title">
           <h1>Kalkulačka uhlíkovej stopy</h1>
        </div>
            
        <div class="undertitle">
            <h4>Každý z nás svojou aktivitou produkuje uhlíkovú stopu. Jej veľkosť závisí od toho ako žiješ, ako sa stravuješ a ako veľa cestuješ. 
            Táto kalkulačka ju dokáže na základe tvojich odpovedí vypočítať. Tak poďme nato!</h4> 
        </div>

        <transition name="fade">
            <div class="details" v-if="details_kalkulacka">
            
                <div class="otazka-1">
                    <h4>Čo je to uhlíková stopa?</h4>
                </div>
                <div class="odpoved">
                    <p> Uhlíková stopa je množstvo emisií sklenníkových plynov, ktoré vznikajú pri činnosti jednotivca, organizácie alebo výrobe produktu 
                    a je dôležitým nástrojom sledovania vplyvu našich aktivít na životné prostredie. Tieto plyny produkujeme pri väčšine našich aktivít, 
                    napríklad pri spaľovaní fosílnych palív v doprave, spotrebe tepla vyrobeného z uhlia či elektriny, ale aj konzumáciou emisne náročných potravín.
                    Podľa kalkulačky IEP sa individuálna uhlíková stopa skladá z piatich hlavných zložiek – bývanie, doprava, jedlo, spotreba a životný štýl. </p>
                </div>

                <div class="otazka">
                    <h4>Ako sa počíta uhlíková stopa?</h4>
                </div>
                <div class="odpoved">
                    <p>
                    Na výpočet celkovej uhlíkovej stopy konkrétnej aktivity potrebujeme vedieť dve hlavné veličiny a to mieru aktivity 
                    alebo spotreby (𝑄) a jej emisný faktor (𝐸𝐹). Príkladom miery aktvivity môže byť spotreba elektrickej energie v 
                    kilowatthodinách, množstvo spotrebovanej látky v kilogramoch alebo aj počet využitých produktov. Následne k aktivite 
                    priradíme vhodný emisný faktor, ktorý vyjadruje ako emisne náročná je daná aktivita (napr. kg CO2 na kg látky). Ak aktivita 
                    produkuje aj iné sklenníkové plyny, emisie týchto látok sa prevádzajú do ekvivalentov emisií oxidu uhličitého prenásobením s 
                    takzvaným potenciálom pre globálne otepľovanie (𝐺𝑊𝑃 = global warming potential). Emisie skleníkových plynov, ktoré škodia 
                    prostrediu v rôznej miere, tak môžeme pomocou CO2e vzájomne porovnávať. Výsledné emisie pre aktivitu 𝑥 teda 
                    vypočítame pomocou nasledujúceho vzorca:

                    𝐸𝑚𝑖𝑠𝑖𝑒𝑥 = 𝐸𝐹𝑥 × 𝑄 × 𝐺𝑊𝑃𝑥.
                    </p>
                </div>
            </div>
        </transition>
        

        
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
            if(this.details_kalkulacka==true){  
                window.scrollTo(0, 0);
            }
        }
    },
}
</script>

<style lang="scss" scoped>

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s, height .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
}

.otazka {
    margin-top: 5%;
}
.coverphoto {
    background: linear-gradient(180deg, rgba(206, 206, 206, 0.54) 15.41%, rgba(1, 1, 1, 0.1) 100%),url('../assets/background-photo.jpg') 50% 50%;
    background-size: cover;
    overflow:auto;
}

.title {
    text-align: center;
    padding: 1vh;
    color: white;
    font-family: 'chivo-bold';
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
  margin-top: 4%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;  
  margin-bottom: 1rem;
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
    background: #FB8622;
    border-radius: 10px; 
    border: 0px solid #000000;
    color: white;
    transition: all .3s ease-in-out;

    
    span {
      font-family: "Roboto", sans-serif;    
      align-self: center;
      transform: translateX(0px);
      transition: all .1s ease-in-out;
      opacity: 1;
     }

    &:hover {
        background-color: rgba(172, 69, 0, 1); /* Green */
        color: white;
        transform: scale(1.1);
        
        span {
            font-family: "Roboto", sans-serif;    
            transform: translateX(-20px);
            transition: all .1s ease-in-out;
            opacity: 1;
        }
    }
   
}


</style>