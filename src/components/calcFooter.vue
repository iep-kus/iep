<template>
    
    <b-container fluid >
        <div class="background">  
            
            <div class="obsah">

                <div class="text-wrapper">
                    <b-row align-v="center">
                        <b-col><p>V prípade akýchkoľvek nápadov na zlepšenie kalkulačky alebo pri nájdení nejakých chýb, neváhaj a kontaktuj nás na <a href = "mailto:iep@enviro.gov.sk">iep@enviro.gov.sk</a>.</p></b-col>    
                    </b-row>
                    <b-row align-v="center">
                        <b-col><p>Výpočty majú len informatívny charakter a nie sú právne záväzné. Pre zhliadnutie metodiky ku kalkulačke kliknite <a  href="https://www.minzp.sk/files/iep/metodika_uhlikova_stopa.pdf">tu.</a></p></b-col>    
                    </b-row>
                    <b-row align-v="center">
                        <b-col><p>Upozornenie: kalkulačka má obmezenia funkčnosti v niektorých prehliadačoch a ich režimoch (Explorer, Firefox (súkromné okno), Vivaldi a Ecosia). Odporúčame použiť Chrome, Operu, Edge alebo Safari.</p></b-col>    
                    </b-row>
                   
                </div>    
            </div>
            
        </div>

    </b-container>
</template>

<script>

export default {
    name: 'calcFooter',
    components: {},
}
</script>

<style scoped>

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}


.background {
    background-color: rgba(0, 0, 0, 0.8);
}

.obsah {
    padding: 3%;
}



.text-wrapper {
    color: white;
    margin-left: 10%;
    margin-right: 10%;
}

@media only screen and (max-width: 768px){
  .text-wrapper {
    color: white;
     margin-left: 0%;
    margin-right: 0%;
  }
}

</style>