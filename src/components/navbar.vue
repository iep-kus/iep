    
<template>
  <div id="app">   
    

    <b-navbar
      toggleable="lg"
      :sticky="true"
      class="nav-bar"
      :class="{ 'nav-bar--hidden': !showNavbar }"
    >
      <b-navbar-brand>
        <router-link to='/'>
          <img
              class="nav-bar__logo"
              :src='require(`@/assets/iep3_sk_or.png`)'
              style="width: 300px; height: auto;"
          />
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
      
      <b-collapse id="nav-collapse" is-nav>
        
        
        <b-navbar-nav id="nav-collapse" class="ml-auto">
          <div class="nav-link-wrapper">
            <router-link to="/Domov">
                domov
            </router-link>
          </div>
          <div class="nav-link-wrapper">
            <router-link to="/Domov#publikacie">
                publikácie
            </router-link>
          </div>
          <div class="nav-link-wrapper">
           <router-link to="/Domov#kariera">
                kariéra
            </router-link>
          </div>
          <div class="nav-link-wrapper">
            <router-link to="/Domov#onas">
                o nás
            </router-link>
          </div>
          
          
        
        </b-navbar-nav>
      
      </b-collapse>
      
      <div class="nav-link-wrapper_2">
        <a href="https://www.facebook.com/iep.mzp">
            <i class="fab fa-facebook-f"></i>
        </a>
      </div>

      <div class="nav-link-wrapper_2">
        <a href="https://www.instagram.com/iep_sk/?hl=sk">
            <i class="fab fa-instagram"></i>
        </a>
      </div>
      
    </b-navbar>


        

   
  </div>
</template>


<script>
import { BNavbar } from 'bootstrap-vue';


export default {

  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
  onScroll () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  
  if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
    return
  }
  this.showNavbar = currentScrollPosition < this.lastScrollPosition
  this.lastScrollPosition = currentScrollPosition
  }
}
 
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
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
}

@media only screen and (max-width: 768px){
  .nav-bar.nav-bar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
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
  height: 1.2rem;
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
  .nav-bar__logo {
  height: 0.9rem;
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
    border-bottom: 1px solid rgba(71, 71, 71, 1);
  }

.nav-link-wrapper a:hover {
    color: rgba(71, 71, 71, 1);
    text-decoration: none;
    transition: color 0.5s;
  }


.nav-link-wrapper_2 {
    height: 1.5rem;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.5s;
    margin-right: 2vh;
    margin-left: 2vh;
    font-size: 1rem;
    
  }
.nav-link-wrapper_2 a {
    color: #8a8a8a;
    text-decoration: none;
    transition: color 0.5s;
  }


.nav-link-wrapper_2 a:hover {
    color:rgba(71, 71, 71, 1);
    text-decoration: none;
    transition: color 0.5s;
  }



</style>