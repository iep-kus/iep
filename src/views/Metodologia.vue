<template>
    <b-container fluid>
        <div id="metodology" class="obsah">
           
            <b-row class="title">
                <b-col class="text-left">
                    <h1>Metodológia</h1>
                </b-col>
            </b-row>
            <b-row>
                <div class="item__container">
                    <div class="item">    
                        <b-col cols="12">
                            <a href="/metodika.pdf" download="Kalkulacka_uhlikovej_stopy_metodika" style="text-decoration: none;">
                                <i class="far fa-edit"></i>
                                <span><h4>Kalkulačka uhlíkovej stopy</h4></span>
                            </a>
                        </b-col>
                    </div>
                </div>
            </b-row>
            
            
        </div>
    </b-container>

</template>

<script>


export default {
    name: 'Metodologia',
    components: {},
    data () {
        return {
        publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style lang="scss" scoped>


.obsah {
    padding: 10%;
    height: 90vh;
}


.title {
    margin-bottom: 5%;
    border-bottom: 1px solid gray;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.item__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
    min-width: 110px;
    background-color: #fff;
    padding: 1rem 2rem;
    border-radius: 10px;
    transition: all .2s ease-in-out;
   
    i {
      color:rgba(71, 71, 71, 1);
      font-size: 32px;
      padding-right: 10px;
      transition: all .3s ease-in-out;
      margin-bottom:1rem;
    }
    span {
      font-family: "Roboto", sans-serif;    
      align-self: center;
      transform: translateX(0px);
      transition: all .3s ease-in-out;
      color:rgba(71, 71, 71, 1);
      opacity: 1;
     }
   
   &:hover {
    
    cursor: pointer;
    box-shadow: 0px 10px 30px rgba(0,0,0,0.10);
      i {
        transform: scale(1.1);
        color:#FF6600;
        align-self: center;
        justify-content: center;

      }
      span {
        transform: translateX(45px);
        opacity: 1;
        color:#FF6600;
      }
    }
   &:active {
     transform: scale(1);
     box-shadow: 0px 2px 10px rgba(0,0,0,0.10);
   }
}

</style>