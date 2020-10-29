<template>

    <div class="container">
        <div class="kontakty">

            
         
            <div class="profile-image-wrapper">
                <img :src='require(`@/assets/contacs.png`)' />
            </div>

            <div class="profile-content-wrapper">
                <p1>MARTIN HALUS</p1>
                <h1>martin.halus@enviro.gov.sk</h1>
                <p3>Riaditeľ</p3>
            </div>   



        
                
            <div class="profile-image-wrapper">
                <img :src='require(`@/assets/contacs.png`)' />
            </div>

            <div class="profile-content-wrapper">
                <p1>RICHARD SOKOL</p1>
                <h1>richard.sokol@enviro.gov.sk</h1>
                <p3>Stážista</p3>
            </div>
        

        </div>
    </div>
</template>

<script>
export default {
    name: 'Kontakt',
}
</script>

<style scoped>

.container {
    display: grid;
    grid-template-columns: 1fr;

}

.kontakty {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    top: 30px;
}


.profile-image-wrapper img {
    width: 100px;
    height: 100px;
    padding: 80px;
    position: relative;
    
}

.profile-content-wrapper {
    margin-top: 55px;
    color: #6f6f6f;
    font-size: 16px;
}

.profile-content-wrapper h1 {
    font-weight: 600;
    color: #ff6600;
    font-size: 20px;
}

</style>