import L from 'leaflet'

// definujeme funkciu, ktorá dokáže dať útvarom rôzne farby na základe ich vlastostí (užitočné pri vyfarbovaní polygónov a legende):
const getColor = value => {
    if (value == null) return '#ffffff'
    else if (value < 0.2) return '#fb8622'
    else if (value < 0.4) return '#fca459'
    else if (value < 0.6) return '#fdc391'
    else if (value < 0.8) return '#fee1c8'
    else if (value <= 1) return '#ffffff'
    else return '#000000'
}

export default {
    // typ vizualizácie:
    type: 'mapa',
    // unikátne id a slug, na základe ktorých dokáže stránka zobraziť mapu/graf:
    id: 'pripojenost-kanalizacie',
    slug: 'mapa-pripojenost-kanalizacie',
    // nadpis:
    title: 'Miera pripojenia obyvateľstva na kanalizáciu v obciach SR v roku 2023 v %',
    // popis:
    description: `Dostupnosť verejnej kanalizácie na Slovensku je v rámci EÚ podpriemerná, v roku 2022 bolo pripojených iba 71 % obyvateľov. 
                Za celoslovenským priemerom zaostáva Trenčiansky, Nitriansky, Banskobystrický a Košický kraj, naopak výrazne nadpriemerná miera pripojenia 
                je v Bratislavskom kraji. V obciach pod 2 000 obyvateľov je na kanalizáciu pripojených len 33 % obyvateľstva. Nulová alebo nízka 
                miera pripojenia je problémom aj v niektorých väčších obciach a mestách, napr. v Terchovej, Spišských Vlachoch, Veľkom Záluží alebo Jelšave (VÚVH, 2024).`,
    view: {
        // stred mapy:
        center: [48.669, 19.699], 
        // úroveň priblíženia:
        zoom: 8, 
        // zabezpečíme, že celé Slovensko je v zábere:
        fitTo: '/mapy/hranice_SVK.geojson', 
        
        // ak chceme aby mali niektoré regióny na sebe vzor (pásiky atď.), vytvoríme ho tu ako funkciu:
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

    // vrstvy mapy v poradí ako ich chceme na seba naukladať (spodok → vrch):
    layers: [
        {
            // meno .geojson súboru, ktorý je uložený v public/mapy/:
            path: '/mapy/pripojenost_kanalizacie.geojson',
            // definujeme výzor polygónov v každej vrstve:
            style: feature => ({
                // farba výplne:
                fillColor: getColor(feature.properties.percento_p_2),
                // farba obrysu:
                color: '#595959',
                // hrúbka obrysu:
                weight: 0.2,
                // úroveň nepriehľadnosti výplne:
                fillOpacity: 0.8
            }),
            // tu definujeme, čo chceme aby sa po kliknutí na konkrétny polygón zobrazilo vo vyskakovacom okne.
            // zvolíme text a vhodnú hodnotu atribútu z .geojson súboru, ktorú chceme zobraziť. Treba preštudovať konkrétny súbor pre názvy atribútov.
            // ak sú hodonoty pre niektoré polygóny vynechané, môžeme zobraziť napr. "neuplatňuje sa"
            popup: feature => `
                <div style="font-family: 'chivo';">
                    <strong>Obec:</strong> ${feature.properties.NM2}<br>
                    <strong>Okres:</strong> ${feature.properties.NM3}<br>                       
                    <strong>Percento pripojenia:</strong> ${feature.properties.percento_p_2 ?? 'neuplatňuje sa'}
                </div>`,
            
            // zabezpečíme, že aj keď sa vrstva načíta ako posledná, zobrazí sa naspodu (aby neprekryla tie, čo majú byť nad ňou):
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
            // zabezpečíme, aby bola táto vrstva navrchu aj keď sa načíta ako prvá:
            alwaysOnTop: true
        }  
    ],

     // v tejto časti definujeme legendu:
    legend: {
        render(map) {
            const div = L.DomUtil.create('div', 'info legend')

            const leftGrades = [
                { value: 0, label: 'menej ako 0.5' },
                { value: 0.2, label: '0.5 – 1' },
                { value: 0.4, label: '1 – 1.5' },
                { value: 0.6, label: '1.5 – 2' },
                { value: 0.8, label: '2 – 2.5' }
            ]

            const renderColumn = grades => grades.map(g => `
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <div style="width:18px;height:18px;background:${getColor(g.value)};"></div>
                    <span>${g.label}</span>
                </div>
            `).join('')
            div.innerHTML = `
                <div style="text-align:center;margin-bottom:8px;">
                    <div style="font-weight:bold;font-size:16px;">Zmena očakávanej dĺžky</div>
                    <div style="font-weight:bold;font-size:16px;">života v dôsledku znečistenia</div>
                    <div style="font-weight:bold;font-size:16px;">znečistenia ovzdušia (roky)</div>
                </div>
                <div style="display:flex;justify-content:center;gap:40px;">
                    <div>${renderColumn(leftGrades)}</div>
                </div>
            `
            return div
        },
        // pozícia legendu v okne s mapou:
        position: 'bottomright'
    },

    
}
