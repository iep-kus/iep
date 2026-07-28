import L from 'leaflet'

// definujeme funkciu, ktorá dokáže dať útvarom rôzne farby na základe ich vlastostí (užitočné pri vyfarbovaní polygónov a legende):
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
    // typ vizualizácie:
    type: 'mapa',
    // unikátne id a slug, na základe ktorých dokáže stránka zobraziť mapu/graf:
    id: 'dopravna-chudoba',
    slug: 'mapa-dopravna-chudoba',
    // nadpis:
    title: 'Stupne ohrozenia obcí dopravnou chudobou',
    // popis:
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
            path: '/mapy/obce_vysledky_small.geojson',
            // definujeme výzor polygónov v každej vrstve:
            style: feature => ({
                // farba výplne:
                fillColor: getColor(feature.properties.vysledky_CI_DCH_percentile),
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
                    <strong>Stupeň ohrozenia:</strong> ${feature.properties.vysledky_CI_DCH_percentile ?? 'neuplatňuje sa'}
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

            // v tejto legende chceme mať údaje v dvoch stĺpcoch. 
            // zhodujú sa zo stupňami dopravnej chudoby, preto tiež použijeme funkciu getColor, aby sa zhodovala s farbou polygónov.
            const leftGrades = [1, 2, 3, 4, 5]
            const rightGrades = [6, 7, 8, 9, 10]
            
            // následne definujeme výzor legendu, veľkosť textu atď. treba sa s tým pohrať, pomeniť, vyskúšať, čo to spraví.
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
        // pozícia legendu v okne s mapou:
        position: 'bottomright'
    },

    
}
