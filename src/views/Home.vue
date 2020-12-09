<template>
    
    <div class="obsah">   
        <div>
            <Carousel></Carousel>
        </div>
        <div id="publikacie">
            <OurWork></OurWork>
        </div>
        <div id="kariera">
            <Kariera></Kariera>
        </div>
        <div id="onas">
            <AboutUs></AboutUs>
        </div>
        
    </div>

</template>

<script>
import Carousel from '@/components/carousel.vue'
import AboutUs from '../components/Onas.vue'
import Kariera from '@/components/Kariera.vue'
import OurWork from '@/components/OurWork.vue'



export default {
    name: 'Home',
    components: {Carousel,AboutUs,Kariera,OurWork}
}
</script>

<style scoped>
.obsah {
    scroll-behavior: smooth;
}


</style>