<template>
    
    <div id="kalkulacka_grafy">
       
        
        <div v-if="!path_vypocitat" class="section"><VysledokFromLink></VysledokFromLink></div>

        <div v-if="path_vypocitat" class="section"><VysledokForm></VysledokForm></div>
        
        <div v-if="path_vypocitat" class="section"><CalculationForm_graf></CalculationForm_graf></div>
        

    </div>

</template>

<script>
import VysledokForm from '@/components/VysledokForm'
import CalculationForm_graf from '@/components/CalculationForm_graf'
import VysledokFromLink from '@/components/VysledokFromLink'


export default {
    name: 'Kalkulacka_grafy',
    components: {CalculationForm_graf,VysledokForm,VysledokFromLink},
    
    computed: {
        path_vypocitat: {
            get() {
                return this.$store.state.path_vypocitat
            },
        },
    },
    


}
</script>

<style scoped>
#kalkulacka {
    width: 100%;
}


.section {
    position:relative;
}


.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}



</style>