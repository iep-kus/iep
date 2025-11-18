<template>
    <b-container fluid>
        <div class="background">
            <vue-aos animation-class="fadeIn threshold: 1">
                <div id="map_list" class="obsah">
                    <b-row class="title">
                        <b-col class="text-left">
                            <h1>Prehľad máp</h1>
                        </b-col>
                    </b-row>
                    <div data-aos="slide-up" data-aos-duration="800">
                        <b-row v-for="map in maps" :key="map.slug" class="map-entry">
                            <b-col>
                                <router-link :to="`/mapy/${map.slug}`">
                                    <h2 class="map-title">{{ map.title }}</h2>
                                </router-link>
                                <p class="map-description">{{ map.description.slice(0,400) }}...</p>
                            </b-col>
                        </b-row>
                    </div>
                    <b-row v-if="maps.length === 0">
                        <b-col>
                            <p>Žiadne mapy neboli nájdené.</p>
                        </b-col>
                    </b-row>
                </div>
            </vue-aos>
        </div>        
    </b-container>
</template>



<script>
import VueAos from 'vue-aos'
import mapsConfig from '../config/index.js'

export default {
    name: 'MapList',
    components: {VueAos},
    data() {
        return {
            maps: mapsConfig
        }
    }
}
</script>

<style scoped>

.background {
    background-color:white;
}

.obsah {
    padding: 10%;
    height: 90vh;
}

.title {
    margin-bottom: 5%;
    font-family: "Chivo";
}

.container-fluid {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
}

.map-entry {
    border-bottom: 2px solid #BFBFBF;
    padding-bottom: 1em;
    margin-bottom: 2em;
    display: flex;
    align-items: center;
}

.map-title {
    font-size: 20px;
    margin: 0;
    text-align: left;
}

.map-title:hover {
    text-decoration: underline;
    cursor: pointer;
}

.map-description {
    margin-top: 0.5em;
    text-align: left;
    max-width: 100%;
}

</style>
