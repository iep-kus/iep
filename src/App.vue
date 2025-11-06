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

.info.legend {
  background: white;
  padding: 10px;
  line-height: 1.5;
  font-family: 'chivo';
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  color: #595959;
}

.info.legend h4 {
  margin-bottom: 8px;
  font-size: 16px;
  font-family: 'chivo';
  font-weight: bold;
}


</style>
