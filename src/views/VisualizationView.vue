<template>
    <b-container fluid>
        <div class="background">
            <vue-aos animation-class="fadeIn threshold: 1">
                <div class="obsah">
          
                    <div v-if="viz">
                        <!-- Title -->
                        <div data-aos="slide-up" class="title">
                            <b-row>
                                <b-col v-if="viz.kicker" cols="12">
                                    <p class="report-kicker">{{ viz.kicker }}</p>
                                </b-col>
                                <b-col><h2>{{ viz.title }}</h2></b-col>
                            </b-row>
                        </div>

                        <!-- Description -->
                        <div data-aos="slide-up" data-aos-duration="800" class="text-wrapper">
                            <b-row>
                                <b-col>{{ viz.description }}</b-col>
                            </b-row>
                        </div>

                        <!-- Report -->
                        <template v-if="viz.type === 'report'">
                            <div
                                v-if="viz.highlights && viz.highlights.length"
                                class="report-highlights"
                            >
                                <div
                                    v-for="highlight in viz.highlights"
                                    :key="highlight.value + highlight.label"
                                    class="report-highlight"
                                >
                                    <strong>{{ highlight.value }}</strong>
                                    <span>{{ highlight.label }}</span>
                                </div>
                            </div>

                            <div class="report-sections">
                                <section
                                    v-for="section in viz.sections"
                                    :key="section.id"
                                    class="report-section"
                                    :class="`report-section-${section.type}`"
                                >
                                    <div class="report-section-heading">
                                        <h3>{{ section.title }}</h3>
                                        <p v-if="section.description">
                                            {{ section.description }}
                                        </p>
                                    </div>

                                    <template v-if="section.type === 'text'">
                                        <div class="report-copy">
                                            <p
                                                v-for="(paragraph, index) in section.paragraphs"
                                                :key="index"
                                            >
                                                {{ paragraph }}
                                            </p>
                                        </div>
                                    </template>

                                    <template v-else-if="section.type === 'graph'">
                                        <div class="report-chart">
                                            <GraphComponent
                                                :graph-type="section.graphType"
                                                :data="section.data"
                                                :options="section.options"
                                            />
                                        </div>
                                    </template>

                                    <template v-else-if="section.type === 'map'">
                                        <MapComponent
                                            :layers="section.layers"
                                            :view="section.view"
                                            :legend="section.legend"
                                        />
                                    </template>

                                    <p v-if="section.source" class="source">
                                        Zdroj:
                                        <a
                                            :href="section.source.url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {{ section.source.title }}
                                        </a>
                                    </p>
                                </section>
                            </div>

                            <div v-if="viz.links && viz.links.length" class="report-links">
                                <h3>Celá analýza a podklady</h3>
                                <p>
                                    V reporte vyberáme hlavné zistenia. Podrobné predpoklady,
                                    metodiku a výsledky nájdete v pôvodnej publikácii.
                                </p>
                                <div class="report-link-list">
                                    <a
                                        v-for="link in viz.links"
                                        :key="link.url"
                                        :href="link.url"
                                        :class="{ primary: link.primary }"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {{ link.title }}
                                    </a>
                                </div>
                            </div>
                        </template>

                        <!-- Visualization -->
                        <div
                            v-else
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
                                    <p v-if="mapConfig.source || viz.source" class="source">
                                        Zdroj:
                                        <a
                                            :href="(mapConfig.source || viz.source).url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {{ (mapConfig.source || viz.source).title }}
                                        </a>
                                    </p>
                                </div>
                            </template>
                            <template v-else-if="viz.type === 'graf'">
                                <GraphComponent v-bind="componentProps" />
                                <p v-if="viz.source" class="source">
                                    Zdroj:
                                    <a
                                        :href="viz.source.url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {{ viz.source.title }}
                                    </a>
                                </p>
                            </template>
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
        legend: this.viz.legend,
        source: this.viz.source
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

.report-kicker {
  color: #fb8622;
  font-family: 'chivo-bold';
  margin: 0 0 0.5rem;
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

.source {
  color: #595959;
  font-size: 0.9rem;
  margin: 1rem 0 0;
}

.source a {
  color: #28758c;
  text-decoration: underline;
}

.report-highlights {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin: 3rem auto 5rem;
  max-width: 1000px;
}

.report-highlight {
  background: #f7f7f5;
  border-top: 4px solid #fb8622;
  border-radius: 0 0 8px 8px;
  color: #595959;
  display: flex;
  flex-direction: column;
  min-height: 170px;
  padding: 1.5rem;
}

.report-highlight strong {
  color: #fb8622;
  font-family: 'chivo-bold';
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1rem;
}

.report-highlight span {
  line-height: 1.5;
}

.report-sections {
  margin: 0 auto;
  max-width: 1100px;
}

.report-section {
  color: #595959;
  margin-bottom: 5rem;
}

.report-section-heading,
.report-copy {
  margin-left: auto;
  margin-right: auto;
  max-width: 860px;
}

.report-section-heading h3,
.report-links h3 {
  color: #595959;
  font-family: 'chivo-bold';
  margin-bottom: 1rem;
}

.report-section-heading p,
.report-copy p,
.report-links p {
  line-height: 1.75;
  margin-bottom: 1rem;
  text-align: left;
}

.report-chart {
  background: #ffffff;
  border: 1px solid #eeeeea;
  border-radius: 10px;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.06);
  height: 480px;
  margin-top: 2rem;
  padding: 1.5rem;
}

.report-links {
  background: #fff4eb;
  border-left: 5px solid #fb8622;
  border-radius: 8px;
  color: #595959;
  margin: 1rem auto 3rem;
  max-width: 1000px;
  padding: 2rem;
}

.report-link-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.report-link-list a {
  border: 1px solid #28758c;
  border-radius: 5px;
  color: #28758c;
  font-family: 'chivo-bold';
  padding: 0.7rem 1rem;
  text-decoration: none;
}

.report-link-list a.primary {
  background: #28758c;
  color: #ffffff;
}

.report-link-list a:hover {
  opacity: 0.85;
  text-decoration: none;
}

@media only screen and (max-width: 768px){
  .text-wrapper {
    padding-left: 5%;
    padding-right: 5%;
    text-align: left;
  }
  .graph-visualization {
    height: 400px;
  }
  .report-highlights {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }
  .report-highlight {
    min-height: auto;
  }
  .report-section {
    margin-bottom: 3.5rem;
  }
  .report-chart {
    height: 420px;
    padding: 0.75rem;
  }
  .report-links {
    padding: 1.5rem;
  }
  .report-link-list {
    flex-direction: column;
  }
  .report-link-list a {
    text-align: center;
  }
}
</style>
