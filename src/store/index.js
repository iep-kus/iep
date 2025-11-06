import { TableLitePlugin } from "bootstrap-vue";
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    
    uhlikova_stopa_celkovo: 5064,

    uhlikova_stopa_byvanie: 860,
    uhlikova_stopa_doprava: 2190,
    uhlikova_stopa_jedlo: 1186,
    uhlikova_stopa_spotreba: 344,
    uhlikova_stopa_ziv_styl: 524,
    
    
    
    
    
    okres: 1,
    clenovia: 3, // priemerny pocet osob na domacnost je 3.11 v roku 2024
    typ: 'bytovom dome',
    rozloha: 70, // 
    zateplenie: 'čiastočné',
    
    vykurovanievybrate: 1,

    centralne: '8365', 
    elektrika: '2200',
    plyn: '0',
    lpg: '0',
    tuhe: '0',

    Oze: 'Nie',

    selected1:'kWh',
    selected2:'kWh',
    selected3:'kWh',
    selected4:'litrov',
    selected5:'priestorový meter',

    obnovitelnezdroje: 'Nie',
    vlastna: '',
    dodavam: '',
    vlastnakwhe: 'kWh',
    dodavamkwhe: 'kWh',

    details_byvanie: false,

    //dom_vykurovanie_priemer: 188.84,
    //byt_vykurovanie_priemer: 119.44,
    zateplenie_konverzia: 1, 
    byt_ziadne: 198.5,
    byt_ciastocne: 119.5,
    byt_uplne: 59.5,
    dom_ziadne: 276,
    dom_ciastocne: 166,
    dom_uplne: 82.5,

    centralne_jednotky: 0.1383, // ceny eur/kWh 2024
    elektrika_jednotky: 0.1770, 
    plyn_jednotky: 0.0500,
    lpg_jednotky: 0.711, // cena eur/l 2024
    vyhrevnost_lpg: 7.2, // kWh/l
    tuhe_jednotky: 0.865, // prepocet jednotiek kg na m3
    ucinnost_krbu: 0.75,
    vyhrevnost_dreva: 3.3, // kWh/kg


    path_vypocitat: false,
    
    pocetaut: 1,




    // byvanie = [centralne, elektrina, plyn, lpg, tuhe palivo]
    emisie_byvanie: [799.44, 60.87, 0, 0, 0],
    
    // doprava = [automobilova, hromadna (bus + mhd), vlakova, letecka]
    emisie_doprava: [1639.38, 122.10, 16.89, 411.40],

    details_doprava: false,
         
    cudzieauto:1061.5,
    autobus:80,
    kmhodautobus: 'km',
    vlak:8,
    kmhodvlak:'km',
    typvlak: 'elektrický',
    pocetletov:2,
    mhd:80,
    kmhodmhd:'km',
    
    frekvenciavlastne: 3,
    frekvenciacudzie: 5,
    frekvenciamhd: 3,
    frekvenciavlak: 5,

    kilometre1:21230,
    spotreba1:5.8,
    osoby1:2,
    palivo1:1,
    hybrid1: 'Nie',

    kilometre2:0,
    spotreba2:5.8,
    osoby2:2,
    palivo2:1,
    hybrid2: 'Nie',

    kilometre3:0,
    spotreba3:5.8,
    osoby3:2,
    palivo3:1,
    hybrid3: 'Nie',

    kilometre4:0,
    spotreba4:5.8,
    osoby4:2,
    palivo4:1,
    hybrid4: 'Nie',

    kilometre5:0,
    spotreba5:5.8,
    osoby5:2,
    palivo5:1,
    hybrid5: 'Nie',



    let1:2,
    m1: 1,
    s1: 1,

    let2:2,
    m2: 1,
    s2: 1,

    let3:0,
    m3: 1,
    s3: 1,

    let4:0,
    m4: 1,
    s4: 1,

    let5:0,
    m5: 1,
    s5: 1,

    let6:0,
    m6: 1,
    s6: 1,

    let7:0,
    m7: 1,
    s7: 1,

    let8:0,
    m8: 1,
    s8: 1,

    let9:0,
    m9: 1,
    s9: 1,

    let10:0,
    m10: 1,
    s10: 1,

    let11:0,
    m11: 1,
    s11: 1,

    let12:0,
    m12: 1,
    s12: 1,

    let13:0,
    m13: 1,
    s13: 1,

    let14:0,
    m14: 1,
    s14: 1,

    let15:0,
    m15: 1,
    s15: 1,

    let16:0,
    m16: 1,
    s16: 1,

    let17:0,
    m17: 1,
    s17: 1,

    let18:0,
    m18: 1,
    s18: 1,

    let19:0,
    m19: 1,
    s19: 1,

    let20:0,
    m20: 1,
    s20: 1,





    // jedlo = [hovadzie, ostatne maso, mlieko, syry, zelenia, alkohol, ostatne] - aktualizacia 2025
    emisie_jedlo: [165.2, 187.69, 189.69, 92.75, 50.8, 99.82, 398.23], 
    
    vegan: 'Nie',
        
    hovadzie: 3,
    ostatne: 1,
    mliecne: 1,
    syry: 2,
    zelenina: 0,
    alkohol: 1,



    // spotreba = [auta, biela technika, cierna technika, elektronika, nabytok] - aktualizacia 2025
    emisie_spotreba: [138.86, 29.44, 44.12, 109.14, 21.94], 
    details_spotreba:false,

    vlastnenieaut: 1,
    vekaut:10,
    
    vlastneniebielatechnika:5,
    vekbielatechnika:15,
    

    vlastnenieciernatechnika:10,
    vekciernatechnika:10,
    

    vlastnenietechnika:4,
    vektechnika:5,


    druharuka:0,

    nakupauta:1 ,




    // zivotny styl = [oblecenie, dovolenky, odpad] - aktualizacia 2025
    emisie_ziv_styl: [129.69, 139.6, 255.14],

    details_ziv_styl:false,

    druharukaoblecenie:10,

    stan:0,
    kemp:0,
    hotel:10,
    luxus:0,

    plasty:'Áno',
    sklo:'Áno',
    papier: 'Áno',
    bioodpad: 'Nie',
    kovy: 'Nie',

    plastyrange:75,
    sklorange:75,
    papierrange: 75,
    bioodpadrange: 0,
    kovyrange: 0,

    separovanie: ['','','',''],

    nakupoblecenie: 7,




 },
 getters: {},
 mutations: {


    setuhlikova_stopa_celkovo(state,value) {
        state.uhlikova_stopa_celkovo = value;
    },



    setokres(state, okres) {
        state.okres = okres;
    },
    setclenovia(state, clenovia) {
        state.clenovia = clenovia;
    },
    settyp(state,typ) {
        state.typ = typ;
        if (state.typ=='bytovom dome') {
            state.rozloha = 70
        }
        else {
            state.rozloha = 150
        }
    },
    setrozloha(state, rozloha) {
        state.rozloha = rozloha;
    },
    setzateplenie(state, zateplenie) {
        state.zateplenie = zateplenie;
    },

    setemisie_byvanie(state,value) {
        state.emisie_byvanie = value;
    },
    setuhlikova_stopa_byvanie(state,value) {
        state.uhlikova_stopa_byvanie = value;
    },
    setvykurovanievybrate(state, vykurovanievybrate) {
        state.vykurovanievybrate = vykurovanievybrate;
    },

    setcentralne(state, centralne) {
        if(centralne.includes(',')){
            state.centralne= Number(centralne.replace(',','.'))
        }
        else {
            state.centralne = centralne;
        }
    },
    setelektrika(state, elektrika) {
        if(elektrika.includes(',')){
            state.elektrika= Number(elektrika.replace(',','.'))
        }
        else {
            state.elektrika = elektrika;
        }
    },
    setplyn(state, plyn) {
        if(plyn.includes(',')){
            state.plyn= Number(plyn.replace(',','.'))
        }
        else {
            state.plyn = plyn;
        }
    },
    setlpg(state, lpg) {
        if(lpg.includes(',')){
            state.lpg= Number(lpg.replace(',','.'))
        }
        else {
            state.lpg = lpg;
        }
    },
    settuhe(state, tuhe) {
        if(tuhe.includes(',')){
            state.tuhe= Number(tuhe.replace(',','.'))
        }
        else {
            state.tuhe = tuhe;
        }
    }, 
    
    setselected1(state, selected1) {
        state.selected1 = selected1;
    }, 
    setselected2(state, selected2) {
        state.selected2 = selected2;
    }, 
    setselected3(state, selected3) {
        state.selected3 = selected3;
    }, 

    setselected4(state, selected4) {
        state.selected4 = selected4;
    }, 
    setselected5(state, selected5) {
        state.selected5 = selected5;
    }, 

    setobnovitelnezdroje(state, value) {
        state.obnovitelnezdroje = value;
    },
    setvlastna(state, value) {
        state.vlastna = value;
    },
    setdodavam(state, value) {
        state.dodavam = value;
    },
    setvlastnakwhe(state, value) {
        state.vlastnakwhe = value;
    },
    setdodavamkwhe(state, value) {
        state.dodavamkwhe = value;
    },

    setdetails_byvanie(state, value) {
        state.details_byvanie = value;
    },

    setOze(state, value) {
        state.Oze = value;
    },


    
    
    

    // podla vybratych moznosti sa uzivatelovi priradi spravna spotreba energie na m2 na rok
    prepocetzateplenie(state) {
        
        if (state.zateplenie=='úplné'){
            if (state.typ == 'bytovom dome') {state.zateplenie_konverzia = state.byt_uplne}
            else {state.zateplenie_konverzia= state.dom_uplne}
        }
        if (state.zateplenie=='čiastočné') {
            if (state.typ == 'bytovom dome') {state.zateplenie_konverzia = state.byt_ciastocne}
            else {state.zateplenie_konverzia= state.dom_ciastocne}
        }
        if (state.zateplenie=='žiadne') {
            if (state.typ == 'bytovom dome') {state.zateplenie_konverzia = state.byt_ziadne}
            else {state.zateplenie_konverzia= state.dom_ziadne}
        }
    },
    // podla vybraneho typu vykurovania, rozlohy a spotreby energie na m2 sa vypocita celkova spotreba
    prepocetenergie(state) {
        
        // centralne kurenie
        if (state.vykurovanievybrate==1){
            if (state.selected1=='kWh'){
                state.centralne = String(Math.round(state.rozloha*state.zateplenie_konverzia))
            }
            else {
                state.centralne = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.centralne_jednotky))
            }
        }
        if (state.vykurovanievybrate!=1) { state.centralne = '0'}



        // elektrina, docasne zjednoduseny vypocet
        if (state.vykurovanievybrate==2){
            if (state.selected2=='kWh'){
                if(state.typ=='bytovom dome'){state.elektrika = String(Math.round(state.rozloha*state.zateplenie_konverzia + 2200))} //(365.51 + 59.76*state.clenovia)/state.elektrika_jednotky))}
                else{state.elektrika = String(Math.round(state.rozloha*state.zateplenie_konverzia + 3500))} //(635.69 + 29.781*state.clenovia)/state.elektrika_jednotky))}
            }
            else {
                if(state.typ=='bytovom dome'){state.elektrika = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.elektrika_jednotky + 2200*state.elektrika_jednotky))}//365.51 + 59.76*state.clenovia))}
                else{state.elektrika = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.elektrika_jednotky + 3500*state.elektrika_jednotky))} //635.69 + 29.781*state.clenovia))}
            }
        }
        if (state.vykurovanievybrate!=2) { 
            if (state.selected2=='kWh'){
                if(state.typ=='bytovom dome'){state.elektrika = String(2200)} //String(Math.round((365.51 + 59.76*state.clenovia)/state.elektrika_jednotky))}
                else{state.elektrika = String(3500)}  //String(Math.round((635.69 + 29.781*state.clenovia)/state.elektrika_jednotky))}
            }
            else {
                if(state.typ=='bytovom dome'){state.elektrika = String(Math.round(2200*state.elektrika_jednotky))} //String(Math.round(365.51 + 59.76*state.clenovia))}
                else{state.elektrika = String(Math.round(3500*state.elektrika_jednotky))} //String(Math.round(635.69 + 29.781*state.clenovia))}
            }
        }

        

        // Zemny plyn
        if (state.vykurovanievybrate==3){
            if (state.selected3=='kWh'){
                state.plyn = String(Math.round(state.rozloha*state.zateplenie_konverzia))
            }
            else {
                state.plyn = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.plyn_jednotky))
            }
        }
        if (state.vykurovanievybrate!=3) {
            state.plyn = String(0)
        }

        // LPG 
        if (state.vykurovanievybrate==4){
            
            if (state.selected4 == 'litrov'){
                state.lpg = String(Math.round(state.rozloha*state.zateplenie_konverzia/state.vyhrevnost_lpg))
            }
            else{
                state.lpg = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.lpg_jednotky/state.vyhrevnost_lpg))
            }
        }
        if (state.vykurovanievybrate!=4) { state.lpg= '0'}

        // tuhe palivo (drevo)
        if (state.vykurovanievybrate==5){
            if (state.selected5=='priestorový meter'){
                state.tuhe = String(Math.round(state.rozloha*state.zateplenie_konverzia/(state.ucinnost_krbu*state.vyhrevnost_dreva*585)))
            }
            if (state.selected5=='t'){
                state.tuhe = String(Math.round(state.rozloha*state.zateplenie_konverzia/(state.ucinnost_krbu*state.vyhrevnost_dreva*1000)))
            }
            if (state.selected5=='m3'){
                state.tuhe = String(Math.round(state.rozloha*state.zateplenie_konverzia/(state.ucinnost_krbu*state.vyhrevnost_dreva*865)))
            }
        }
        if (state.vykurovanievybrate!=5) { state.tuhe = '0'}
        
        
        
        
        
    },

    conversion(state,index) {
        if (index==0) {
            if (state.selected1=='kWh'){state.centralne=Math.round(state.centralne/state.centralne_jednotky)}
            else {state.centralne=Math.round(state.centralne*state.centralne_jednotky)}
        }
        if (index==1) {
            if (state.selected2=='kWh'){state.elektrika=Math.round(state.elektrika/state.elektrika_jednotky)}
            else {state.elektrika=Math.round(state.elektrika*state.elektrika_jednotky)}
        }
        if (index==2) {
            if (state.selected3=='kWh'){state.plyn=Math.round(state.plyn/state.plyn_jednotky)}
            else {state.plyn=Math.round(state.plyn*state.plyn_jednotky)}
        }
        if (index==3) {
            if (state.selected4=='litrov'){state.lpg=Math.round(state.lpg/state.lpg_jednotky)}
            else {state.lpg=Math.round(state.lpg*state.lpg_jednotky)}
        }
        if (index==4) {
            if (state.selected5=='prm'){state.tuhe=Math.round(state.tuhe/state.tuhe_jednotky)}
            else {state.tuhe=Math.round(state.tuhe*state.tuhe_jednotky)}
        }
    },





    setemisie_doprava(state,value) {
        state.emisie_doprava = value;
    },
    setuhlikova_stopa_doprava(state,value) {
        state.uhlikova_stopa_doprava = value;
    },
    setpocetaut(state, pocetaut) {
        state.pocetaut = pocetaut;
    },
    
    setdetails_doprava(state, value) {
        state.details_doprava = value;
        if(state.details_doprava== false){
            state.s1 = 1;
            state.s2 = 1;
            state.s3 = 1;
            state.s4 = 1;
            state.s5 = 1;
            state.s6 = 1;
            state.s7 = 1;
            state.s8 = 1;
            state.s9 = 1;
            state.s10 = 1;
            state.s11 = 1;
            state.s12 = 1;
            state.s13 = 1;
            state.s14 = 1;
            state.s15 = 1;
            state.s16 = 1;
            state.s17 = 1;
            state.s18 = 1;
            state.s19 = 1;
            state.s20 = 1;

        }
    },
    
    setcudzieauto(state, value) {
        if(value.includes(',')){
            state.cudzieauto= Number(value.replace(',','.'))
        }
        else {
            state.cudzieauto = value;
        }
    },
    setautobus(state, value) {
        if(value.includes(',')){
            state.autobus= Number(value.replace(',','.'))
        }
        else {
            state.autobus = value;
        }
    },
    setkmhodautobus(state, value) {
        state.kmhodautobus = value;
    },
    setvlak(state, value) {
        if(value.includes(',')){
            state.vlak= Number(value.replace(',','.'))
        }
        else {
            state.vlak = value;
        }
    },
    setkmhodvlak(state, value) {
        state.kmhodvlak = value;
    },
    settypvlak(state, value) {
        state.typvlak = value;
    },
    
    setmhd(state, value) {
        if(value.includes(',')){
            state.mhd= Number(value.replace(',','.'))
        }
        else {
            state.mhd = value;
        }
    },
    setkmhodmhd(state, value) {
        state.kmhodmhd = value;
    },
    
    setfrekvenciavlastne(state, value) {
        state.frekvenciavlastne = value;
    },
    setfrekvenciacudzie(state, value) {
        state.frekvenciacudzie = value;
    },
    setfrekvenciavlak(state, value) {
        state.frekvenciavlak = value;
    },
    setfrekvenciamhd(state, value) {
        state.frekvenciamhd = value;
    },

    setkilometre1(state, value) {
        state.kilometre1 = value;
    },
    setspotreba1(state, value) {
        if(value.includes(',')){
            state.spotreba1= Number(value.replace(',','.'))
        }
        else {
            state.spotreba1 = value;
        }
    },
    setosoby1(state, value) {
        state.osoby1 = value;
    },
    setpalivo1(state, value) {
        state.palivo1 = value;
    },

    setkilometre2(state, value) {
        state.kilometre2 = value;
    },
    setspotreba2(state, value) {
        if(value.includes(',')){
            state.spotreba2= Number(value.replace(',','.'))
        }
        else {
            state.spotreba2 = value;
        }
    },
    setosoby2(state, value) {
        state.osoby2 = value;
    },
    setpalivo2(state, value) {
        state.palivo2 = value;
    },

    setkilometre3(state, value) {
        state.kilometre3 = value;
    },
    setspotreba3(state, value) {
        if(value.includes(',')){
            state.spotreba3= Number(value.replace(',','.'))
        }
        else {
            state.spotreba3 = value;
        }
    },
    setosoby3(state, value) {
        state.osoby3 = value;
    },
    setpalivo3(state, value) {
        state.palivo3 = value;
    },

    setkilometre4(state, value) {
        state.kilometre4 = value;
    },
    setspotreba4(state, value) {
        if(value.includes(',')){
            state.spotreba4= Number(value.replace(',','.'))
        }
        else {
            state.spotreba4 = value;
        }
    },
    setosoby4(state, value) {
        state.osoby4 = value;
    },
    setpalivo4(state, value) {
        state.palivo4 = value;
    },

    setkilometre5(state, value) {
        state.kilometre5 = value;
    },
    setspotreba5(state, value) {
        if(value.includes(',')){
            state.spotreba5= Number(value.replace(',','.'))
        }
        else {
            state.spotreba5 = value;
        }
    },
    setosoby5(state, value) {
        state.osoby5 = value;
    },
    setpalivo5(state, value) {
        state.palivo5 = value;
    },

    sethybrid1(state, value) {
        state.hybrid1 = value;
    },
    sethybrid2(state, value) {
        state.hybrid2 = value;
    },
    sethybrid3(state, value) {
        state.hybrid3 = value;
    },
    sethybrid4(state, value) {
        state.hybrid4 = value;
    },
    sethybrid5(state, value) {
        state.hybrid5 = value;
    },




    setpocetletov(state, value) {
        state.pocetletov = value;
        
        if(value==0){state.let1=0}
        if(value==1){
            state.let2=0
            state.m1 = 1
            state.let1=2}
        if(value==2){state.let3=0
            state.m2 = 1
            state.let2=2}
        if(value==3){state.let4=0
            state.m3 = 1
            state.let3=2}
        if(value==4){state.let5=0
            state.m4 = 1
            state.let4=2}
        if(value==5){state.let6=0
            state.m5 = 1
            state.let5=2}
        if(value==6){state.let7=0
            state.m6 = 1
            state.let6=2}
        if(value==7){state.let8=0
            state.m7 = 1
            state.let7=2}
        if(value==8){state.let9=0
            state.m8 = 1
            state.let8=2}
        if(value==9){state.let10=0
            state.m9 = 1
            state.let9=2}
        if(value==10){state.let11=0
            state.m10 = 1
            state.let10=2}
        if(value==11){state.let12=0
            state.m11 = 1
            state.let11=2}
        if(value==12){state.let13=0
            state.m12 = 1
            state.let12=2}
        if(value==13){state.let14=0
            state.m13 = 1
            state.let13=2}
        if(value==14){state.let15=0
            state.m14 = 1
            state.let14=2}
        if(value==15){state.let16=0
            state.m15 = 1
            state.let15=2}
        if(value==16){state.let17=0
            state.m16 = 1
            state.let16=2}
        if(value==17){state.let18=0
            state.m17 = 1
            state.let17=2}
        if(value==18){state.let19=0
            state.m18 = 1
            state.let18=2}
        if(value==19){state.let20=0
            state.m19 = 1
            state.let19=2}

        
    },


    setlet1(state, value) {
        if(value.includes(',')){
            state.let1= Number(value.replace(',','.'))
        }
        else {
            state.let1 = value;
        }
    },
    setm1(state, value) {
        state.m1 = value;
    },
    sets1(state, value) {
        state.s1 = value;
    },



    setlet2(state, value) {
        if(value.includes(',')){
            state.let2= Number(value.replace(',','.'))
        }
        else {
            state.let2 = value;
        }
    },
    setm2(state, value) {
        state.m2 = value;
    },
    sets2(state, value) {
        state.s2 = value;
    },


    setlet3(state, value) {
        if(value.includes(',')){
            state.let3= Number(value.replace(',','.'))
        }
        else {
            state.let3 = value;
        }
    },
    setm3(state, value) {
        state.m3 = value;
    },
    sets3(state, value) {
        state.s3 = value;
    },


    setlet4(state, value) {
        if(value.includes(',')){
            state.let4= Number(value.replace(',','.'))
        }
        else {
            state.let4 = value;
        }
    },
    setm4(state, value) {
        state.m4 = value;
    },
    sets4(state, value) {
        state.s4 = value;
    },

    setlet5(state, value) {
        if(value.includes(',')){
            state.let5= Number(value.replace(',','.'))
        }
        else {
            state.let5 = value;
        }
    },
    setm5(state, value) {
        state.m5 = value;
    },
    sets5(state, value) {
        state.s5 = value;
    },

    setlet6(state, value) {
        if(value.includes(',')){
            state.let6= Number(value.replace(',','.'))
        }
        else {
            state.let6 = value;
        }
    },
    setm6(state, value) {
        state.m6 = value;
    },
    sets6(state, value) {
        state.s6 = value;
    },

    setlet7(state, value) {
        if(value.includes(',')){
            state.let7= Number(value.replace(',','.'))
        }
        else {
            state.let7 = value;
        }
    },
    setm7(state, value) {
        state.m7 = value;
    },
    sets7(state, value) {
        state.s7 = value;
    },

    setlet8(state, value) {
        if(value.includes(',')){
            state.let8= Number(value.replace(',','.'))
        }
        else {
            state.let8 = value;
        }
    },
    setm8(state, value) {
        state.m8 = value;
    },
    sets8(state, value) {
        state.s8 = value;
    },

    setlet9(state, value) {
        if(value.includes(',')){
            state.let9= Number(value.replace(',','.'))
        }
        else {
            state.let9 = value;
        }
    },
    setm9(state, value) {
        state.m9 = value;
    },
    sets9(state, value) {
        state.s9 = value;
    },

    setlet10(state, value) {
        if(value.includes(',')){
            state.let10= Number(value.replace(',','.'))
        }
        else {
            state.let10 = value;
        }
    },
    setm10(state, value) {
        state.m10 = value;
    },
    sets10(state, value) {
        state.s10 = value;
    },

    setlet11(state, value) {
        if(value.includes(',')){
            state.let11= Number(value.replace(',','.'))
        }
        else {
            state.let11 = value;
        }
    },
    setm11(state, value) {
        state.m11 = value;
    },
    sets11(state, value) {
        state.s11 = value;
    },

    setlet12(state, value) {
        if(value.includes(',')){
            state.let12= Number(value.replace(',','.'))
        }
        else {
            state.let12 = value;
        }
    },
    setm12(state, value) {
        state.m12 = value;
    },
    sets12(state, value) {
        state.s12 = value;
    },

    setlet13(state, value) {
        if(value.includes(',')){
            state.let13= Number(value.replace(',','.'))
        }
        else {
            state.let13 = value;
        }
    },
    setm13(state, value) {
        state.m13 = value;
    },
    sets13(state, value) {
        state.s13 = value;
    },

    setlet14(state, value) {
        if(value.includes(',')){
            state.let14= Number(value.replace(',','.'))
        }
        else {
            state.let14 = value;
        }
    },
    setm14(state, value) {
        state.m14 = value;
    },
    sets14(state, value) {
        state.s14 = value;
    },

    setlet15(state, value) {
        if(value.includes(',')){
            state.let15= Number(value.replace(',','.'))
        }
        else {
            state.let15 = value;
        }
    },
    setm15(state, value) {
        state.m15 = value;
    },
    sets15(state, value) {
        state.s15 = value;
    },

    setlet16(state, value) {
        if(value.includes(',')){
            state.let16= Number(value.replace(',','.'))
        }
        else {
            state.let16 = value;
        }
    },
    setm16(state, value) {
        state.m16 = value;
    },
    sets16(state, value) {
        state.s16 = value;
    },

    setlet17(state, value) {
        if(value.includes(',')){
            state.let17= Number(value.replace(',','.'))
        }
        else {
            state.let17 = value;
        }
    },
    setm17(state, value) {
        state.m17 = value;
    },
    sets17(state, value) {
        state.s17 = value;
    },

    setlet18(state, value) {
        if(value.includes(',')){
            state.let18= Number(value.replace(',','.'))
        }
        else {
            state.let18 = value;
        }
    },
    setm18(state, value) {
        state.m18 = value;
    },
    sets18(state, value) {
        state.s18 = value;
    },

    setlet19(state, value) {
        if(value.includes(',')){
            state.let19= Number(value.replace(',','.'))
        }
        else {
            state.let19 = value;
        }
    },
    setm19(state, value) {
        state.m19 = value;
    },
    sets19(state, value) {
        state.s19 = value;
    },

    setlet20(state, value) {
        if(value.includes(',')){
            state.let20= Number(value.replace(',','.'))
        }
        else {
            state.let20 = value;
        }
    },
    setm20(state, value) {
        state.m20 = value;
    },
    sets20(state, value) {
        state.s20 = value;
    },

  




    setemisie_jedlo(state,value) {
        state.emisie_jedlo = value;
    },
    setuhlikova_stopa_jedlo(state,value) {
        state.uhlikova_stopa_jedlo = value;
    },
    setvegan(state, value) {
        state.vegan = value;
        if(value=='Áno'){state.alkohol=3}
        if(value=='Nie'){state.alkohol=1}
    },
    sethovadzie(state, value) {
        state.hovadzie = value;
    },
    setostatne(state, value) {
        state.ostatne = value;
    },
    setmliecne(state, value) {
        state.mliecne = value;
    },
    setsyry(state, value) {
        state.syry = value;
    },
    setzelenina(state, value) {
        state.zelenina = value;
    },
    setalkohol(state, value) {
        state.alkohol = value;
    },





    setemisie_spotreba(state,value) {
        state.emisie_spotreba = value;
    },
    setuhlikova_stopa_spotreba(state,value) {
        state.uhlikova_stopa_spotreba = value;
    },


    setdetails_spotreba(state, value) {
        state.details_spotreba = value;
    },
    setvlastnenieaut(state, value) {
        state.vlastnenieaut = value;
    },
    setvekaut(state, value) {
        state.vekaut = value;
    },

    setvlastneniebielatechnika(state, value) {
        state.vlastneniebielatechnika = value;
    },
    setvekbielatechnika(state, value) {
        state.vekbielatechnika = value;
    },

    setvlastnenieciernatechnika(state, value) {
        state.vlastnenieciernatechnika = value;
    },
    setvekciernatechnika(state, value) {
        state.vekciernatechnika = value;
    },

    setvlastnenietechnika(state, value) {
        state.vlastnenietechnika = value;
    },
    setvektechnika(state, value) {
        state.vektechnika = value;
    },

    setdruharuka(state, value) {
        state.druharuka = value;
    },

    setnakupauta(state, value) {
        state.nakupauta = value;
    },














    setemisie_ziv_styl(state,value) {
        state.emisie_ziv_styl = value;
    },
    setuhlikova_stopa_ziv_styl(state,value) {
        state.uhlikova_stopa_ziv_styl = value;
    },
    setdetails_ziv_styl(state, value) {
        state.details_ziv_styl = value;
    },

    setdruharukaoblecenie(state, value) {
        state.druharukaoblecenie = value;
    },
   
    setstan(state, value) {
        state.stan = value;
    },
    setkemp(state, value) {
        state.kemp = value;
    },
    sethotel(state, value) {
        state.hotel = value;
    },
    setluxus(state, value) {
        state.luxus = value;
    },

    setpapier(state, value) {
        state.papier = value;
        if(value=='Áno'){state.papierrange=75}
        if(value=='Nie'){state.papierrange=0}
    },
    setsklo(state, value) {
        state.sklo = value;
        if(value=='Áno'){state.sklorange=75}
        if(value=='Nie'){state.sklorange=0}
    },
    setplasty(state, value) {
        state.plasty = value;
        if(value=='Áno'){state.plastyrange=75}
        if(value=='Nie'){state.plastyrange=0}
    },
    setbioodpad(state, value) {
        state.bioodpad = value; 
        if(value=='Áno'){state.bioodpadrange=75}
        if(value=='Nie'){state.bioodpadrange=0}
    },
    setkovy(state, value) {
        state.kovy = value; 
        if(value=='Áno'){state.kovyrange=75}
        if(value=='Nie'){state.kovyrange=0}
    },

    setpapierrange(state, value) {
        state.papierrange = value;
        if(value>=50){state.papier='Áno'}
        if(value<50){state.papier='Nie'}
    },
    setsklorange(state, value) {
        state.sklorange = value;
        if(value>=50){state.sklo='Áno'}
        if(value<50){state.sklo='Nie'}
    },
    setplastyrange(state, value) {
        state.plastyrange = value;
        if(value>=50){state.plasty='Áno'}
        if(value<50){state.plasty='Nie'}
    },
    setbioodpadrange(state, value) {
        state.bioodpadrange = value;
        if(value>=50){state.bioodpad='Áno'}
        if(value<50){state.bioodpad='Nie'}
    },
    setkovyrange(state, value) {
        state.kovyrange = value;
        if(value>=50){state.kovy='Áno'}
        if(value<50){state.kovy='Nie'}
    },

    setseparovanie(state, value) {
        state.separovanie = value;
    },

    setnakupoblecenie(state, value) {
        state.nakupoblecenie = value;
    },

    setpath_vypocitat(state) {
        state.path_vypocitat = true;
    },



 },
 actions: {}
});