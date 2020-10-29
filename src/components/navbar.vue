    
<template>
  <div id="app">   
    

    <b-navbar
      toggleable="lg"
      :sticky="true"
      class="nav-bar"
    >
      <b-navbar-brand>
        <router-link to='/'>
          <img
              class="nav-bar__logo"
              :src='require(`@/assets/iep-logo_var2.png`)'
          />
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
      
      <b-collapse id="nav-collapse" is-nav>
        
        
        <b-navbar-nav id="nav-collapse" class="ml-auto">
          <div class="nav-link-wrapper">
            <router-link to="/">
                domov
            </router-link>
          </div>
          <div class="nav-link-wrapper">
            <router-link to="/Kalkulacka">
                kalkulačka
            </router-link>
          </div>
          <div class="nav-link-wrapper">
           <router-link to="/Metodologia">
                dokumenty
            </router-link>
          </div>
          <div class="nav-link-wrapper">
            <router-link to="/Kontakt">
                kontakt
            </router-link>
          </div>
          
          
        
        </b-navbar-nav>
      
      </b-collapse>
      
    </b-navbar>


        

   
  </div>
</template>


<script>
import { BNavbar } from 'bootstrap-vue';


export default {


 
}

</script>

<style scoped>



  .nav-bar {
    
    background-color: white;
    padding: 1.5%;
    position: sticky;
    top: 0;
    border: 1px solid rgba(255, 255, 255, 0.36);
    box-sizing: border-box;
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.25);
    z-index: 100;
  }


 
.nav-bar__item {
  color: #8a8a8a;
}


.nav-bar__button-left {
  margin-left: auto;
  margin-right: 0.5rem;
  display: none;
}
.nav-bar__button-right {
  margin-left: 0.5rem;
}
.nav-bar__logo {
  height: 1rem;
}
/* TODO: size? */
@media (max-width: 996px) {
  .nav-bar__right-content {
    flex-direction: row-reverse;
    flex-grow: unset;
  }
  .nav-bar__button-left {
    display: unset;
  }
  .nav-bar__button-right {
    display: none;
  }
}

.nav-link-wrapper {
    height: 1.5rem;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.5s;
    margin-right: 2vh;
  }
.nav-link-wrapper a {
    color: #8a8a8a;
    text-decoration: none;
    transition: color 0.5s;
  }
.nav-link-wrapper:hover {
    border-bottom: 1px solid black;
    color: black;
  }



</style>