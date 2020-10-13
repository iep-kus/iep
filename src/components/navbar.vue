    
<template>
  <div id="app">   
    
    <div class="nav-wrapper">
            
        <div class="left-side">
          <b-img src="../assets/iep_logo_var2.png"></b-img>
        </div>
               
           
        <div class="right-side">
          <div class="nav-link-wrapper">
            <a href="index.html">Domov</a>
          </div>
          
          <div class="nav-link-wrapper">
            <a href="index.html">Kalkulačka</a>
          </div>

          <div class="nav-link-wrapper">
           <a href="metodologia.html">Metodológia</a>
          </div>

          <div class="nav-link-wrapper">
            <a href="kontakt.html">Kontakt</a>
          </div>
        </div>
      </div>
  </div>
</template>


<script>

export default {
 
}

</script>

<style scoped>

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 38px
  }


 .left-side {

    width: 10%;
    height: auto;

  }
 .right-side {
     display: flex;
    }
 
 .nav-wrapper> .right-side > div {
    margin-left: 40px;
    font-size: 0.9em;
  
  }

.nav-link-wrapper {
    height: 22px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.5s;
  }

.nav-link-wrapper a {
    color: #8a8a8a;
    text-decoration: none;
    transition: color 0.5s;

  }

.nav-link-wrapper:hover {
    border-bottom: 1px solid black;
  }




</style>