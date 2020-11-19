<template>
    <b-container fluid>
        <div class="vypocitat">   
            <div class="obsah">
                <b-row class="text-center" style="margin-left:0%">
                    <b-col align-h="start"><div class="title"><h1>Hotovo!</h1></div></b-col>
                </b-row>
                <b-row class="text-left" style="margin-left:0%">
                    <b-col align-h="start"><div class="undertitle"><h4>Pre výpočet tvojej uhlíkovej stopy stlač tlačítko <strong>Vypočítať!</strong></h4></div></b-col>
                </b-row>
            
                
                <b-button class="zacat" @click="save_data()" >Vypočítať!</b-button>
            </div>
            



            
            
        </div>
    </b-container>
</template>


<script>
import database from '../firebase/index.js'

export default {
    name: 'Vypocitat',
    methods: {
        async save_data() {
            this.$store.commit('setpath_vypocitat')
            this.uhlikova_stopa_celkovo = this.uhlikova_stopa_byvanie + this.uhlikova_stopa_doprava + this.uhlikova_stopa_jedlo + this.uhlikova_stopa_spotreba + this.uhlikova_stopa_ziv_styl
            try {
            const user_report = database.ref('/report').push();
            await user_report.set({
                celkovo: this.uhlikova_stopa_celkovo,
                byvanie: this.uhlikova_stopa_byvanie,
                doprava: this.uhlikova_stopa_doprava,
                jedlo: this.uhlikova_stopa_jedlo,
                spotreba: this.uhlikova_stopa_spotreba,
                zivotny_styl: this.uhlikova_stopa_ziv_styl,
                
            });
            this.$router.push({name:'Kalkulacka_graf',params: {user_key : user_report.key}})
            
            // this will be the unique hash
            console.log(user_report.key);
            } catch (err) {
            console.log(err);
            }

            
        }
    },

    computed: {
        uhlikova_stopa_byvanie: {
            get() {
                return this.$store.state.uhlikova_stopa_byvanie
            },
        },
        uhlikova_stopa_doprava: {
            get() {
                return this.$store.state.uhlikova_stopa_doprava
            },
        },
        uhlikova_stopa_jedlo: {
            get() {
                return this.$store.state.uhlikova_stopa_jedlo
            },
        },
        uhlikova_stopa_spotreba: {
            get() {
                return this.$store.state.uhlikova_stopa_spotreba
            },
        },
        uhlikova_stopa_ziv_styl: {
            get() {
                return this.$store.state.uhlikova_stopa_ziv_styl
            },
        },
        uhlikova_stopa_celkovo: {
            get() {
                return this.$store.state.uhlikova_stopa_celkovo
            },
            set(value) {
                this.$store.commit('setuhlikova_stopa_celkovo',value)
            }
        },
    }
    
}

</script>

<style scoped>
h3 {
    color: whitesmoke;
}

h1 {
    color: white;
    font-family: 'montserrat-bold' ;
    font-size: 3rem;
}

.title {
    margin-left: 0%;
   
    
}
.undertitle {
    margin-top: 5%;
    color: white;
    text-align: center;
}

.box {
    position: relative;
    left: 50%;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.vypocitat {
    overflow: auto;
    background-color: #FF6600;
}

.obsah{
    padding: 5%;
}


.zacat {
    position: relative;
    text-align: center;
    top: 5vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    vertical-align: middle;
    padding: 1rem;
    width: 20rem;
    height: 6rem; 
    background-color: #FF6600;
    border-radius: 20px; 
    border: 3px solid white;
    color: white;
    font-size: 2.5rem;
    font-weight: 1000;
    transition: color 0.5s;
    z-index: 1;
    margin-bottom: 10%;
    


   
}

.button_vysledky {
    color: #FF6600;
    text-align: center;
    position: center;
    margin-left: 2.5rem;
    margin-bottom: 10%;
}

.zacat {
  transition-duration: 0.4s;
}

.zacat:hover {
  background-color:white; /* Green */
  color: #FF6600;;
}


</style>
