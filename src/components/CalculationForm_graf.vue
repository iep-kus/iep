    
<template>
    
    <div>
    


        <Byvanie_graf></Byvanie_graf>
        
        <Doprava_graf></Doprava_graf>
        
        <Jedlo_graf></Jedlo_graf>

        <Spotreba_graf></Spotreba_graf>

        <Ziv_styl_graf></Ziv_styl_graf>





  
        

    </div>


</template>


<script>
import Byvanie_graf from '@/components/Byvanie_graf'
import Doprava_graf from '@/components/Doprava_graf'
import Jedlo_graf from '@/components/Jedlo_graf'
import Spotreba_graf from '@/components/Spotreba_graf'
import Ziv_styl_graf from '@/components/Ziv_styl_graf'

export default {
    name: 'CalculationForm_graf',
    components: {Byvanie_graf,Doprava_graf,Jedlo_graf,Spotreba_graf,Ziv_styl_graf},
}


</script>

<style scoped>





</style>