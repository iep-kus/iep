<template>    
    <b-container fluid >
        <div class="background">  
            <vue-aos animation-class="fadeIn threshold: 1">
                <div class="obsah">
                    <div data-aos="slide-up" data-aos-duration="800">                        
                        <b-row align-v="center">
                            <b-col>
                               <div id="map" style="height: 600px; margin-top: 40px;"></div>
                            </b-col>    
                        </b-row>
                    </div>    
                </div>
            </vue-aos>
        </div>
    </b-container>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.pattern'

console.log('StripePattern available?', L.StripePattern)

export default {
    name: 'MapComponent',
    props: {
        layers: { type: Array, required: true },
        legend: { type: Object, default: null },
        view: { type: Object, required: true }
    },
    mounted() {
        const map = L.map('map').setView(this.view.center, this.view.zoom)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map)

        // Optional stripe pattern
        let stripePattern = null
        if (typeof this.view.createStripePattern === 'function') {
            stripePattern = this.view.createStripePattern()
            stripePattern.addTo(map)
        }

        // Add layers
        this.layers.forEach(layerConfig => {
            fetch(layerConfig.path)
                .then(res => res.json())
                .then(data => {
                    L.geoJSON(data, {
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
                                layer.bindPopup(layerConfig.popup(feature))
                            }
                        },
                        interactive: layerConfig.interactive !== false
                    }).addTo(map)
                })
                .catch(err => {
                    console.error('Failed to load GeoJSON:', err)
                })
        })

        // Fit bounds if specified
        if (this.view.fitTo) {
            fetch(this.view.fitTo)
                .then(res => res.json())
                .then(data => {
                    const boundsLayer = L.geoJSON(data)
                    map.fitBounds(boundsLayer.getBounds())
                })
        }

        // Render legend if provided
        if (this.legend && typeof this.legend.render === 'function') {
            const legendControl = L.control({ position: this.legend.position || 'bottomright' })
            legendControl.onAdd = () => this.legend.render(map)
            legendControl.addTo(map)
        }

    }
}

</script>

<style>

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.background {
    background-color:white;
}

.obsah {
    padding: 5%;
}

</style>