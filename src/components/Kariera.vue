<template>
    
    <b-container fluid >
        <div class="background">  
            <vue-aos animation-class="fadeIn threshold: 1">
                <div class="obsah">
                    <div data-aos="slide-up" class="title">   
                        <b-row align-v="center">
                            <b-col><h2>Kariéra</h2></b-col>    
                        </b-row>
                    </div> 
                    <div data-aos="slide-up" data-aos-duration="800" class="text-wrapper">
                        <b-row align-v="center">
                            <b-col><p>Miznú nám lesy? Ako na nízkouhlíkové Slovensko? O koľko žijú ľudia kratšie kvôli zlej kvalite životného prostredia a aké to má ekonomické dôsledky? Ako by malo fungovať zálohovanie PET fliaš a plechoviek? Oplatí sa elektromobil?</p></b-col>    
                        </b-row>
                        <b-row align-v="center">
                            <b-col><p>Momentálne nemáme voľné žiadne pozície ale ak ťa naša práca zaujala, pošli svoje CV (motivačný list dobrovoľný) na <a href = "mailto:martin.halus@enviro.gov.sk">martin.halus@enviro.gov.sk</a> a pri vhodnej príležitosti ťa budeme kontaktovať.</p></b-col>    
                        </b-row>

                        <b-row align-v="center">
                            <b-col></b-col>    
                        </b-row>
                    </div>    
                </div>
            </vue-aos>
        </div>

    </b-container>
</template>

<script>
import VueAos from 'vue-aos'
export default {
    name: 'Kariera',
    components: {VueAos},
}
</script>

<style scoped>

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}


.background {
    background-color:#8CAE98;
}

.obsah {
    padding: 5%;
}

.title {
    color: white;
    font-family: 'montserrat-bold';
    margin-bottom: 3%;
}

.text-wrapper {
    color: white;
}

</style>