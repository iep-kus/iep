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

    
    
   pocetaut: 1,





    emisie_byvanie: [210.6,449.7375,520.35,159.6,137.2,128.945],

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

        if (state.vykurovanievybrate.includes(4)){
            if (state.selected4=='litrov'){
                state.lpg = String(Math.round(state.rozloha*state.zateplenie_konverzia))
            }
            else {
                state.lpg = String(Math.round(state.rozloha*state.zateplenie_konverzia*state.lpg_jednotky))
            }
        }
        if (!state.vykurovanievybrate.includes(4)) { state.lpg= '0'}

        
        if (state.vykurovanievybrate.includes(5)){
            if (state.selected5=='prm'){
                state.tuhe = 10
            }
            else {
                state.tuhe = 8700
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
        state.plastyrange = value;
    },
    setplastyrange(state, value) {
        state.sklorange = value;
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


    

 },
 actions: {}
});