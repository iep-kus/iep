<template>
    <b-container fluid>
        <div id="metodology" class="obsah">
           
            <b-row class="title">
                <b-col class="text-left">
                    <h1>Metodológia</h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4" lg="2" >
                    
                </b-col>
                <b-col cols="8" lg="3" >
                    
                </b-col>
                <b-col cols="12" lg="5" offset-lg="2" class="green">
                    <div class="green">
                        <p>ako sa mas</p>
                    </div>
                </b-col>
            </b-row>
            
            
        </div>
    </b-container>

</template>

<script>



export default {
    name: 'Metodologia',
    components: {},
}
</script>

<style scoped>


.obsah {
    padding: 10%;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

.title {
    margin-bottom: 5%;
    border-bottom: 1px solid gray;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

</style>