<template>


    <b-container fluid >
                
                
        <div class="item">
            <div class="doprava">
                <div class="wrapper-right">    
                    
                    
                    
                    
                    <b-row  style="margin-bottom:2vh" align-h="start" align-v="center"  class="text-left">   
                        <b-col offset-md="0.5" align-h="start"><h1>Doprava</h1><b-icon-question-circle-fill font-scale="2" id="doprava-title"></b-icon-question-circle-fill></b-col>
                        <b-tooltip target="doprava-title" title="Vrámci celej tejto kategórie prosím nezapočítavajte služobné cesty."  variant="dark"></b-tooltip>
                    </b-row> 
                    
                    
                    
                    
                    
                    <div class="otazka" >
                        <b-row  style="margin-bottom:2vh" align-v="center">      
                            <b-col md="1" cols="1" class="text-right">8.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko áut vlastní Vaša domácnosť?</b-col>
                            <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                <b-form-spinbutton v-on:change="Resetauta() && countEmissions_doprava()"  id="pocetauta" v-model="pocetaut" min="0" max="5"></b-form-spinbutton>
                            </b-col>
                        </b-row> 

                        <div v-if="details_doprava==false">
                            <b-row  style="margin-bottom:2vh" align-v="center">      
                                <b-col md="1" cols="1" class="text-right"></b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Ako často využívate vlastné auto? <b-icon-question-circle-fill font-scale="1.2" id="question8"></b-icon-question-circle-fill></b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                    <b-form-select v-on:change="countEmissions_doprava()" v-model="frekvenciavlastne" :options="frekvenciadoprava"></b-form-select>
                                </b-col>
                                <b-tooltip target="question8" title="Cieľom je zistiť objem CO2e z automobilovej dopravy za posledný rok. Treba zahrnúť všetky cesty autom, cestovanie do práce ale aj cesty v roli spolujazdca. Nezapočítavajte služobné cesty."  variant="dark"></b-tooltip>
                            </b-row> 
                        </div>


                        <div v-if="details_doprava==true">
                            <div class="auto" v-if="pocetaut!==0">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="10">
                                        <div class="carcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Auto 1</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Koľko kilometrov ročne najazdíte?</p>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="kilometre1" v-model="kilometre1"></b-form-input>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                    <b-col  cols=12 lg="4" class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col  cols=12 lg="4" class="text-left" >
                                                        Aká je reálna spotreba Vášho auta?
                                                    </b-col>
                                                    <b-col cols=4 lg="1" class="text-left" >
                                                    <b-form-input v-on:change="countEmissions_doprava()"  id="spotreba1" v-model="spotreba1"></b-form-input>
                                                    </b-col>
                                                    <b-col  cols=8 lg="3" class="text-left" >
                                                    <b-form-select v-on:change="countEmissions_doprava()" v-model="palivo1" :options="palivo"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols="1" cols-lg="3">
                                                    <b-col class="text-left" >
                                                    
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aký je priemerný počet osôb v aute?</p>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    <b-form-spinbutton v-on:change="countEmissions_doprava()" id="osoby1" v-model="osoby1" min="0" max="9"></b-form-spinbutton>
                                                    </b-col>
                                                </b-row>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                                

                                <div class="auto" v-if="pocetaut>1">
                                    <b-row> 
                                        <b-col cols="1" class="text-right"></b-col>
                                        <b-col cols="10">
                                            <div class="carcard">
                                                <div class="carcardtext">
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col class="text-left" >
                                                            <div class="nadpis">Auto 2</div>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p>Koľko kilometrov ročne najazdíte?</p>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <b-form-input v-on:change="countEmissions_doprava()" id="kilometre2" v-model="kilometre2"></b-form-input>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col  cols=12 lg="4" class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col  cols=12 lg="4" class="text-left" >
                                                            Aká je reálna spotreba Vášho auta?
                                                        </b-col>
                                                        <b-col cols=4 lg="1" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="spotreba2" v-model="spotreba2"></b-form-input>
                                                        </b-col>
                                                        <b-col  cols=8 lg="3" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="palivo2" :options="palivo"></b-form-select>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p>Aký je priemerný počet osôb v aute?</p>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                        <b-form-spinbutton v-on:change="countEmissions_doprava()" id="osoby2" v-model="osoby2" min="0" max="9"></b-form-spinbutton>
                                                        </b-col>
                                                    </b-row>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>

                                <div class="auto" v-if="pocetaut>2">
                                    <b-row> 
                                        <b-col cols="1" class="text-right"></b-col>
                                        <b-col cols="10">
                                            <div class="carcard">
                                                <div class="carcardtext">
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col class="text-left" >
                                                            <div class="nadpis">Auto 3</div>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p>Koľko kilometrov ročne najazdíte?</p>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <b-form-input v-on:change="countEmissions_doprava()" id="kilometre3" v-model="kilometre3"></b-form-input>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col  cols=12 lg="4" class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col  cols=12 lg="4" class="text-left" >
                                                            Aká je reálna spotreba Vášho auta?
                                                        </b-col>
                                                        <b-col cols=4 lg="1" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="spotreba3" v-model="spotreba3"></b-form-input>
                                                        </b-col>
                                                        <b-col  cols=8 lg="3" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="palivo3" :options="palivo"></b-form-select>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p>Aký je priemerný počet osôb v aute?</p>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                        <b-form-spinbutton v-on:change="countEmissions_doprava()" id="osoby3" v-model="osoby3" min="0" max="9"></b-form-spinbutton>
                                                        </b-col>
                                                    </b-row>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>

                                <div class="auto" v-if="pocetaut>3">
                                    <b-row> 
                                        <b-col cols="1" class="text-right"></b-col>
                                        <b-col cols="10">
                                            <div class="carcard">
                                                <div class="carcardtext">
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col class="text-left" >
                                                            <div class="nadpis">Auto 4</div>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p>Koľko kilometrov ročne najazdíte?</p>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <b-form-input v-on:change="countEmissions_doprava()" id="kilometre4" v-model="kilometre4"></b-form-input>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col  cols=12 lg="4" class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col  cols=12 lg="4" class="text-left" >
                                                            Aká je reálna spotreba Vášho auta?
                                                        </b-col>
                                                        <b-col cols=4 lg="1" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="spotreba4" v-model="spotreba4"></b-form-input>
                                                        </b-col>
                                                        <b-col  cols=8 lg="3" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="palivo4" :options="palivo"></b-form-select>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p>Aký je priemerný počet osôb v aute?</p>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                        <b-form-spinbutton v-on:change="countEmissions_doprava()" id="osoby4" v-model="osoby4" min="0" max="9"></b-form-spinbutton>
                                                        </b-col>
                                                    </b-row>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>

                                <div class="auto" v-if="pocetaut>4">
                                    <b-row > 
                                        <b-col cols="1" class="text-right"></b-col>
                                        <b-col cols="10">
                                            <div class="carcard">
                                                <div class="carcardtext">
                                                    <b-row align-v="center" cols="1" cols-lg="3">
                                                        <b-col class="text-left" >
                                                            <div class="nadpis">Auto 5</div>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p>Koľko kilometrov ročne najazdíte?</p>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <b-form-input v-on:change="countEmissions_doprava()" id="kilometre5" v-model="kilometre5"></b-form-input>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" cols="1" cols-lg="3">
                                                        <b-col  cols=12 lg="4" class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col  cols=12 lg="4" class="text-left" >
                                                            Aká je reálna spotreba Vášho auta?
                                                        </b-col>
                                                        <b-col cols=4 lg="1" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="spotreba5" v-model="spotreba5"></b-form-input>
                                                        </b-col>
                                                        <b-col  cols=8 lg="3" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="palivo5" :options="palivo"></b-form-select>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" cols="1" cols-lg="3">
                                                        <b-col class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p>Aký je priemerný počet osôb v aute?</p>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                        <b-form-spinbutton v-on:change="countEmissions_doprava()" id="osoby5" v-model="osoby5" min="0" max="9"></b-form-spinbutton>
                                                        </b-col>
                                                    </b-row>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </div>   
                    </div>

                    <div class="otazka">
                        <b-row  style="margin-bottom:2vh" align-v="center" v-if="details_doprava==true">      
                            <b-col md="1" cols="1" class="text-right">8b.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko kilometrov ste za posledný rok cestovali cudzími autami?</b-col>
                            <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                <b-form-input v-on:change="countEmissions_doprava()" v-model="cudzieauto" placeholder="Vložte údaj"></b-form-input>
                            </b-col>
                            
                        </b-row>
                        <div v-if="details_doprava==false">
                            <b-row  style="margin-bottom:2vh" align-v="center">      
                                <b-col md="1" cols="1" class="text-right">8b.</b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Ako často využívate dopravu cudzím autom za posledný rok (BlaBlaCar, Uber, Taxi, kamarát...)?</b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                    <b-form-select v-model="frekvenciacudzie" v-on:change="countEmissions_doprava()" :options="frekvenciadoprava"></b-form-select>
                                </b-col>
                            </b-row> 
                        </div>
                    </div>
                    
                    
                    <div class="otazka" >
                        <b-row  style="margin-bottom:2vh" align-v="center" v-if="details_doprava==true">      
                            <b-col md="1" cols="1" class="text-right">9.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko hodín/kilometrov si cestoval autobusmi za posledný/priemerný týždeň?
                                <b-icon-question-circle-fill font-scale="1.2" id="question9"></b-icon-question-circle-fill>
                            </b-col>
                            <b-tooltip target="question9" title="Medzi tieto autobusy rátame regionálne, medzimestské ale aj diaľkové autobusy"  variant="dark"></b-tooltip>
                            <b-col md="3" cols="6" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-input v-on:change="countEmissions_doprava()" v-model="autobus" placeholder="Vložte údaj"></b-form-input></b-col>
                            <b-col md="2" cols="5"  class="text-left" align-h="start"><b-form-select v-on:change="countEmissions_doprava()" v-model="kmhodautobus" :options="['km', 'hod']"></b-form-select></b-col>
                        </b-row>

                        <div v-if="details_doprava==false">
                            <b-row  style="margin-bottom:2vh" align-v="center">      
                                <b-col md="1" cols="1" class="text-right">9.</b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Ako často využívate hromadnú dopravu za posledný rok? (okrem vlakovej)</b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                    <b-form-select v-model="frekvenciamhd" v-on:change="countEmissions_doprava()" :options="frekvenciadoprava"></b-form-select>
                                </b-col>
                            </b-row> 
                        </div>
                    </div>


                    <div class="otazka" >
                        <b-row  style="margin-bottom:2vh" align-v="center" v-if="details_doprava==true">      
                            <b-col md="1" cols="1" class="text-right">10.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko kilometrov si cestoval vlakmi za posledný/priemerný týždeň?</b-col>
                            <b-col md="3" cols="6" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-input v-on:change="countEmissions_doprava()" v-model="vlak" placeholder="Vložte údaj"></b-form-input></b-col>
                            <b-col md="2" cols="5" class="text-left" align-h="start"><b-form-select v-on:change="countEmissions_doprava()" v-model="kmhodvlak" :options="['km', 'hod']"></b-form-select></b-col>
                        </b-row>
                    
                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="center" v-if="details_doprava==true">      
                                <b-col md="1" cols="1" class="text-right"></b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Akým typom vlaku prevažne cestuješ?</b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-select v-on:change="countEmissions_doprava()" v-model="typvlak" :options="['elektrický', 'naftový' , 'neviem' , 'oba']"></b-form-select></b-col>
                            </b-row>
                        </div>

                        <div v-if="details_doprava==false">
                            <b-row  style="margin-bottom:2vh" align-v="center">      
                                <b-col md="1" cols="1" class="text-right">10.</b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Ako často využívate vlakovú dopravu za posledný rok?</b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                    <b-form-select v-on:change="countEmissions_doprava()" v-model="frekvenciavlak" :options="frekvenciadoprava"></b-form-select>
                                </b-col>
                            </b-row> 
                        </div>
                    </div>



                    <div class="otazka" v-if="details_doprava==true">
                        <b-row  style="margin-bottom:2vh" align-v="center">      
                            <b-col md="1" cols="1" class="text-right">12.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko hodín/kilometrov si cestoval MHD (električkami, autobusmi, trolejbusmi) za posledný/priemerný týždeň?</b-col>
                            <b-col md="3" cols="6" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-input v-on:change="countEmissions_doprava()" v-model="mhd" placeholder="Vložte údaj"></b-form-input></b-col>
                            <b-col md="2" cols="5" class="text-left" align-h="start"><b-form-select v-on:change="countEmissions_doprava()" v-model="kmhodmhd" :options="['km', 'hod']"></b-form-select></b-col>
                        </b-row> 

                    </div>



                    <div class="otazka">
                        <b-row  style="margin-bottom:2vh" align-v="center" >      
                            <b-col md="1" cols="1" class="text-right" v-if="details_doprava==true">13.</b-col>
                            <b-col md="1" cols="1" class="text-right" v-if="details_doprava==false">11.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko letov si absolvoval za posledný rok?
                                <b-icon-question-circle-fill font-scale="1.2" id="question13"></b-icon-question-circle-fill>
                            </b-col>
                            <b-tooltip target="question13" title="Za jeden let považujeme či už jednosmerný alebo aj spiatočný let. Zahrnúť len súkromné lety nie služobné.  "  variant="dark"></b-tooltip>
                            <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                <b-form-spinbutton v-on:change="Resetlet() && countEmissions_doprava()" id="pocetletov" v-model="pocetletov" min="0" max="20"></b-form-spinbutton>
                            </b-col>
                        </b-row>
                    </div>
















































                        <div v-if="details_doprava==true">
                            <div class="let" v-if="pocetletov>0">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 1</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let1" v-model="let1"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m1" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col lg="2" class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s1" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>1">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 2</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let2" v-model="let2"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m2" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s2" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>2">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 3</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let1" v-model="let3"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m3" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s3" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>3">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 4</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let1" v-model="let4"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m4" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s4" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>4">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 5</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let1" v-model="let5"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m5" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s5" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>5">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 6</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let6" v-model="let6"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m6" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s6" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>6">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 7</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let7" v-model="let7"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m7" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s7" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>7">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 8</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let8" v-model="let8"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m8" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s8" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>8">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 9</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let9" v-model="let9"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m9" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s9" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>9">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 10</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let10" v-model="let10"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m10" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1" >
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s10" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>10">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 11</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let11" v-model="let11"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m11" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s11" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>11">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 12</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let1" v-model="let12"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m12" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s12" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>12">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 13</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let13" v-model="let13"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m13" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s13" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>13">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 14</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let14" v-model="let14"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m14" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s14" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>14">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 15</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let15" v-model="let15"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m15" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s15" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>15">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 16</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let16" v-model="let16"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m16" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s16" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>16">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 17</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let17" v-model="let17"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m17" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s17" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>17">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 18</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let18" v-model="let18"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m18" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s18" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>18">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 19</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let19" v-model="let19"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m19" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s19" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="let" v-if="pocetletov>19">
                                <b-row > 
                                    <b-col cols="1" class="text-right"></b-col>
                                    <b-col cols="11" lg="10">
                                        <div class="flightcard">
                                            <div class="carcardtext">
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-left" >
                                                        <div class="nadpis">Let 20</div>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p>Aká bola dĺžka daného letu? (jednosmerne)</p>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input v-on:change="countEmissions_doprava()" id="let20" v-model="let20"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-on:change="countEmissions_doprava()" v-model="m20" :options="lietanie"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols-lg="4" cols="1">
                                                    <b-col class="text-center" >
                                                        <h4> </h4>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    Bol daný let spiatočný?
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-radio-group v-on:change="countEmissions_doprava()" class="pt-2" v-model="s20" :options="spiatocnost"></b-form-radio-group>
                                                    </b-col>
                                                    <b-col></b-col>
                                                </b-row>
                                            
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>

                                


                            </div>
                        </div>

                        <b-row align-h="center">
                            <b-col align-v="center">
                                <div >
                                    <b-button class="zacat" :pressed.sync="details_doprava" @click="countEmissions_doprava()">podrobnejšie</b-button>
                                </div>
                            </b-col>
                        </b-row>


                        

                </div>    
            </div> 
        </div>
    </b-container>

