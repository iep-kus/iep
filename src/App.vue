<template>
  <!--<Kalkulacka/> -->
  <div id="app">
    <div class="navigationbar">
      <navbar></navbar>
    </div>
    <div class="obsah"><router-view/></div>
    <div>
      <AppFooter></AppFooter>
    </div>
    
  </div>
</template>

<script>
import navbar from './components/navbar'
import AppFooter from './components/AppFooter'
import Kalkulacka from './views/Kalkulacka.vue';
export default {
  name: 'App',
  components: {
    //Kalkulacka, 
    navbar,AppFooter
  },
  
}

</script>
<!--Tuto sa definuju fonty a farby pre celu aplikaciu. Farba sa zoberie zo suboru "custom" v priecinku "styles" -->
<style lang="scss">
@import "./styles/custom.scss";
  
@font-face {
  font-family: 'chivo';
  src: url('./assets/fonts/Chivo/Chivo-Regular.ttf');
}

@font-face {
  font-family: 'chivo-light';
  src: url('./assets/fonts/Chivo/Chivo-Light.ttf');
}
 
 @font-face {
  font-family: 'chivo-bold';
  src: url('./assets/fonts/Chivo/Chivo-Bold.ttf');
}
 
 @font-face {
  font-family: 'roboto';
  src: url('./assets/fonts/Roboto/Roboto-Regular.ttf');
}
 
#app {
  font-family: 'chivo';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: rgba(71, 71, 71, 1);
  position: relative;
}

.navigationbar {
  position: sticky;
  top: 0;
  z-index: 100;
}

.obsah {
  width: 100%;
}




</style>
