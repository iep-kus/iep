<template>
 
    <div id="metodology">
        <div id="container">
            <a href="#div-id" v-smooth-scroll="{ duration: 1000, offset: -50, container: '#container', updateHistory: false }">Anchor</a>
            <div id="div-id"></div>
        </div>
        <vue-scroll-snap>
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
        
        </vue-scroll-snap>
    </div>

</template>

<script>
import VueScrollSnap from "vue-scroll-snap";


export default {
    name: 'Metodologia',
    components: {VueScrollSnap},
}
</script>

<style scoped>


  .item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    min-height: 120vh;
    
  }

  .scroll-snap-container {
    height: 120vh;
    width: 100%;
  }

  .farba{
      background-color: chartreuse;
      width: 100%;
      height: 200vh;
  }

  .farba2{
      background-color: coral;
       width: 100%;
      height: 120vh;
  }

</style>