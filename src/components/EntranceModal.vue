<template>
    
        
    <div class="coverphoto">
        <div class="logo">
        <img :src='require(`@/assets/co2.png`)'
        style="width: 150px; height: auto;" />
        </div>
            
        <div class="title">
            <h1> Kalkulačka uhlíkovej stopy</h1>
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
    overflow: auto;
}



.title {
    text-align: center;
    padding: 1vh;
    color: white;
    font-family: 'chivo-bold';
}

.undertitle {
    text-align: center;
    padding: 1vh;
    color: white;
    font-size: 2rem;
    margin-left: 5%;
    margin-right: 5%;
}

.logo {

  display: block;
  position: relative;
  margin-top:3%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;  
  margin-bottom: 1rem;
  
    
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
    background: #FB8622;
    border-radius: 10px; 
    border: 0px solid #000000;
    color: white;
    transition: all .3s ease-in-out;
    margin-bottom: 20rem;

    
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