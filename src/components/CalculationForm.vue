    
<template>
    
    <div>
    

        <vue-scroll-snap>
            <div><Byvanie></Byvanie></div>
            
            <div><Doprava></Doprava></div>
            
            <div><Jedlo></Jedlo></div>

            <div><Spotreba></Spotreba></div>

            <div><Ziv_styl></Ziv_styl></div>
        </vue-scroll-snap>




  
        

    </div>


</template>


<script>
import Byvanie from '@/components/Byvanie'
import Doprava from '@/components/Doprava'
import Jedlo from '@/components/Jedlo'
import Spotreba from '@/components/Spotreba'
import Ziv_styl from '@/components/Ziv_styl'
import VueScrollSnap from "vue-scroll-snap";

export default {
    name: 'CalculationForm',
    components: {Byvanie,Doprava,Jedlo,Spotreba,Ziv_styl,VueScrollSnap},
}


</script>

<style scoped>





</style>
