<template>
    
    <div id="kalkulacka">
       
    
        <div class="section"><Entrance_kalkulacka></Entrance_kalkulacka></div>
        <div class="section"><ZacinameForm></ZacinameForm></div>
        <div class="section"><CalculationForm></CalculationForm></div>
        <div class="section"><Vypocitat></Vypocitat></div>
        

    </div>

</template>

<script>
import Entrance_kalkulacka from '@/components/Entrance_kalkulacka'
import ZacinameForm from '@/components/ZacinameForm'
import CalculationForm from '@/components/CalculationForm'
import Vypocitat from '@/components/Vypocitat'


export default {
    name: 'Kalkulacka',
    components: {Entrance_kalkulacka,CalculationForm,ZacinameForm,Vypocitat}
}
</script>

<style scoped>
#kalkulacka {
    width: 100%;
}


.section {
    position:relative;
}

</style>