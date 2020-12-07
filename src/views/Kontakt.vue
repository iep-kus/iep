<template>
    <b-container fluid>
        <div id="kontakt" class="obsah">
           <b-row>
               <b-col cols="12" xl="4">
                    <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>MARTIN HALUŠ</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:martin.halus@enviro.gov.sk"><p>martin.halus@enviro.gov.sk</p></a></div>
                            <p>Riaditeľ</p>
                        </div>
                    </div> 
               </b-col>
               <b-col cols="12" xl="4">
                   <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>JANA MIKUDOVÁ</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:jana.mikudova@enviro.gov.sk"><p>jana.mikudova@enviro.gov.sk</p></a></div>
                            <p>Asistentka</p>
                        </div>
                    </div> 
               </b-col>
               <b-col cols="12" xl="4">
                   <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>VERONIKA ANTALOVÁ</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:veronika.antalova@enviro.gov.sk"><p>veronika.antalova@enviro.gov.sk</p></a></div>
                            <p>Analytička</p>
                        </div>
                    </div> 
               </b-col>
           </b-row>
           <b-row>
               <b-col cols="12" xl="4">
                    <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>JÁN DRÁB</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:martin.jan.drab@enviro.gov.sk"><p>jan.drab@enviro.gov.sk</p></a></div>
                            <p>Analytik</p>
                        </div>
                    </div> 
               </b-col>
               <b-col cols="12" xl="4">
                   <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>MAREK ENGEĽ</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:marek.engel@enviro.gov.sk"><p>marek.engel@enviro.gov.sk</p></a></div>
                            <p>Analytik</p>
                        </div>
                    </div> 
               </b-col>
               <b-col cols="12" xl="4">
                   <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>MARTIN GÁLIS</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:martin.galis@enviro.gov.sk"><p>martin.galis@enviro.gov.sk</p></a></div>
                            <p>Analytik</p>
                        </div>
                    </div> 
               </b-col>
           </b-row>
           <b-row>
               <b-col cols="12" xl="4">
                    <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>KRISTÍNA MOJZESOVÁ</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:kristina.mojzesova@enviro.gov.sk"><p>kristina.mojzesova@enviro.gov.sk</p></a></div>
                            <p>Analytička</p>
                        </div>
                    </div> 
               </b-col>
               <b-col cols="12" xl="4">
                   <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>KATARÍNA NANÁSIOVÁ</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:katarina.nanasiova@enviro.gov.sk"><p>katarina.nanasiova@enviro.gov.sk</p></a></div>
                            <p>Analytička</p>
                        </div>
                    </div> 
               </b-col>
               <b-col cols="12" xl="4">
                   <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>STELLA SLUČIAKOVÁ</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:stella.sluciakova@enviro.gov.sk"><p>stella.sluciakova@enviro.gov.sk</p></a></div>
                            <p>Analytička</p>
                        </div>
                    </div> 
               </b-col>
           </b-row>
           <b-row>
               <b-col cols="12" xl="4">
                    <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>PAVOL ŠIROKÝ</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:pavol.siroky@enviro.gov.sk"><p>pavol.siroky@enviro.gov.sk</p></a></div>
                            <p>Analytik</p>
                        </div>
                    </div> 
               </b-col>
               <b-col cols="12" xl="4">
                   <div class="profile_content">    
                        <i class="far fa-address-card"></i>
                        <div class="profile_content_wrapper">
                            <p>RICHARD SOKOL</p>
                            <div class="profile_content_wrapper_orange"><a href = "mailto:richard.sokol@enviro.gov.sk"><p>richard.sokol@enviro.gov.sk</p></a></div>
                            <p>Stážista</p>
                        </div>
                    </div> 
               </b-col>
               
           </b-row>
            
            
        </div>
    </b-container>    
            
            
        
</template>

<script>
export default {
    name: 'Kontakt',
}
</script>

<style lang="scss" scoped>

.container {
    display: grid;
    grid-template-columns: 1fr;

}

.obsah {
    padding: 5%;
    min-height: 120vh;
}

.kontakty {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    top: 30px;
}


.profile_content {
    display: flex;
    justify-content: left;
    margin-bottom: 2rem;
    i {
      color: rgba(71, 71, 71, 1);;
      font-size: 5rem;
      margin-right: 5%;
      margin-top:1%;
      transition: all .3s ease-in-out;
      text-align: left;
    }
}

@media only screen and (max-width: 768px){
    .profile_content {
    display: flex;
    justify-content: left;
    margin-bottom: 2rem;
    i {
      color: rgba(71, 71, 71, 1);;
      font-size: 2rem;
      margin-right: 5%;
      margin-top:1.5rem;
      transition: all .3s ease-in-out;
      text-align: left;
    }
}
}

.profile_content_wrapper{
    text-align: left;
}

.profile_content_wrapper_orange {
    color: #ff6600;
}

p {
    margin-bottom: 0.5rem;
}



</style>