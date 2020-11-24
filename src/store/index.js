import { TableLitePlugin } from "bootstrap-vue";
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    
    uhlikova_stopa_celkovo:6300,

    uhlikova_stopa_byvanie:673,
    uhlikova_stopa_doprava:2651,
    uhlikova_stopa_jedlo:1657,
    uhlikova_stopa_spotreba:804,
    uhlikova_stopa_ziv_styl:515,
    
    
    
    
    
    okres: 2,
    clenovia: 2,
    typ: 'bytovom dome',
    rozloha: 72,
    zateplenie: 'čiastočné',
    
    vykurovanievybrate: [1],

    centralne: '8600',
    elektrika: '3075',
    plyn: '',
    lpg: '',
    tuhe: '',

    selected1:'kWh',
    selected2:'kWh',
    selected3:'kWh',
    selected4:'litrov',
    selected5:'prm',

    obnovitelnezdroje: 'Nie',
    vlastna: '',
    dodavam: '',
    vlastnakwhe: 'kWh',
    dodavamkwhe: 'kWh',

    details_byvanie: false,

    dom_vykurovanie_priemer: 188.84,
    byt_vykurovanie_priemer: 119.44,
    zateplenie_konverzia: 1, 
    byt_ziadne: 1.27388535,
    byt_uplne: 0.72611465,
    dom_ziadne: 1.53846154,
    dom_uplne: 0.46153846,

    centralne_jednotky: 0.092307,
    elektrika_jednotky: 0.1577,
    plyn_jednotky: 0.0533,
    lpg_jednotky: 0.59,
    tuhe_jednotky: 0.865,

    path_vypocitat: false,
    
    pocetaut: 1,





    emisie_byvanie: [210.6,449.7375,520.35,159.6,137.2],

    emisie_doprava: [1199,633,31,788],

    details_doprava: false,
         
    cudzieauto:0,
    autobus:100,
    kmhodautobus: 'km',
    vlak:100,
    kmhodvlak:'km',
    typvlak: 'elektrický',
    pocetletov:2,
    mhd:2,
    kmhodmhd:'hod',
    
    frekvenciavlastne: 3,
    frekvenciacudzie: 5,
    frekvenciamhd: 2,
    frekvenciavlak: 5,

    kilometre1:5000,
    spotreba1:6,
    osoby1:2,
    palivo1:1,


    kilometre2:0,
    spotreba2:6,
    osoby2:2,
    palivo2:1,

    kilometre3:0,
    spotreba3:6,
    osoby3:2,
    palivo3:1,

    kilometre4:0,
    spotreba4:6,
    osoby4:2,
    palivo4:1,

    kilometre5:0,
    spotreba5:6,
    osoby5:2,
    palivo5:1,



    let1:2,
    m1: 1,
    s1: 2,

    let2:0,
    m2: 1,
    s2: 2,

    let3:0,
    m3: 1,
    s3: 2,

    let4:0,
    m4: 1,
    s4: 2,

    let5:0,
    m5: 1,
    s5: 2,

    let6:0,
    m6: 1,
    s6: 2,

    let7:0,
    m7: 1,
    s7: 2,

    let8:0,
    m8: 1,
    s8: 2,

    let9:0,
    m9: 1,
    s9: 2,

    let10:0,
    m10: 1,
    s10: 2,

    let11:0,
    m11: 1,
    s11: 2,

    let12:0,
    m12: 1,
    s12: 2,

    let13:0,
    m13: 1,
    s13: 2,

    let14:0,
    m14: 1,
    s14: 2,

    let15:0,
    m15: 1,
    s15: 2,

    let16:0,
    m16: 1,
    s16: 2,

    let17:0,
    m17: 1,
    s17:2,

    let18:0,
    m18: 1,
    s18: 2,

    let19:0,
    m19: 1,
    s19: 2,

    let20:0,
    m20: 1,
    s20: 2,





    
    emisie_jedlo: [210.6,449.7375,520.35,159.6,137.2,128.945],
    
    vegan: 'Nie',
        
    hovadzie: 3,
    ostatne: 1,
    mliecne: 1,
    syry: 2,
    zelenina: 1,
    alkohol: 1,




    emisie_spotreba: [388.20,45.15,98.21,206.23,66],
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





    emisie_ziv_styl: [201.99,197.5,115.53],

    details_ziv_styl:false,

    druharukaoblecenie:20,

    stan:0,
    kemp:0,
    hotel:10,
    luxus:0,

    plasty:'Áno',
    sklo:'Áno',
    papier: 'Áno',
    bioodpad: 'Nie',

    plastyrange:50,
    sklorange:50,
    papierrange: 50,
    bioodpadrange: 0,

    separovanie: ['','','',''],

    nakupoblecenie: 2,




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
            state.rozloha = 72
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
        state.centralne = centralne;
    },
    setelektrika(state, elektrika) {
        state.elektrika = elektrika;
    },
    setplyn(state, plyn) {
        state.plyn = plyn;
    },
    setlpg(state, lpg) {
        state.lpg = lpg;
    },
    settuhe(state, tuhe) {
        state.tuhe = tuhe;
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




    
    
    


    prepocetzateplenie(state) {
            if (state.zateplenie=='úplné'){
                if (state.typ == 'bytovom dome') {state.zateplenie_konverzia= state.byt_vykurovanie_priemer*state.byt_uplne}
                else {state.zateplenie_konverzia= state.dom_vykurovanie_priemer*state.dom_uplne}
            }
            if (state.zateplenie=='čiastočné') {
                if (state.typ == 'bytovom dome') {state.zateplenie_konverzia= state.byt_vykurovanie_priemer}
                else {state.zateplenie_konverzia= state.dom_vykurovanie_priemer}
            }
            if (state.zateplenie=='žiadne') {
                if (state.typ == 'bytovom dome') {state.zateplenie_konverzia= state.byt_vykurovanie_priemer*state.byt_ziadne}
                else {state.zateplenie_konverzia= state.dom_vykurovanie_priemer*state.dom_ziadne}
            }
    },

    prepocetenergie(state) {
        
        if (state.vykurovanievybrate.includes(1)){
            if (state.selected1=='kWh'){
                state.centralne = String(Math.round(state.rozloha*state.zateplenie_konverzia))
            }
            else {
                state.centralne = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.centralne_jednotky))
            }
        }
        if (!state.vykurovanievybrate.includes(1)) { state.centralne = '0'}




        if (state.vykurovanievybrate.includes(2)){
            if (state.selected2=='kWh'){
                if(state.typ=='bytovom dome'){state.elektrika = String(Math.round(state.rozloha*state.zateplenie_konverzia + (365.51 + 59.76*state.clenovia)/state.elektrika_jednotky))}
                else{state.elektrika = String(Math.round(state.rozloha*state.zateplenie_konverzia + (635.69 + 29.781*state.clenovia)/state.elektrika_jednotky))}
            }
            else {
                if(state.typ=='bytovom dome'){state.elektrika = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.elektrika_jednotky + 365.51 + 59.76*state.clenovia))}
                else{state.elektrika = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.elektrika_jednotky + 635.69 + 29.781*state.clenovia))}
            }
        }
        if (!state.vykurovanievybrate.includes(2)) { 
            if (state.selected2=='kWh'){
                if(state.typ=='bytovom dome'){state.elektrika = String(Math.round((365.51 + 59.76*state.clenovia)/state.elektrika_jednotky))}
                else{state.elektrika = String(Math.round((635.69 + 29.781*state.clenovia)/state.elektrika_jednotky))}
            }
            else {
                if(state.typ=='bytovom dome'){state.elektrika = String(Math.round(365.51 + 59.76*state.clenovia))}
                else{state.elektrika = String(Math.round(635.69 + 29.781*state.clenovia))}
            }
        }

        


        if (state.vykurovanievybrate.includes(3)){
            if (state.selected3=='kWh'){
                state.plyn = String(Math.round(state.rozloha*state.zateplenie_konverzia))
            }
            else {
                state.plyn = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.plyn_jednotky))
            }
        }
        if (!state.vykurovanievybrate.includes(3)) {
            state.plyn = String(0)
        }

        if (state.vykurovanievybrate.includes(4)){
            if (state.selected4=='litrov'){
                if(state.typ=='bytovom dome'){state.lpg = String(885)}
                if(state.typ=='rodinnom dome'){state.lpg = String(777) }
            }
            else {
                if(state.typ=='bytovom dome'){state.lpg = String(885*0.59)}
                if(state.typ=='rodinnom dome'){state.lpg = String(777*0.59) }
            }
        }
        if (!state.vykurovanievybrate.includes(4)) { state.lpg= '0'}

        
        if (state.vykurovanievybrate.includes(5)){
            if (state.selected5=='prm'){
                state.tuhe = String(Math.round(state.rozloha*state.zateplenie_konverzia*24*180/(3.2*1000*1212.96)))
            }
            if (state.selected5=='t'){
                state.tuhe = String(Math.round(state.rozloha*state.zateplenie_konverzia*24*180/(3.2*1000*1000)))
            }
            if (state.selected5=='m3'){
                state.tuhe = String(Math.round(state.rozloha*state.zateplenie_konverzia*24*180/(3.2*1000*910)))
            }
        }
        if (!state.vykurovanievybrate.includes(5)) { state.tuhe = '0'}
        
        
        
        
        
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
    },
    
    setcudzieauto(state, value) {
        state.cudzieauto = value;
    },
    setautobus(state, value) {
        state.autobus = value;
    },
    setkmhodautobus(state, value) {
        state.kmhodautobus = value;
    },
    setvlak(state, value) {
        state.vlak = value;
    },
    setkmhodvlak(state, value) {
        state.kmhodvlak = value;
    },
    settypvlak(state, value) {
        state.typvlak = value;
    },
    setpocetletov(state, value) {
        state.pocetletov = value;
    },
    setmhd(state, value) {
        state.mhd = value;
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
        state.spotreba1 = value;
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
        state.spotreba2 = value;
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
        state.spotreba3 = value;
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
        state.spotreba4 = value;
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
        state.spotreba5 = value;
    },
    setosoby5(state, value) {
        state.osoby5 = value;
    },
    setpalivo5(state, value) {
        state.palivo5 = value;
    },




    setlet1(state, value) {
        state.let1 = value;
    },
    setm1(state, value) {
        state.m1 = value;
    },
    sets1(state, value) {
        state.s1 = value;
    },



    setlet2(state, value) {
        state.let2 = value;
    },
    setm2(state, value) {
        state.m2 = value;
    },
    sets2(state, value) {
        state.s2 = value;
    },


    setlet3(state, value) {
        state.let3 = value;
    },
    setm3(state, value) {
        state.m3 = value;
    },
    sets3(state, value) {
        state.s3 = value;
    },


    setlet4(state, value) {
        state.let4 = value;
    },
    setm4(state, value) {
        state.m4 = value;
    },
    sets4(state, value) {
        state.s4 = value;
    },

    setlet5(state, value) {
        state.let5 = value;
    },
    setm5(state, value) {
        state.m5 = value;
    },
    sets5(state, value) {
        state.s5 = value;
    },

    setlet6(state, value) {
        state.let6 = value;
    },
    setm6(state, value) {
        state.m6 = value;
    },
    sets6(state, value) {
        state.s6 = value;
    },

    setlet7(state, value) {
        state.let7 = value;
    },
    setm7(state, value) {
        state.m7 = value;
    },
    sets7(state, value) {
        state.s7 = value;
    },

    setlet8(state, value) {
        state.let8 = value;
    },
    setm8(state, value) {
        state.m8 = value;
    },
    sets8(state, value) {
        state.s8 = value;
    },

    setlet9(state, value) {
        state.let9 = value;
    },
    setm9(state, value) {
        state.m9 = value;
    },
    sets9(state, value) {
        state.s9 = value;
    },

    setlet10(state, value) {
        state.let10 = value;
    },
    setm10(state, value) {
        state.m10 = value;
    },
    sets10(state, value) {
        state.s10 = value;
    },

    setlet11(state, value) {
        state.let11 = value;
    },
    setm11(state, value) {
        state.m11 = value;
    },
    sets11(state, value) {
        state.s11 = value;
    },

    setlet12(state, value) {
        state.let12 = value;
    },
    setm12(state, value) {
        state.m12 = value;
    },
    sets12(state, value) {
        state.s12 = value;
    },

    setlet13(state, value) {
        state.let13 = value;
    },
    setm13(state, value) {
        state.m13 = value;
    },
    sets13(state, value) {
        state.s13 = value;
    },

    setlet14(state, value) {
        state.let14 = value;
    },
    setm14(state, value) {
        state.m14 = value;
    },
    sets14(state, value) {
        state.s14 = value;
    },

    setlet15(state, value) {
        state.let15 = value;
    },
    setm15(state, value) {
        state.m15 = value;
    },
    sets15(state, value) {
        state.s15 = value;
    },

    setlet16(state, value) {
        state.let16 = value;
    },
    setm16(state, value) {
        state.m16 = value;
    },
    sets16(state, value) {
        state.s16 = value;
    },

    setlet17(state, value) {
        state.let17 = value;
    },
    setm17(state, value) {
        state.m17 = value;
    },
    sets17(state, value) {
        state.s17 = value;
    },

    setlet18(state, value) {
        state.let18 = value;
    },
    setm18(state, value) {
        state.m18 = value;
    },
    sets18(state, value) {
        state.s18 = value;
    },

    setlet19(state, value) {
        state.let19 = value;
    },
    setm19(state, value) {
        state.m19 = value;
    },
    sets19(state, value) {
        state.s19 = value;
    },

    setlet20(state, value) {
        state.let20 = value;
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

    setvlastnenibielatechnika(state, value) {
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
    },
    setsklo(state, value) {
        state.plasty = value;
    },
    setplasty(state, value) {
        state.sklo = value;
    },
    setbioodpad(state, value) {
        state.bioodpad = value;
    },

    setpapierrange(state, value) {
        state.papierrange = value;
    },
    setsklorange(state, value) {
        state.sklorange = value;
    },
    setplastyrange(state, value) {
        state.plastyrange = value;
    },
    setbioodpadrange(state, value) {
        state.bioodpadrange = value;
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