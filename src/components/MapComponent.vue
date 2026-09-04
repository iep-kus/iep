<template>    
    <vue-aos animation-class="fadeIn threshold: 1">
        <div data-aos="slide-up" data-aos-duration="800">                        
            <b-row align-v="center">
                <b-col>
                    <div
                        ref="mapContainer"
                        style="height: 600px; margin-top: 40px;"
                    ></div>
                </b-col>    
            </b-row>
        </div>    
    </vue-aos>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.pattern'

// Shared between all MapComponent instances on the page. The same geometry
// and boundary files are downloaded and parsed only once.
const jsonCache = new Map()

const loadJson = path => {
    if (!jsonCache.has(path)) {
        const request = fetch(path)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}: ${path}`)
                }
                return response.json()
            })
            .catch(error => {
                jsonCache.delete(path)
                throw error
            })

        jsonCache.set(path, request)
    }

    return jsonCache.get(path)
}

const attachValues = (geoJson, layerConfig, values) => {
    if (!layerConfig.dataPath) return geoJson

    const joinBy = layerConfig.joinBy || 'IDN2'
    const valueProperty = layerConfig.valueProperty || 'value'

    return {
        ...geoJson,
        features: geoJson.features.map(feature => {
            const municipalityId = String(feature.properties?.[joinBy] ?? '')
            const value = Object.prototype.hasOwnProperty.call(values, municipalityId)
                ? values[municipalityId]
                : null

            const joinedProperties = layerConfig.mergeData &&
                value &&
                typeof value === 'object' &&
                !Array.isArray(value)
                ? value
                : { [valueProperty]: value }

            return {
                ...feature,
                properties: {
                    ...feature.properties,
                    ...joinedProperties
                }
            }
        })
    }
}

const loadLayerData = layerConfig => Promise.all([
    loadJson(layerConfig.path),
    layerConfig.dataPath ? loadJson(layerConfig.dataPath) : Promise.resolve(null)
]).then(([geoJson, values]) => attachValues(geoJson, layerConfig, values))

export default {
    name: 'MapComponent',

    props: {
        layers: {
            type: Array,
            required: true
        },

        legend: {
            type: Object,
            default: null
        },

        view: {
            type: Object,
            required: true
        }
    },

    mounted() {
        // namiesto L.map('map') použijeme konkrétny DOM element
        const map = L.map(this.$refs.mapContainer)
            .setView(this.view.center, this.view.zoom)

        L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                attribution: '&copy; OpenStreetMap contributors'
            }
        ).addTo(map)

        // Optional stripe pattern
        let stripePattern = null

        if (typeof this.view.createStripePattern === 'function') {
            stripePattern = this.view.createStripePattern()
            stripePattern.addTo(map)
        }

        // Add layers
        this.layers.forEach(layerConfig => {
            loadLayerData(layerConfig)
                .then(data => {
                    const geoJsonLayer = L.geoJSON(data, {
                        filter: layerConfig.filter,

                        style: feature => {
                            if (layerConfig.styleFactory) {
                                return layerConfig.styleFactory(stripePattern)
                            }

                            if (typeof layerConfig.style === 'function') {
                                return layerConfig.style(feature)
                            }

                            return layerConfig.style
                        },

                        onEachFeature: (feature, layer) => {
                            if (layerConfig.popup) {
                                layer.bindPopup(
                                    layerConfig.popup(feature)
                                )
                            }
                        },

                        interactive:
                            layerConfig.interactive !== false
                    }).addTo(map)

                    if (layerConfig.alwaysOnTop) {
                        geoJsonLayer.bringToFront()
                    }

                    if (layerConfig.alwaysOnBottom) {
                        geoJsonLayer.bringToBack()
                    }
                })
                .catch(err => {
                    console.error(
                        'Failed to load GeoJSON:',
                        err
                    )
                })
        })

        // Fit bounds if specified
        if (this.view.fitTo) {
            loadJson(this.view.fitTo)
                .then(data => {
                    const boundsLayer = L.geoJSON(data)
                    map.fitBounds(boundsLayer.getBounds())
                })
        }

        // Render legend if provided
        if (
            this.legend &&
            typeof this.legend.render === 'function'
        ) {
            const legendControl = L.control({
                position:
                    this.legend.position ||
                    'bottomright'
            })

            legendControl.onAdd = () =>
                this.legend.render(map)

            legendControl.addTo(map)
        }

        // uložíme si mapu, aby sme ju vedeli neskôr odstrániť
        this.map = map
    },

    beforeDestroy() {
        if (this.map) {
            this.map.remove()
        }
    }
}
</script>