</template>


<script>


export default {
    name: 'Doprava',
    components: {},
    data() {
      return {



        frekvenciadoprava: [
         
          { value: 1, text: 'Môj jediný spôsob dopravy' },
          { value: 2, text: 'Každý deň' },
          { value: 3, text: 'Niekoľkokrát týždenne' },
          { value: 4, text: 'Príležitostne' },
          { value: 5, text: 'Niekoľkokrát ročne' },
          { value: 6, text: 'Vôbec' },
          { value: 7, text: 'Raz za 2 týždne východ-západ a späť' }
        ], 


        kilometre_cudzie_doprava: [15000,11888,8000,4000,1000,0,23400],
        kilometre_hromadna_doprava: [3750,2972,2000,1000,250,0,23400],
        kilometre_vlakova_doprava: [15000,11888,8000,4000,1000,0,23400],



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

        palivo: [
         
          { value: 1, text: 'litrov benzínu na 100 km' },
          { value: 2, text: 'litrov nafty na 100 km' },
          { value: 3, text: 'litrov LPG na 100 km' },
          { value: 4, text: 'kg CNG na 100 km' },
          { value: 5, text: 'litrov biodieselu na 100 km' },
          { value: 6, text: 'litrov bioetanolu na 100 km' },
          { value: 7, text: 'kWh elektriky na 100 km' },
          
        ], 

        lietanie: [
         
          { value: 1, text: 'hod' },
          { value: 2, text: 'km' }
 
        ], 

        spiatocnost: [
         
          { value: 2, text: 'Áno' },
          { value: 1, text: 'Nie' }
        ], 

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



        ef_cudzie: 0.1332,
        ef_benzin: 2.392,
        ef_nafta: 2.64,
        ef_lpg: 1.665,
        ef_cng: 2.666,
        ef_biodiesel: 0.1658,
        ef_bioetanol: 0.00837,
        ef_elektrika: 0.169,
        
        
      }
    },

    mounted() {
            this.countEmissions_doprava();
    },
    
    methods: {
        
        Resetauta() {
            
            if(this.pocetaut<1) {this.kilometre1=0;}
            if(this.pocetaut<2) {this.kilometre2=0;}
            if(this.pocetaut<3) {this.kilometre3=0;}
            if(this.pocetaut<4) {this.kilometre4=0;}
            if(this.pocetaut<5) {this.kilometre5=0;}
            this.countEmissions_doprava()
        },
        Resetlet() {
            if(this.pocetletov<1){this.let1=0}
            if(this.pocetletov<2){this.let2=0}
            if(this.pocetletov<3){this.let3=0}
            if(this.pocetletov<4){this.let4=0}
            if(this.pocetletov<5){this.let5=0}
            if(this.pocetletov<6){this.let6=0}
            if(this.pocetletov<7){this.let7=0}
            if(this.pocetletov<8){this.let8=0}
            if(this.pocetletov<9){this.let9=0}
            if(this.pocetletov<10){this.let10=0}
            if(this.pocetletov<11){this.let11=0}
            if(this.pocetletov<12){this.let12=0}
            if(this.pocetletov<13){this.let13=0}
            if(this.pocetletov<14){this.let14=0}
            if(this.pocetletov<15){this.let15=0}
            if(this.pocetletov<16){this.let16=0}
            if(this.pocetletov<17){this.let17=0}
            if(this.pocetletov<18){this.let18=0}
            if(this.pocetletov<19){this.let19=0}
            if(this.pocetletov<20){this.let20=0}
            this.countEmissions_doprava()
        },
        countEmissions_doprava() {
            this.emisie_doprava = [this.emisie_auta()+this.emisie_cudzie(), this.emisie_hromadna(), this.emisie_vlakova(), this.emisie_letecka()];
            
            this.uhlikova_stopa_doprava = Math.round(this.emisie_doprava[0]+this.emisie_doprava[1]+this.emisie_doprava[2]+this.emisie_doprava[3]);
            this.updateChart();
            console.log(this.emisie_doprava)
            console.log(this.frekvenciavlastne)
        },

        emisie_auta() {
            let spotreba = [0,0,0,0,0,0,0]
            let paliva = [this.palivo1,this.palivo2,this.palivo3,this.palivo4,this.palivo5]
            let kilometre = [this.kilometre1,this.kilometre2,this.kilometre3,this.kilometre4,this.kilometre5]
            let spotreba_doprava = [this.spotreba1,this.spotreba2,this.spotreba3,this.spotreba4,this.spotreba5]
            let osoby = [this.osoby1,this.osoby2,this.osoby3,this.osoby4,this.osoby5]
            let i=0
            let j=0
            let k=0
            
            if(this.details_doprava==false){
                for(k = 0; k<= 6; k++){
                    if(this.frekvenciavlastne==k+1) {
                       return this.kilometre_cudzie_doprava[k] * this.ef_cudzie * this.pocetaut
                    }
                }}
            if(this.details_doprava==true) {
               for(i = 0; i <= 4; i++){
                    for(j=1; j <=7; j++){
                        if(paliva[i]==j) {
                            spotreba[j-1] = spotreba[j-1]+ kilometre[i]*spotreba_doprava[i]/(osoby[i]*100)
                        }
                    }
                }
                return spotreba[0]*this.ef_benzin + spotreba[1]*this.ef_nafta + spotreba[2]* this.ef_lpg + spotreba[3]*this.ef_cng +
                    spotreba[4]*this.ef_biodiesel + spotreba[5]*this.ef_bioetanol + spotreba[6]* this.ef_elektrika
                
                
            }
        },

        emisie_cudzie() {
            
            if(this.details_doprava==true){return 0.5*this.ef_cudzie*this.cudzieauto}
            let i=1
            if(this.details_doprava==false) {
                for(i = 1; i<= 7; i++)
                {
                    if(this.frekvenciacudzie==i) {
                       return this.kilometre_cudzie_doprava[i-1] * this.ef_cudzie
                    }
                }
            }
        },

        emisie_hromadna() {
            let emisie_autobus = 0
            let emisie_mhd = 0
            if(this.details_doprava==true){ 
                if(this.kmhodautobus=='km') {emisie_autobus = 0.039592801*this.autobus}
                if(this.kmhodautobus=='hod'){ emisie_autobus = 40.2*0.039592801*this.autobus}
                if(this.kmhodmhd == 'km') {emisie_mhd = 0.02991*this.mhd}
                if(this.kmhodmhd == 'hod') {emisie_mhd = 16.89*0.02991*this.mhd}
                return 52*emisie_mhd + 52*emisie_autobus
            }
            let i=1
            if(this.details_doprava==false) {
                for(i = 1; i<= 7; i++)
                {
                    if(this.frekvenciamhd==i) {
                       return this.kilometre_hromadna_doprava[i-1] * (0.39592801+0.02991)/2
                    }
                }
            }
        },

        emisie_vlakova() {
            
            if(this.details_doprava==true){ 
                if(this.typvlak=='elektrický') {return 52*0.0149058*this.vlak}
                if(this.typvlak=='naftový'){return 52*0.0781968*this.vlak}
                if(this.typvlak=='oba' || this.typvlak=='neviem' ){return 52*0.03072855*this.vlak}
            }
            let i=1
            if(this.details_doprava==false) {
                for(i = 1; i<= 7; i++)
                {
                    if(this.frekvenciavlak==i) {
                       return this.kilometre_vlakova_doprava[i-1] * 0.03072855
                    }
                }
            }
        },

        emisie_letecka() {
            if(this.details_doprava==false) {
                return this.pocetletov*394.31
            }
            
            let letectvo = [this.let1,this.let2,this.let3,this.let4,this.let5,this.let6,this.let7,this.let8,this.let9,this.let10,this.let11,this.let12,this.let13,this.let14,this.let15,this.let16,this.let17,this.let18,this.let19,this.let20]
            let m = [this.m1,this.m2,this.m3,this.m4,this.m5,this.m6,this.m7,this.m8,this.m9,this.m10,this.m11,this.m12,this.m13,this.m14,this.m15,this.m16,this.m17,this.m18,this.m19,this.m20]
            let s = [this.s1,this.s2,this.s3,this.s4,this.s5,this.s6,this.s7,this.s8,this.s9,this.s10,this.s11,this.s12,this.s13,this.s14,this.s15,this.s16,this.s17,this.s18,this.s19,this.s20]
            let e = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            let i=0
            if(this.details_doprava==true) {
                for(i = 0; i<= 19; i++)
                {
                    if(m[i]==2) {
                       e[i] = s[i]*letectvo[i]*this.ef_letectvo(letectvo[i])
                    }
                    if(m[i]==1) {
                        if(letectvo[i]!=0){
                            e[i] = s[i]*(letectvo[i]*846.27 - 386.48)*this.ef_letectvo(letectvo[i]*846.27 - 386.48)
                        }
                    }
                }
                return e[0]+ e[1]+ e[2]+ e[3]+ e[4]+ e[5]+ e[6]+ e[7]+ e[8]+e[9]+ e[10]+ e[11]+ e[12]+ e[13]+ e[14]+ e[15]+ e[16]+ e[17]+ e[18]+ e[19]
            }
        },

        ef_letectvo(value) {
            if(value<1366){
                return this.EWP(value)*(0.1184-(value-500)*0.00004965)
            }
            else {
                return this.EWP(value)*(0.0754+(value-1366)*0.00000313)
            }
        },

        EWP(value) {
            if(value<=500){return 1}
            if(value<=750 && value>500) {return 1+value*0.00228}
            if(value<=1000 && value>750) {return 1.57+value*0.00104}
            if(value<=2000 && value>1000) {return 1.83+value*0.00223}
            if(value<=4000 && value>2000) {return 2.06+value*0.000075}
            if(value<=10000 && value>4000) {return 2.21+value*0.000017}
            if(value>10000) {return 2.31 + value*0.000017}
        },
        
        updateChart() {
         this.$refs.doprava_chart.update();
        },
        
        
        
    },

    computed: {
        
        emisie_doprava: {
            get() {
                return this.$store.state.emisie_doprava
            },
            set(value) {
                this.$store.commit('setemisie_doprava',value)
                
            }
        },
        uhlikova_stopa_doprava: {
            get() {
                return this.$store.state.uhlikova_stopa_doprava
            },
            set(value) {
                this.$store.commit('setuhlikova_stopa_doprava',value)
                
            }
        },
        pocetaut: {
            get() {
                return this.$store.state.pocetaut
            },
            set(value) {
                this.$store.commit('setpocetaut',value)
                
            }
        },

        details_doprava: {
            get() {
                return this.$store.state.details_doprava
            },
            set(value) {
                this.$store.commit('setdetails_doprava',value)
                
            }
        },
        cudzieauto: {
            get() {
                return this.$store.state.cudzieauto
            },
            set(value) {
                this.$store.commit('setcudzieauto',value)
                
            }
        },
        autobus: {
            get() {
                return this.$store.state.autobus
            },
            set(value) {
                this.$store.commit('setautobus',value)
                
            }
        },
        kmhodautobus: {
            get() {
                return this.$store.state.kmhodautobus
            },
            set(value) {
                this.$store.commit('setkmhodautobus',value)
                
            }
        },
        vlak: {
            get() {
                return this.$store.state.vlak
            },
            set(value) {
                this.$store.commit('setvlak',value)
                
            }
        },

        kmhodvlak: {
            get() {
                return this.$store.state.kmhodvlak
            },
            set(value) {
                this.$store.commit('setkmhodvlak',value)
                
            }
        },
        typvlak: {
            get() {
                return this.$store.state.typvlak
            },
            set(value) {
                this.$store.commit('settypvlak',value)
                
            }
        },
        pocetletov: {
            get() {
                return this.$store.state.pocetletov
            },
            set(value) {
                this.$store.commit('setpocetletov',value)
                
            }
        },
        mhd: {
            get() {
                return this.$store.state.mhd
            },
            set(value) {
                this.$store.commit('setmhd',value)
                
            }
        },
        kmhodmhd: {
            get() {
                return this.$store.state.kmhodmhd
            },
            set(value) {
                this.$store.commit('setkmhodmhd',value)
                
            }
        },
        frekvenciamhd: {
            get() {
                return this.$store.state.frekvenciamhd
            },
            set(value) {
                this.$store.commit('setfrekvenciamhd',value)
                
            }
        },
        frekvenciavlastne: {
            get() {
                return this.$store.state.frekvenciavlastne
            },
            set(value) {
                this.$store.commit('setfrekvenciavlastne',value)
                
            }
        },
        frekvenciavlak: {
            get() {
                return this.$store.state.frekvenciavlak
            },
            set(value) {
                this.$store.commit('setfrekvenciavlak',value)
                
            }
        },
        frekvenciacudzie: {
            get() {
                return this.$store.state.frekvenciacudzie
            },
            set(value) {
                this.$store.commit('setfrekvenciacudzie',value)
                
            }
        },
    },


}


