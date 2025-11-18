import L from 'leaflet'

const getColor = value => {
    if (value == 1) return '#FEFFFF'
    else if (value == null) return '#FFFFFF'
    else if (value == 2) return '#FEF0E3'
    else if (value == 3) return '#FEE1C8'
    else if (value == 4) return '#FED2AC'
    else if (value == 5) return '#FDC290'
    else if (value == 6) return '#FCB375'
    else if (value == 7) return '#FCA459'
    else if (value == 8) return '#FC953E'
    else if (value == 9) return '#FB8622'
    else return '#FA7502'
}

export default {
    id: 'dopravna-chudoba',
    slug: 'mapa-dopravna-chudoba',
    title: 'Mapa 1: Stupne ohrozenia obcí dopravnou chudobou',
    description: `Dopravná chudoba je fenomén, kedy si jednotlivci alebo domácnosti 
        nemôžu dovoliť dopravu alebo majú obmedzený prístup k verejnej či súkromnej doprave.
        To im sťažuje cestovanie za prácou, vzdelaním či zdravotnou starostlivosťou. 
        Dôsledkom môže byť obmedzená účasť na spoločenskom živote a postupné vylúčenie zo spoločnosti. 
        Približne 7 % obyvateľov Slovenska žije v oblastiach s vysokým stupňom ohrozenia 
        dopravnou chudobou. V Prešovskom a Banskobystrickom kraji sa jedná o takmer polovicu 
        obcí, pričom najohrozenejšie sú regióny Gemer, Horný Zemplín a sever Šariša. Dopravná 
        chudoba súvisí najmä s nedostupnou verejnou osobnou dopravou a potrebou cestovať na 
        dlhšie vzdialenosti. Ohrozené sú aj obce, ktoré sa nachádzajú blízko okresného mesta, no 
        majú k dispozícii nízky počet spojov verejnej osobnej dopravy, ako aj niektoré obce na 
        západe Slovenska, kde je kľúčovým faktorom dlhý čas prepravy.`,
  
  // initial map view
    view: {
        center: [48.669, 19.699],
        zoom: 8,
        fitTo: '/mapy/hranice_SVK.geojson', // ensures whole Slovakia fits
        createStripePattern() {
            return new L.StripePattern({
                weight: 3,
                spaceWeight: 2,
                color: '#595959',
                spaceColor: 'transparent',
                angle: 135
            })
        }
    },

  // layers in order (bottom → top)
    layers: [
        {
            path: '/mapy/obce_vysledky_small.geojson',
            style: feature => ({
                fillColor: getColor(feature.properties.vysledky_CI_DCH_percentile),
                color: '#595959',
                weight: 0.2,
                fillOpacity: 0.8
            }),
            popup: feature => `
                <div style="font-family: 'chivo';">
                    <strong>Obec:</strong> ${feature.properties.NM2}<br>
                    <strong>Okres:</strong> ${feature.properties.NM3}<br>
                    <strong>Stupeň ohrozenia:</strong> ${feature.properties.vysledky_CI_DCH_percentile ?? 'neuplatňuje sa'}
                </div>`
        },
        {
            path: '/mapy/vojenske_obvody.geojson',
            styleFactory: (stripePattern) => {
                console.log('Stripe pattern passed into styleFactory:', stripePattern)
                return {
                    fillPattern: stripePattern,
                    color: '#595959',
                    weight: 0.7,
                    fillOpacity: 0.3
                }
            },
            interactive: false
        },
        {
            path: '/mapy/hranice_okresy_small.geojson',
            style: {
                color: '#595959',
                weight: 0.7,
                fillOpacity: 0
            },
            interactive: false
        },
        {
            path: '/mapy/hranice_SVK.geojson',
            style: {
                color: '#595959',
                weight: 0.7,
                fillOpacity: 0
            },
            interactive: false
        }
    ],

    // legend definition
    legend: {
        render(map) {
            const div = L.DomUtil.create('div', 'info legend')

            const leftGrades = [1, 2, 3, 4, 5]
            const rightGrades = [6, 7, 8, 9, 10]
            const renderColumn = grades => grades.map(g => `
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <div style="width:18px;height:18px;background:${getColor(g)};"></div>
                    <span>${g}</span>
                </div>
            `).join('')

            div.innerHTML = `
                <div style="text-align:center;margin-bottom:8px;">
                    <div style="font-weight:bold;font-size:16px;">Stupeň ohrozenia</div>
                    <div style="font-weight:bold;font-size:16px;">dopravnou chudobou</div>
                </div>
                <div style="display:flex;justify-content:center;gap:40px;">
                    <div>${renderColumn(leftGrades)}</div>
                    <div>${renderColumn(rightGrades)}</div>
                </div>
            `
            return div
        },
        position: 'bottomright'
    },

    
}
