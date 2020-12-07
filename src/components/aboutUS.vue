<template>
    
    <b-container fluid >
        <div class="background">  
            <div class="obsah">
                <div data-aos="slide-up" class="title">   
                    <b-row align-v="center">
                        <b-col><h2>Kto sme?</h2></b-col>    
                    </b-row>
                </div> 
                <div data-aos="slide-up" data-aos-duration="1000" class="text-wrapper">
                    <b-row align-v="center">
                        <b-col><p>Inštitút environmentálnej politiky (IEP) je analytickým útvarom Ministerstva životného prostredia SR (MŽP SR). Našim poslaním je poskytovať kvalitné a spoľahlivé analýzy a prognózy v oblasti životného prostredia pre slovenskú vládu a verejnosť. Objektivita IEP je zabezpečená jeho nezávislosťou. Výstupy nemusia nutne odzrkadľovať oficiálne názory MŽP SR, ich cieľom je podnecovať a zlepšovať odbornú a verejnú diskusiu na aktuálne témy. IEP vedie bývalý dlhoročný analytik IFP a priemerný vek analytikov IEP je 32 rokov.</p></b-col>    
                    </b-row>
                    <b-row align-v="center">
                        <b-col><p>Dlhodobo spolupracujeme so zahraničnými organizáciami, v rámci čoho sme realizovali a naďalej realizujeme spoločné projekty v spolupráci s OECD, či Svetovou bankou, v rámci ktorých boli naši analytici vyslaní na niekoľko týždňov priamo do danej organizácie.</p></b-col>    
                    </b-row>

                    <b-row align-v="center">
                        <b-col></b-col>    
                    </b-row>
                </div>    
            </div>
        </div>

    </b-container>
</template>

<script>
export default {
    name: 'AboutUs',
    components: {},
}
</script>

<style scoped>

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}


.background {
    background: linear-gradient(180deg, rgba(100, 100, 100, 0.64) 5.41%, rgba(1, 1, 1, 0) 100%),url('../assets/footer-color.jpg') 40% 40%;
}

.obsah {
    padding: 5%;
}

.title {
    color: white;
    font-family: 'montserrat-bold';
    margin-bottom: 2%;
}

.text-wrapper {
    color:white;
}

</style>