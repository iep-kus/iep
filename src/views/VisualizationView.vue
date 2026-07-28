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
                        <div class="visualization-container">
                            <component
                                :is="componentType"
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
    componentType() {
      // Choose which component to render
      return this.viz?.type === 'mapa' ? 'MapComponent' : 'GraphComponent'
    },
    componentProps() {
      // Pass props dynamically depending on type
      if (!this.viz) return {}

      if (this.viz.type === 'mapa') {
        return {
          layers: this.viz.layers,
          view: this.viz.view,
          legend: this.viz.legend
        }
      } else if (this.viz.type === 'graf') {
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
  height: 600px; /* For Leaflet map or chart */
}

@media only screen and (max-width: 768px){
  .text-wrapper {
    padding-left: 5%;
    padding-right: 5%;
  }
  .visualization-container {
    height: 400px;
  }
}
</style>
