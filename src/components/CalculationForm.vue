    
<template>
    
    <div>
    


        <Byvanie></Byvanie>
        
        <Doprava></Doprava>
        
        <Jedlo></Jedlo>

        <Spotreba></Spotreba>

        <Ziv_styl></Ziv_styl>





  
        

    </div>


</template>


<script>
import Byvanie from '@/components/Byvanie'
import Doprava from '@/components/Doprava'
import Jedlo from '@/components/Jedlo'
import Spotreba from '@/components/Spotreba'
import Ziv_styl from '@/components/Ziv_styl'

export default {
    name: 'CalculationForm',
    components: {Byvanie,Doprava,Jedlo,Spotreba,Ziv_styl},
}


</script>

<style scoped>





</style>
