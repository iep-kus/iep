<template>

    <div class="btn__container">  
        <a class="btn-f">
        <i class="fab fa-facebook"></i>
        <span>zdieľať</span>
    </a>
    </div>
    
    
</template>


<script>

export default {
    name: 'shareButton',
    
}

</script>

<style lang="scss">




.btn__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
 

.btn-f {
    min-width: 110px;
    background-color: #fff;
    padding: 1rem 2rem;
    text-decoration: none;
    color: #286ED6;
    border-radius: 10px;
    transition: all .2s ease-in-out;
   
    i {
      color: #286ED6;
      font-size: 20px;
      padding-right: 10px;
      transition: all .3s ease-in-out;
    }
    span {
      font-family: "Roboto", sans-serif;
      align-self: center;
      transform: translateX(0px);
      transition: all .1s ease-in-out;
      opacity: 1;
     }
   
   &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #286ED6;
    box-shadow: 0px 10px 30px rgba(0,0,0,0.10);
      i {
        transform: translateX(45px);
        padding-right: 2.5rem;
        color: #FFF;
        align-self: center;
        justify-content: center;

      }
      span {
        transform: translateX(45px);
        opacity: 0;
      }
    }
   &:active {
     transform: scale(1);
     box-shadow: 0px 2px 10px rgba(0,0,0,0.10);
   }
}





</style>
