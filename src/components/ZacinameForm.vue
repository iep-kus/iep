<template>
    
      
    <b-container fluid>

       
        <div class="zaciname">
            <div class="wrapper">    
                <b-row md="4" style="height: 20vh" align-h="start" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="1" class="text-left">   
                    <b-col offset-md="0.5" cols="4" align-h="start"><h1>Začíname</h1></b-col>
                    
                </b-row>    
                
                <div class="otazka">
                    <b-row  style="margin-bottom:2vh" align-v="center" cols-md="12" cols-sm="12" >      
                        <b-col md="1" cols="1" class="text-right" align-h="start">1.</b-col>
                        <b-col md="5" cols="10" class="text-left" align-h="start">Aký je okres Vášho bydliska?
                            <b-icon-question-circle-fill font-scale="1.2" id="question1"></b-icon-question-circle-fill>
                        </b-col>
                        <b-col md="5" cols="10" class="text-left" offset-md="0" offset="1" > <b-form-select v-model="okres" :options="okresval" label-field="Aký je okres Vášho bydliska?"></b-form-select></b-col>
                        <b-tooltip target="question1" title="V závislosti od výberu priradíme emisnú náročnosť teplárne od ktorej odoberáš teplo a teplú vodu. "  variant="dark"></b-tooltip>
                    </b-row>
                </div>

                <div class="otazka">
                    <b-row  style="margin-bottom:2vh" align-v="center">      
                        <b-col md="1" cols="1" class="text-right">2.</b-col>
                        <b-col md="5" cols="10" class="text-left" align-h="start">Počet členov vo Vašej domácností:</b-col>
                        <b-col md="5" cols="10" class="text-left" offset-md="0" offset="1" >                         
                            <b-form-spinbutton id="clenovia" v-model="clenovia" min="1" max="20"></b-form-spinbutton>
                        </b-col>
                        
                    </b-row>
                </div>

                <div class="otazka">
                    <b-row  style="margin-bottom:2vh" align-v="center">      
                        <b-col md="1" cols="1" class="text-right" >3.</b-col>
                        <b-col md="5" cols="10" class="text-left" align-h="start">Bývam v:</b-col>
                        <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" >                         
                            <b-form-radio-group
                            class="pt-2"
                            v-model="typ"
                            :options="['rodinnom dome', 'bytovom dome']"
                            ></b-form-radio-group>
                        </b-col>
                        
                    </b-row>
                </div>

                <div class="otazka">
                    <b-row  style="margin-bottom:2vh" align-v="center">      
                        <b-col md="1" cols="1" class="text-right">4.</b-col>
                        <b-col v-if="typ=='bytovom dome'" md="5" cols="10" class="text-left" align-h="start">Rozloha môjho bytu:</b-col>
                        <b-col v-if="typ=='rodinnom dome'" md="5" cols="10" class="text-left" align-h="start">Rozloha môjho domu:</b-col>
                        <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" > 
                            <b-form-group>
                                <b-form-input id="rozloha" v-model="rozloha"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </div>

                <div class="otazka">
                    <b-row  style="margin-bottom:2vh" align-v="center">      
                        <b-col md="1" cols="1" class="text-right">5.</b-col>
                        <b-col md="5" cols="10" class="text-left" align-h="start">Zateplenie budovy je: <b-icon-question-circle-fill font-scale="1.2" id="question5"></b-icon-question-circle-fill></b-col>
                        <b-col md="5" cols="10" offset-md="0" offset="1" class="text-left" >                         
                            <b-form-radio-group
                            class="pt-2"
                            v-model="zateplenie"
                            :options="['žiadne', 'čiastočné', 'úplné']"
                            ></b-form-radio-group>
                        </b-col>
                         <b-tooltip target="question5" title="Za úplné považujeme zateplené steny, strechu, okná, dvere. Čiastočné znamená ak je nové/vymenené aspoň niečo z hore uvedeného. Žiadne znamená ak je všeto staré a steny ani strecha nie sú zateplené."  variant="dark"></b-tooltip>
                    </b-row>   
                </div>               
                
            </div>    
        </div>
    </b-container>

    
</template>


<script>



