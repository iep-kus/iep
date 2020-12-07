<template>
    
    <div>   
    
        <EntranceModal></EntranceModal>

        <OurWork></OurWork>
        
        <Kariera></Kariera>
       
        
        <AboutUs></AboutUs>
        
        
    </div>

</template>

<script>
import EntranceModal from '@/components/EntranceModal.vue'
import AboutUs from '../components/Onas.vue'
import Kariera from '@/components/Kariera.vue'
import OurWork from '@/components/OurWork.vue'



export default {
    name: 'Home',
    components: {EntranceModal,AboutUs,Kariera,OurWork}
}
</script>

<style scoped>



</style>