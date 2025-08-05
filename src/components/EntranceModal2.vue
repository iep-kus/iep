<template>

    <div class="coverphoto_2">
        <div class="logo_2">
            <i class="fas fa-charging-station"></i>
        </div>
            
        <div class="title">
            <h1> Porovnanie áut na alternatívny a konvenčný pohon</h1>
        </div>
            
        <div class="undertitle">
            <h4>Porovnaj si investičné a prevádzkové náklady áut na alternatívny a konvenčný pohon</h4>
        </div>
        <div >
            <a href="https://minzp-iep.shinyapps.io/auta/">
                <b-button class="zacat" >
                    <span>Začať</span>
                </b-button>
            </a>
        </div>
    </div>
        
</template>

<script>

export default {
    name: 'EntranceModal2',
}
</script>

<style lang="scss" scoped>



.coverphoto_2 {
    background: linear-gradient(180deg, rgba(206, 206, 206, 0.54) 5.41%, rgba(1, 1, 1, 0) 100%),url('../assets/background-auto-kalkulacka.jpg') 50% 50%;
    background-size: cover;
    overflow: auto;
}

.title {
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
    padding: 1vh;
    color: white;
    font-family: 'chivo-bold';
}

@media only screen and (max-width: 968px){
  .title {
    text-align: center;
    margin-left: 0%;
    margin-right: 0%;
    padding: 1vh;
    color: white;
    font-family: 'chivo-bold';
    }
}

.undertitle {
    text-align: center;
    padding: 1vh;
    color: white;
    font-size: 2rem;
    margin-left: 5%;
    margin-right: 5%;
}



.logo_2 {

  display: block;
  position: relative;
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  text-align: center; 
  font-size: 6rem; 
  color: #FB8622 ;
  
  
    
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
    margin-bottom: 15rem;

    
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