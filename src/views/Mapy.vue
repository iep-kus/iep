<template>
    
    <b-container fluid >
        <div class="background">  
            <vue-aos animation-class="fadeIn threshold: 1">
                <div class="obsah">
                    <div data-aos="slide-up" class="title">   
                        <b-row align-v="center">
                            <b-col><h2>Mapa 1: Stupne ohrozenia obcí dopravnou chudobou</h2></b-col>    
                        </b-row>
                    </div> 
                    <div data-aos="slide-up" data-aos-duration="800" class="text-wrapper">
                        <b-row align-v="center">
                            <b-col><p> Dopravná chudoba je fenomén, kedy si jednotlivci alebo domácnosti 
                                        nemôžu dovoliť dopravu alebo majú obmedzený prístup k verejnej či súkromnej doprave.
                                        To im sťažuje cestovanie za prácou, vzdelaním či zdravotnou starostlivosťou. Dôsledkom 
                                        môže byť obmedzená účasť na spoločenskom živote a postupné vylúčenie zo spoločnosti.</p></b-col>    
                        </b-row>

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

import VueAos from 'vue-aos'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.pattern'


export default {
    name: 'Mapy',
    components: {VueAos},
    mounted() {
        const map = L.map('map').setView([48.669, 19.699], 8) // centrovane na Slovensko

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map)

        const stripePattern = new L.StripePattern({
            weight: 2,
            spaceWeight: 2,
            color: '#595959',
            spaceColor: 'white',
            angle: 135
        });
        stripePattern.addTo(map);

        function getColor(value) {
            if (value == 1) return '#FEFFFF';
            else if (value == null) return '#FFFFFF';
            else if (value == 2) return '#FEF0E3';
            else if (value == 3) return '#FEE1C8';
            else if (value == 4) return '#FED2AC';
            else if (value == 5) return '#FDC290';
            else if (value == 6) return '#FCB375';
            else if (value == 7) return '#FCA459';
            else if (value == 8) return '#FC953E';
            else if (value == 9) return '#FB8622';
            else return '#FA7502';
        }
        
        // Vrstvy su usporiadane podla toho, ktoru chceme mat navrchu a ktoru naspodu. Prva ide spodna vrstva, posledna ide vrchna.
        fetch('/mapy/obce_vysledky_small.geojson')
            .then(res => res.json())
            .then(data => {
                const vysledkyLayer = L.geoJSON(data, {
                    style: feature => {
                        const value = feature.properties.vysledky_CI_DCH_percentile;
                        return {
                            fillColor: getColor(value),
                            color: '#595959',
                            weight: 0.2,
                            fillOpacity: 0.8
                        };
                    },
                    onEachFeature: (feature, layer) => {
                        const props = feature.properties;
                        // Vyberieme ktore atributy z GEOjson suboru chceme mat vo "vyskakovacom" okne, po kliknuti na konkretnu cast mapy.
                        // Mozeme menit styl textu v okne. Kedze ide o vizualny aspekt stranky, tato cast kodu je pisana v HTML.
                        const popupContent = `        
                            <div style="font-family: 'chivo';">
                                <strong>Obec:</strong> ${props.NM2}<br>
                                <strong>Okres:</strong> ${props.NM3}<br>
                                <strong>Stupeň ohrozenia:</strong> ${props.vysledky_CI_DCH_percentile ?? 'neuplatňuje sa'}
                            </div>`;
                        layer.bindPopup(popupContent);
                    }
                }).addTo(map)
                vysledkyLayer.bringToBack();
            })

        fetch('/mapy/vojenske_obvody.geojson')
            .then(res => res.json())
            .then(data => {
                const vojenskeLayer = L.geoJSON(data, {
                    style: {
                        fillPattern: stripePattern,
                        color: '#595959',
                        weight: 0.7,
                    },
                    interactive: false // na tuto vrstvu sa neda kliknut, aby sa zobrazili jej atributy, je "zmrazena". Je to preto, aby sa dalo kliknut na najspodnejsiu vrstvu.
                }).addTo(map)
            })
        
        fetch('/mapy/hranice_okresy_small.geojson')
            .then(res => res.json())
            .then(data => {
                const okresyLayer = L.geoJSON(data, {
                    style: {
                        color: '#595959',
                        weight: 0.7,
                        fillOpacity: 0
                    },
                    interactive: false 
                }).addTo(map)
            })

        fetch('/mapy/hranice_SVK.geojson')
            .then(res => res.json())
            .then(data => {
                const SVKLayer = L.geoJSON(data, {
                    style: {
                        color: '#595959',
                        weight: 0.7,
                        fillOpacity: 0
                    },
                    interactive: false
                }).addTo(map)
                map.fitBounds(SVKLayer.getBounds()); // Prisposobime priblizenie mapy tak, aby sa zobrazovalo cele Slovensko bez ohladu na velkost obrazovky zariadenia pouzivatela. 
            })
        
        const legend = L.control({ position: 'bottomright' });

        legend.onAdd = function (map) {
            const div = L.DomUtil.create('div', 'info legend');

            const leftGrades = [1, 2, 3, 4, 5];
            const rightGrades = [6, 7, 8, 9, 10];

            const renderColumn = grades => {
                return grades.map(grade => {
                    const color = getColor(grade);
                    return `
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                            <div style="width: 18px; height: 18px; background:${color};"></div>
                            <span style="min-width: 20px; text-align: left;">${grade}</span>
                        </div>
                    `;
                }).join('');
            };

            div.innerHTML = `
                <div style="text-align: center; margin-bottom: 8px;">
                    <div style="font-weight: bold; font-size: 16px;">Stupeň ohrozenia</div>
                    <div style="font-weight: bold; font-size: 16px;">dopravnou chudobou</div>
                </div>
                <div style="display: flex; justify-content: center; gap: 40px;">
                    <div>${renderColumn(leftGrades)}</div>
                    <div>${renderColumn(rightGrades)}</div>
                </div>
            `;



            return div;
        };



        legend.addTo(map);

    }
}
</script>

<style scoped>

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}


.background {
    background-color:white;
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
    margin-left: 10%;
    margin-right: 10%;
}



@media only screen and (max-width: 768px){
  .text-wrapper {
    color: #595959;
    margin-left: 0%;
    margin-right: 0%;
  }
}

</style>