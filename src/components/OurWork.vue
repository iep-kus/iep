<template>
    
    <b-container fluid >
        
        <b-row align-v="center">
            
            
            
            <b-col>
                <div>
                <b-card
                    title="Analýzy"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem; text-align:center;"
                    class="mb-2"
                >
                    <b-card-text>
                    Podrobne skúmajú vymedzenú problematiku a poväčšine obsahujú odporúčania pre "policymakerov". Analýzy sú spravidla dlhšie materiály (30+ strán) určené pre širšiu odbornú verejnosť.
                    </b-card-text>

                    <b-button href="#" variant="primary">Dokumenty</b-button>
                </b-card>
                </div>
            </b-col>
            
            
            
            
            <b-col>
                <div>
                <b-card
                    title="Komentáre"
                    img :src='require(`@/assets/iep-logo_var2.png`)'
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Krátke informatívne dokumenty určené pre širšiu verejnosť a média. Komentáre tiež môžu obsahovať odporúčania.
                    </b-card-text>

                    <b-button href="#" variant="primary">Dokumenty</b-button>
                </b-card>
                </div>
            </b-col>
            
            
            
            
            
            
            <b-col>
                <div>
                <b-card
                    title="Kalkulačky"
                    img :src='require(`@/assets/iep-logo_var2.png`)'
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Názorne ilustrujú závery viacerých našich štúdií a poskytujú priestor na personalizovaný výpočet
                    </b-card-text>

                    <b-button href="#" variant="primary">Dokumenty</b-button>
                </b-card>
                </div>
            </b-col>





        </b-row>
    </b-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>


</style>