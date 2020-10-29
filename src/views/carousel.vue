<template>
    <div class="carousel-wrapper">
        <div class="carousel">
            <div class="item">
                <div class="farba">
                    <p>Ako sa mas</p>
                </div>
            </div>
            <div class="item">
                <div class="farba2"></div>
            </div>

            <div class="item">
                <div class="farba">
                    <p>Ako sa mas</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow: scroll;
  scroll-snap-type: y mandatory;
}

.carousel > * {
  
  scroll-snap-align: start;
}

 .item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    min-height: 120vh;
    
  }



  .farba{
      background-color: chartreuse;
      width: 100%;
      height: 200vh;
  }

  .farba2{
      background-color: coral;
       width: 100%;
      height: 140vh;
  }
</style>