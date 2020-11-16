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

        <div class="scroll">
            <img :src='require(`@/assets/scroll-down.png`)' />
        </div>
        
    </div>

</template>

<script>
export default {
    name: 'EntranceModal',
}
</script>

<style scoped>

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
    margin-top: 5%;
    height: 8rem;
}


</style>