export default {
    name: 'ZacinameForm',
    data() {
      return {
        okresval: [
          { value: null, text: 'Prosím vyberte jednu z možností' },
          { value: 1, text: 'Bánovce nad Bebravou' },
          { value: 2, text: 'Banská Bystrica' },
          { value: 3, text: 'Banská Štiavnica' },
          { value: 4, text: 'Bardejov' },
          { value: 5, text: 'Bratislava' },
          { value: 6, text: 'Brezno' },
          { value: 7, text: 'Bytča' },
          { value: 8, text: 'Čadca' },
          { value: 9, text: 'Detva' },
          { value: 10, text: 'Dolný Kubín' },
          { value: 11, text: 'Dunajská Streda' },
          { value: 12, text: 'Galanta' },
          { value: 13, text: 'Gelnica' },
          { value: 14, text: 'Hlohovec' },
          { value: 15, text: 'Ilava' },
          { value: 16, text: 'Kežmarok' },
          { value: 17, text: 'Komárno' },
          { value: 18, text: 'Košice' },
          { value: 19, text: 'Košice-okolie' },
          { value: 20, text: 'Krupina' },
          { value: 21, text: 'Kysucké Nové Mesto' },
          { value: 22, text: 'Levice' },
          { value: 23, text: 'Levoča' },
          { value: 24, text: 'Liptovský Mikuláš' },
          { value: 25, text: 'Lučenec' },
          { value: 26, text: 'Malacky' },
          { value: 27, text: 'Martin' },
          { value: 28, text: 'Medzilaborce' },
          { value: 29, text: 'Michalovce' },
          { value: 30, text: 'Myjava' },
          { value: 31, text: 'Námestovo' },
          { value: 32, text: 'Nitra' },
          { value: 33, text: 'Nové Meto nad Váhom' },
          { value: 34, text: 'Nové Zámky' },
          { value: 35, text: 'Partizánske' },
          { value: 36, text: 'Pezinok' },
          { value: 37, text: 'Piešťany' },
          { value: 38, text: 'Poltár' },
          { value: 39, text: 'Poprad' },
          { value: 40, text: 'Považská Bystrica' },
          { value: 41, text: 'Prešov' },
          { value: 42, text: 'Prievidza' },
          { value: 43, text: 'Púchov' },
          { value: 44, text: 'Revúca' },
          { value: 45, text: 'Rimavská Sobota' },
          { value: 46, text: 'Rožňava' },
          { value: 47, text: 'Ružomberok' },
          { value: 48, text: 'Sabinov' },
          { value: 49, text: 'Senec' },
          { value: 50, text: 'Senica' },
          { value: 51, text: 'Skalica' },
          { value: 52, text: 'Snina' },
          { value: 53, text: 'Sobrance' },
          { value: 54, text: 'Spišská Nová Ves' },
          { value: 55, text: 'Stará Ľubovňa' },
          { value: 56, text: 'Stropkov' },
          { value: 57, text: 'Svidník' },
          { value: 58, text: 'Šaľa' },
          { value: 59, text: 'Topoľčany' },
          { value: 60, text: 'Trebišov' },
          { value: 61, text: 'Trenčín' },
          { value: 62, text: 'Trnava' },
          { value: 63, text: 'Turčianske Teplice' },
          { value: 64, text: 'Tvrdošín' },
          { value: 65, text: 'Veľký Krtíš' },
          { value: 66, text: 'Vranov nad Topľou' },
          { value: 67, text: 'Zlaté Moravce' },
          { value: 68, text: 'Zvolen' },
          { value: 69, text: 'Žarnovica' },
          { value: 70, text: 'Žiar nad Hronom' },
          { value: 71, text: 'Žilina' },

        
        
        ],
        
        typdomu:'bytovom dome',

      }
    },
    
    computed: {
        okres: {
            get() {
                return this.$store.state.okres
            },
            set(value) {
                this.$store.commit('setokres',value)
            }
        },

        clenovia: {
            get() {
                return this.$store.state.clenovia
            },
            set(value) {
                this.$store.commit('setclenovia',value);
                this.$store.commit('prepocetenergie');
                this.$store.commit('prepocetzateplenie');
            }
        },

        typ: {
            get() {
                return this.$store.state.typ
            },
            set(value) {
                this.$store.commit('settyp',value);
                this.$store.commit('prepocetzateplenie');
                this.$store.commit('prepocetenergie');
            }
            
        },

        rozloha: {
            get() {
                return this.$store.state.rozloha
            },
            set(value) {
                this.$store.commit('setrozloha',value);
                this.$store.commit('prepocetzateplenie');
                this.$store.commit('prepocetenergie');
            }
        },

        zateplenie: {
            get() {
                return this.$store.state.zateplenie
            },
            set(value) {
                this.$store.commit('setzateplenie',value)
                this.$store.commit('prepocetzateplenie')
                this.$store.commit('prepocetenergie');
            }
        },

    
    }

}

</script>

<style  scoped>
.zaciname {
    background-color: #F2F2F2;
    overflow: auto;
    width:100%;
}

.wrapper{
    width: 100%;
    padding: 5%;
}

.obsah {
    margin-left: 5%;
    margin-right: 5%;
}

.otazka {
    margin-bottom: 0.5rem;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}


</style>
