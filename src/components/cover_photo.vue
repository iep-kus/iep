<template>
  <div id="app">   
    
    <div class="coverphoto">
        <div class="logo">
          <b-img src="../assets/iep_logo_var2.png"></b-img> 
        </div>
            
        <div class="title">
            <h1>Kalkulačka uhlíkovej stopy</h1>
        </div>
            
        <div class="undertitle">
            <h2>Vypočítaj si tvoj vlastný príspevok k zmene klímy</h2>
        </div>

        <div>
            <b-button pill >začať</b-button>
        </div>
    </div>


    
  </div>
</template>


<script>

export default {
   
}

</script>

<style scoped>

.coverphoto {
    background: linear-gradient(180deg, rgba(206, 206, 206, 0.54) 5.41%, rgba(1, 1, 1, 0) 100%),url('../assets/background-photo.jpg') 50% 50%;
    background-size: cover;
    height: 75vh;
}

.title {
    text-align: center;
    padding: 30pt;
    color: white;
    font-size: 44pt;
}

.undertitle {
    text-align: center;
    padding: 30pt;
    color: white;
    font-size: 34pt;
}

.logo {
    width: 10%;
    height: auto;
    vertical-align: top;
    
}







</style>