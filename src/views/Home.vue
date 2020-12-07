<template>
    
    <div>   
    
        <EntranceModal></EntranceModal>

        <OurWork></OurWork>
        
        <Kariera></Kariera>
       
        
        <AboutUs></AboutUs>
        
        
    </div>

</template>

<script>
import EntranceModal from '@/components/EntranceModal'
import AboutUs from '../components/aboutUs'
import Kariera from '@/components/Kariera'
import OurWork from '@/components/OurWork'



export default {
    name: 'Home',
    components: {EntranceModal,AboutUs,Kariera,OurWork}
}
</script>

<style scoped>



</style>