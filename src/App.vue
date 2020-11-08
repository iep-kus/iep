<template>
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

export default {
  name: 'App',
  components: {
    navbar,AppFooter
  },
  
  
}

</script>

<style lang="scss">
@import "./styles/custom.scss";
  
@font-face {
  font-family: 'montserrat';
  src: url('./assets/fonts/Montserrat/Montserrat-Regular.ttf');
}

@font-face {
  font-family: 'montserrat-light';
  src: url('./assets/fonts/Montserrat/Montserrat-Light.ttf');
}
 
 @font-face {
  font-family: 'montserrat-bold';
  src: url('./assets/fonts/Montserrat/Montserrat-Bold.ttf');
}
 
 @font-face {
  font-family: 'roboto';
  src: url('./assets/fonts/Roboto/Roboto-Regular.ttf');
}
 
#app {
  font-family: 'montserrat';
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
