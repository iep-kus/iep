<template slot="img">
    
    <div class="coverphoto">
        <div class="logo">
          <img :src='require(`@/assets/iep_logo_transp_stvorec.png`)' />
        </div>
            
        <div class="title">
           Kalkulačka uhlíkovej stopy
        </div>
            
        <div class="undertitle">
            <h4>Vypočítaj si tvoj vlastný príspevok ku zmene klímy</h4>
        </div>
        <div >
            <router-link to="/Kalkulacka">
                <b-button class="zacat" >
                    <span>Začať</span>
                </b-button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EntranceModal',
}
</script>

<style lang="scss" scoped>

.coverphoto {
    background: linear-gradient(180deg, rgba(206, 206, 206, 0.54) 5.41%, rgba(1, 1, 1, 0) 100%),url('../assets/background-photo.jpg') 50% 50%;
    background-size: cover;
    height: 35rem;
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
    color: white;
    font-size: 2rem;
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
    background: #FF6600;
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