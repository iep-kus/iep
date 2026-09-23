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
                                <b-col>
                                    <h2>
                                        <a
                                            v-if="viz.titleUrl"
                                            class="visualization-title-link"
                                            :href="viz.titleUrl"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {{ viz.title }}
                                        </a>
                                        <template v-else>{{ viz.title }}</template>
                                    </h2>
                                </b-col>
                            </b-row>
                        </div>

                        <!-- Description -->
                        <div
                            data-aos="slide-up"
                            data-aos-duration="800"
                            class="text-wrapper"
                            :class="{ 'report-intro': viz.type === 'report' }"
                        >
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
                                        <p v-if="section.label" class="report-section-label">
                                            {{ section.label }}
                                        </p>
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

                                    <template v-else-if="section.type === 'sankey'">
                                        <div class="report-sankey">
                                            <SankeyComponent
                                                :links="section.links"
                                                :columns="section.columns"
                                                :colors="section.colors"
                                            />
                                        </div>
                                    </template>

                                    <template v-else-if="section.type === 'map'">
                                        <MapComponent
                                            :layers="section.layers"
                                            :view="section.view"
                                            :legend="section.legend"
                                        />
                                        <p v-if="section.source" class="source report-section-source">
                                            Zdroj:
                                            <a
                                                :href="section.source.url"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {{ section.source.title }}
                                            </a>
                                        </p>
                                    </template>

                                </section>
                            </div>

                            <div v-if="viz.materialsUrl" class="report-links report-links-simple">
                                <p>
                                    Všetky podklady k štúdii nájdete
                                    <a
                                        :href="viz.materialsUrl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >na stránke analýzy</a>.
                                </p>
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
import SankeyComponent from '../components/SankeyComponent.vue'
import mapsConfig from '../config/index.js'

export default {
  name: 'VisualizationView',
  components: { MapComponent, GraphComponent, SankeyComponent },
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

.report-intro {
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  padding-left: 0;
  padding-right: 0;
  text-align: left;
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
  max-width: 1000px;
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

.report-section-label {
  color: #fb8622;
  font-family: 'chivo-bold';
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  margin: 0 0 0.45rem !important;
  text-transform: uppercase;
}

.report-sankey {
  background: #ffffff;
  border: 1px solid #eeeeea;
  border-radius: 10px;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.06);
  margin-top: 2rem;
  padding: 1.25rem;
}

.visualization-title-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: rgba(89, 89, 89, 0.35);
  text-decoration-thickness: 2px;
  text-underline-offset: 0.18em;
}

.visualization-title-link:hover {
  color: #28758c;
  text-decoration-color: currentColor;
}

.report-section-source {
  margin: 0.75rem auto 0;
  max-width: 1000px;
  text-align: left;
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

.report-links-simple {
  padding: 1.35rem 1.5rem;
}

.report-links-simple p {
  margin: 0;
}

.report-links-simple a,
.report-section-source a {
  color: #28758c;
  text-decoration: underline;
}

@media only screen and (max-width: 768px){
  .text-wrapper {
    padding-left: 5%;
    padding-right: 5%;
    text-align: left;
  }
  .report-intro {
    padding-left: 0;
    padding-right: 0;
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
}
</style>
