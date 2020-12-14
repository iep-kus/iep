<template>
    
        
    <div class="coverphoto">
        <div class="logo">
            <img :src='require(`@/assets/iep_logo_transp_stvorec2.png`)' />
        </div>
            
        <div class="title">
            <h1> Inštitút enviromentálnej politiky</h1>
        </div>
            
        <div class="undertitle">
            <h4>Našim poslaním je poskytovať kvalitné a spoľahlivé analýzy a prognózy v oblasti životného prostredia pre slovenskú vládu a verejnosť</h4>
        </div>
        <div >
            <router-link to="/Domov#onas">
                <b-button class="zacat" >
                    <span>O nás</span>
                </b-button>
            </router-link>
        </div>
    </div>
        
</template>

<script>

export default {
    name: 'EntranceModal0',
}
</script>

<style lang="scss" scoped>

.coverphoto {
    background: linear-gradient(180deg, rgba(56, 56, 56, 0.54) 5.41%, rgba(1, 1, 1, 0) 100%), url('../assets/iep_cover.jpg');
    background-position: center center;
    background-size: cover;
    overflow: auto;
}



.title {
    text-align: center;
    padding: 1vh;
    color: white;
    font-family: 'montserrat-bold';
}

.undertitle {
    text-align: center;
    padding: 1vh;
    color: white;
    font-size: 2rem;
    margin-left: 15%;
    margin-right: 15%;
}

@media only screen and (max-width: 968px){
  .undertitle {
    text-align: center;
    padding: 1vh;
    color: white;
    font-size: 2rem;
    margin-left: 5%;
    margin-right: 5%;
    }   
}

.logo {

  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;  
  margin-bottom: 6rem;
  height: 2vh;
  margin-top: 3%;
  opacity: 0.85;
  
    
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