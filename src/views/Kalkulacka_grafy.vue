<template>
    
    <div id="kalkulacka_grafy">
       
    
        <div class="section"><VysledokForm></VysledokForm></div>
        
        <div class="section"><CalculationForm_graf></CalculationForm_graf></div>
        

    </div>

</template>

<script>
import VysledokForm from '@/components/VysledokForm'
import CalculationForm_graf from '@/components/CalculationForm_graf'


export default {
    name: 'Kalkulacka_grafy',
    components: {CalculationForm_graf,VysledokForm}
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