</script>

<style scoped>


.nadpis{
    font-weight: 900;
    margin-left: 10%;
}
.item{
    min-height: 100vh;
    background-color: #F2F2F2;
    overflow: auto;
    width: 100%;
}

.graf {
    height: auto;
    position: relative;
    margin-right:10%;
    margin-left: 10%;
    margin-top:10%;
}

.celkova_hodnota {
    z-index: 1;
    text-align: center;
}




.category {
    font-weight: bold;
    text-align: left;
    padding: 5vh;
    margin-left: auto;

}

.wrapper{
    width: 70%;
    padding: 5%;
}
.wrapper-right{
    position: relative;
    width: 100%;
    padding: 5%;
    
}

.auto{
    margin-bottom: 5%;
}

.let{
    margin-bottom: 5%;
}


.otazka {
    margin-bottom: 5vh;
}

.carcard {
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    overflow: auto;
    margin-bottom: 5%;
}

.flightcard {
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    overflow: auto;
}

.carcardtext {
    padding: 2%
}

.auticko {
    opacity: 0.2;
    margin-left: 10%;
}

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}


.zacat {
    position: relative;
    text-align: center;
    top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    vertical-align: center;
    margin-bottom: 2rem;
    width: 10rem;
    height: 3rem;  
    background: #FF6600;
    border-radius: 20px; 
    border: 0px solid #000000;
    color: white;

   
}


</style>