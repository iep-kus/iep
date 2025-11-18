<template>    
    <b-container fluid >
        <div class="background">  
            <vue-aos animation-class="fadeIn threshold: 1">
                <div class="obsah">
                    <div v-if="map">
                        <div data-aos="slide-up" class="title">   
                            <b-row align-v="">
                                <b-col><h2>{{ map.title }}</h2></b-col>    
                            </b-row>
                        </div> 
                        <div data-aos="slide-up" data-aos-duration="800" class="text-wrapper">
                            <b-row>
                                <b-col>{{ map.description }}</b-col>    
                            </b-row>
                        </div>
                        <div class="map-container">
                            <MapComponent
                                :layers="map.layers"
                                :view="map.view"
                                :legend="map.legend"
                            />
                        </div>
                    </div> 
                
                    <div v-else>
                        <p>Mapa neexistuje alebo nebola nájdená.</p>
                    </div>       
                </div>
            </vue-aos>
        </div>

    </b-container>
</template>

<script>
import mapsConfig from '../config/index.js'
import MapComponent from '../components/MapComponent.vue'

export default {
    name: 'MapView',
    components: { MapComponent },
    computed: {
        map() {
            return mapsConfig.find(m => m.slug === this.$route.params.slug)
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 24px;
    margin-bottom: 0.5em;
}
p {
    max-width: 700px;
    margin-bottom: 1.5em;
}

.title {
    color: #595959;
    font-family: 'chivo-bold';
    margin-bottom: 3%;
}

.text-wrapper {
    color: #595959;
    margin-left: 0;
    margin-right: 0;
    padding-left: 10%;
    padding-right: 10%;
    text-align: justify;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.background {
    background-color:white;
}

.obsah {
    padding: 5%;
}

.map-container {
  padding-left: 10%;
  padding-right: 10%;
}


@media only screen and (max-width: 768px){
  .text-wrapper {
    color: #595959;
    margin-left: 0%;
    margin-right: 0%;
  }
}
</style>
