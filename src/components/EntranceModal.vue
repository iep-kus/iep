<template>
    
    <div class="coverphoto">
        <div class="logo">
          <img :src='require(`@/assets/iep_logo_transp_stvorec.png`)' />
        </div>
            
        <div class="title">
            Kalkulačka uhlíkovej stopy
        </div>
            
        <div class="undertitle">
            Vypočítaj si tvoj vlastný príspevok ku zmene klímy
        </div>

        <div >
            <button class="zacat" type="button">Začať!</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'EntranceModal',
}
</script>

<style scoped>

.coverphoto {
    background: linear-gradient(180deg, rgba(206, 206, 206, 0.54) 5.41%, rgba(1, 1, 1, 0) 100%),url('../assets/background-photo.jpg') 50% 50%;
    background-size: cover;
    height: 40rem;
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
    border-radius: 20px; 
    border: 0px solid #000000;
    color: white;

   
}

.zacat {
  transition-duration: 0.4s;
}

.zacat:hover {
  background-color: rgba(172, 69, 0, 1); /* Green */
  color: white;
}

</style>