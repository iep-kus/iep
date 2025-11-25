import L from 'leaflet'
const getColor = value => {
    if (value == "BVS") return '#DE6A03'
    else if (value == "KOMVaK") return '#FBC28A'
    else if (value == "LVS") return '#F4B014'
    else if (value == "OVS") return '#2B728B'
    else if (value == "POVS") return '#D46358'
    else if (value == "PVPS") return '#FFEAB6'
    else if (value == "SEVAK") return '#ECCECB'
    else if (value == "StVPS") return '#D89796'
    else if (value == "TAVOS") return '#FB8622'
    else if (value == "TURVOD") return '#4F9AB4'
    else if (value == "TVK") return '#93382A'
    else if (value == "VSR") return '#C2DDE6'
    else if (value == "VVS") return '#FADC7F'
    else if (value == "ZSVS") return '#FFE3CB'
    else if (value == "Obec") return '#595959'
    else if (value == "Iné") return '#BFBFBF'
    else if (value == "Súkromný prevádzkovateľ") return '#EAEAEA'
    else return '#FFFFFF'
}

export default {
    id: 'vodarenske-spolocnosti',
    slug: 'mapa-vodarenske-spolocnosti',
    title: 'Kto vlastní vodovody na Slovensku?',
    description: `90,5 % obyvateľov Slovenska je pripojených na verejný vodovod a z toho až 95 % odoberateľov zásobujú veľké vodárenské 
        spoločnosti. Verejné vodovody musia byť podľa zákona vo vlastníctve subjektov verejného práva, keďže sú súčasťou kritickej 
        infraštruktúry. Vlastníkmi môžu byť len obce alebo vodárenské spoločnosti vo forme akciových spoločností, kde sú akcionármi 
        obce. Vodárenské spoločnosti s najväčším územným pokrytím sú Západoslovenská (ZSVS), Stredoslovenská (StVS) a Východoslovenská 
        (VVS) vodárenská spoločnosť. V obciach bez vodovodu sú obyvatelia odkázaní na vodu zo studní. Pri vode zo studne existuje 
        riziko, že nemusí spĺňať limity kvality pinej vody, keďže jej pravidelná kontrola nie je povinná. Naopak, voda z vodovodu 
        prechádza pravidelnými kontrolami a na Slovensku dosahuje vysokú kvalitu. Až 99,8 % analýz kvality preukázalo, že pitná voda 
        spĺňa limitné hodnoty. Rizikom pre budúcu dostupnosť vody zo studní budú suchá v dôsledku zmeny klímy.`,
  
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
            path: '/mapy/vodarenske_spolocnosti_small.geojson',
            style: feature => ({
                fillColor: getColor(feature.properties.Prevádzko),
                color: '#595959',
                weight: 0.2,
                fillOpacity: 0.8
            }),
            popup: feature => `
                <div style="font-family: 'chivo';">
                    <strong>Obec:</strong> ${feature.properties.MUNICIPA_1}<br>
                    <strong>Vodárenská spoločnosť:</strong> ${feature.properties.Prevádz_1 ?? 'bez vodovodu'}
                </div>`,
            alwaysOnBottom: true
        },
        {
            path: '/mapy/hranice_SVK.geojson',
            style: {
                color: '#595959',
                weight: 0.7,
                fillOpacity: 0
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
            interactive: false,
            alwaysOnTop: true
        }
        
    ],

    // legend definition
    legend: {
        render(map) {
            const div = L.DomUtil.create('div', 'info legend')

            const spolocnosti = ["BVS", "KOMVaK", "LVS", "OVS", "POVS", "PVPS", "SEVAK", "StVPS", "TAVOS",
                 "TURVOD", "TVK", "VSR", "VVS", "ZSVS", "Obec", "Iné", "Súkromný prevádzkovateľ"]

            const renderColumn = categories => categories.map(c => `
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <div style="width:18px;height:18px;background:${getColor(c)};"></div>
                    <span>${c}</span>
                </div>
            `).join('')

            const leftCategories = spolocnosti.slice(0, 8)
            const rightCategories = spolocnosti.slice(9, 17)

            div.innerHTML = `
                <div style="text-align:center;margin-bottom:8px;">
                    <div style="font-weight:bold;font-size:16px;">Vodárenská spoločnosť</div>
                </div>
                <div style="display:flex;justify-content:center;gap:40px;">
                    <div>${renderColumn(leftCategories)}</div>
                    <div>${renderColumn(rightCategories)}</div>
                </div>
            `
            return div
        },
        position: 'bottomright'
    },

    
}