<template>
    
    <div id="kalkulacka">
       
    
        <div class="section"><EntranceModal></EntranceModal></div>
        <div class="section"><ZacinameForm></ZacinameForm></div>
        <div class="section"><CalculationForm></CalculationForm></div>
        <div class="section"><VysledokForm></VysledokForm></div>

    </div>

</template>

<script>
import EntranceModal from '@/components/EntranceModal'
import ZacinameForm from '@/components/ZacinameForm'
import CalculationForm from '@/components/CalculationForm'
import VysledokForm from '@/components/VysledokForm'

export default {
    name: 'Kalkulacka',
    components: {EntranceModal,CalculationForm,ZacinameForm,VysledokForm}
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