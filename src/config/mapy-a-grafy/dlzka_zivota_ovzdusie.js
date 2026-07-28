import L from 'leaflet'

// definujeme funkciu, ktorá dokáže dať útvarom rôzne farby na základe ich vlastostí (užitočné pri vyfarbovaní polygónov a legende):
const getColor = value => {
    if (value == null) return '#FFFFFF'
    else if (value < 0.5) return '#FEFFFF'
    else if (value < 1.0) return '#FFDFC3'
    else if (value < 1.5) return '#FCA66D'
    else if (value < 2.0) return '#CA452D'
    else if (value < 2.5) return '#99362B'
    else return '#000000'
}

export default {
    // typ vizualizácie:
    type: 'mapa',
    // unikátne id a slug, na základe ktorých dokáže stránka zobraziť mapu/graf:
    id: 'dlzka-zivota-ovzdusie',
    slug: 'mapa-dlzka-zivota-ovzdusie',
    // nadpis:
    title: 'Skrátenie dĺžky života kvôli vystaveniu znečistenému ovzdušiu',
    // popis:
    description: `Znečistenie ovzdušia pripravuje obyvateľov Slovenska v priemere o viac 
    ako jeden rok života. V najviac zasiahnutých obciach je rozdiel ešte výraznejší, ľudia 
    tam žijú takmer o dva roky kratšie ako v najčistejších oblastiach. Vyplýva to z novej 
    vedeckej štúdie slovenských expertov a vedcov, ktorá po prvýkrát analyzuje dopady 
    znečistenia ovzdušia až na úrovni jednotlivých obcí.`,
  
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
            path: '/mapy/obce_znecistenie_ovzdusia.geojson',
            // definujeme výzor polygónov v každej vrstve:
            style: feature => ({
                // farba výplne:
                fillColor: getColor(feature.properties.porovnanie_metod_LE_loss_final),
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
                    <strong>Zmena očakávanej dĺžky života:</strong>
                        ${feature.properties.porovnanie_metod_LE_loss_final != null
                            ? Number(feature.properties.porovnanie_metod_LE_loss_final).toFixed(2) // nechcem vypísať celú hodnotu, tak ju zaokrúhlim na 2 desatinné miesta
                            : 'neuplatňuje sa'}
                </div>`,
            
            // zabezpečíme, že aj keď sa vrstva načíta ako posledná, zobrazí sa naspodu (aby neprekryla tie, čo majú byť nad ňou):
            alwaysOnBottom: true
        },
        {
            path: '/mapy/vojenske_obvody.geojson',
            // na tejto vrstve chceme použiť (pásikavý vzor), postupujeme nasledovne:
            styleFactory: (stripePattern) => {
                console.log('Stripe pattern passed into styleFactory:', stripePattern)
                return {
                    fillPattern: stripePattern,
                    color: '#595959',
                    weight: 0.7,
                    fillOpacity: 0.4
                }
            },
            // hoci táto vrstva je vyššie než predošlá, nechceme any prekryla jej funkcionalitu. 
            // ak má interaktivita hodnotu "false", nedá sa na ňu kliknúť, je ju iba vidieť, čo sa hodí ak chceme vedieť kliknúť na spodnejšiu vrstvu.
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
                { value: 0.5, label: '0.5 – 1' },
                { value: 1.0, label: '1 – 1.5' },
                { value: 1.5, label: '1.5 – 2' },
                { value: 2.0, label: '2 – 2.5' }
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
