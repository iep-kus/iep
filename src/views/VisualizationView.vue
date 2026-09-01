<template>
    <b-container fluid>
        <div class="background">
            <vue-aos animation-class="fadeIn threshold: 1">
                <div class="obsah">
          
                    <div v-if="viz">
                        <!-- Title -->
                        <div data-aos="slide-up" class="title">
                            <b-row>
                                <b-col><h2>{{ viz.title }}</h2></b-col>
                            </b-row>
                        </div>

                        <!-- Description -->
                        <div data-aos="slide-up" data-aos-duration="800" class="text-wrapper">
                            <b-row>
                                <b-col>{{ viz.description }}</b-col>
                            </b-row>
                        </div>

                        <!-- Visualization -->
                        <div
                            class="visualization-container"
                            :class="{ 'graph-visualization': viz.type === 'graf' }"
                        >
                            <template v-if="viz.type === 'mapa'">
                                <div
                                    v-for="mapConfig in mapConfigs"
                                    :key="mapConfig.id"
                                    class="map-wrapper"
                                >
                                    <h3 v-if="mapConfig.title" class="map-title">
                                        {{ mapConfig.title }}
                                    </h3>
                                    <MapComponent
                                        :layers="mapConfig.layers"
                                        :view="mapConfig.view"
                                        :legend="mapConfig.legend"
                                    />
                                </div>
                            </template>
                            <GraphComponent
                                v-else-if="viz.type === 'graf'"
                                v-bind="componentProps"
                            />
                        </div>
                    </div>

                    <!-- Fallback -->
                    <div v-else>
                        <p>Vizualizácia neexistuje alebo nebola nájdená.</p>
                    </div>
                    

                </div>
            </vue-aos>
        </div>
    </b-container>
</template>

<script>
import MapComponent from '../components/MapComponent.vue'
import GraphComponent from '../components/GraphComponent.vue'
import mapsConfig from '../config/index.js'

export default {
  name: 'VisualizationView',
  components: { MapComponent, GraphComponent },
  computed: {
    viz() {
      // Find the visualization config by slug
      return mapsConfig.find(v => v.slug === this.$route.params.slug)
    },
    mapConfigs() {
      if (!this.viz || this.viz.type !== 'mapa') return []

      // New visualizations can contain multiple maps on one page.
      if (Array.isArray(this.viz.maps) && this.viz.maps.length > 0) {
        return this.viz.maps
      }

      // Preserve support for all existing single-map configurations.
      return [{
        id: this.viz.id || this.viz.slug,
        title: null,
        layers: this.viz.layers,
        view: this.viz.view,
        legend: this.viz.legend
      }]
    },
    componentProps() {
      // Pass props dynamically depending on type
      if (!this.viz) return {}

      if (this.viz.type === 'graf') {
        return {
          graphType: this.viz.graphType,
          data: this.viz.data,
          options: this.viz.options
        }
      }
      return {}
    }
  }
}
</script>

<style scoped>
.background {
  background-color: white;
}

.obsah {
  padding: 5%;
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

.visualization-container {
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 2em;
}

.graph-visualization {
  height: 600px;
}

.map-wrapper {
  margin-bottom: 4em;
}

.map-wrapper:last-child {
  margin-bottom: 0;
}

.map-title {
  color: #595959;
  font-family: 'chivo-bold';
  margin-bottom: 0;
}

@media only screen and (max-width: 768px){
  .text-wrapper {
    padding-left: 5%;
    padding-right: 5%;
  }
  .graph-visualization {
    height: 400px;
  }
}
</style>
