<template>


    <b-container fluid >
                
                
        <div class="item">
            <div class="doprava">
                <div class="wrapper-right">    
                    
                    
                    
                    
                    <b-row md="4" style="margin-bottom:2vh" align-h="start" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="1" class="text-left">   
                        <b-col offset-md="0.5" cols="4" align-h="start"><h1>Doprava</h1></b-col>
                        
                    </b-row> 
                    
                    
                    
                    
                    
                    <div class="otazka" >
                        <b-row  style="margin-bottom:2vh" align-v="center">      
                            <b-col md="1" cols="1" class="text-right">8.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko áut vlastní Vaša domácnosť?</b-col>
                            <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-spinbutton id="pocetauta" v-model="pocetaut" min="0" max="5"></b-form-spinbutton></b-col>
                        </b-row> 

                        <div v-if="details_doprava==false">
                            <b-row  style="margin-bottom:2vh" align-v="center">      
                                <b-col md="1" cols="1" class="text-right"></b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Ako často využívate vlastné auto?</b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-select v-model="frekvenciavlastne" :options="frekvenciadoprava"></b-form-select></b-col>
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
                                                        <p2>Koľko kilometrov ročne najazdíte?</p2>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <b-form-input id="kilometre1" v-model="kilometre1"></b-form-input>
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
                                                    <b-form-input id="spotreba1" v-model="spotreba1"></b-form-input>
                                                    </b-col>
                                                    <b-col  cols=8 lg="3" class="text-left" >
                                                    <b-form-select v-model="palivo1" :options="palivo"></b-form-select>
                                                    </b-col>
                                                </b-row>
                                                
                                                <b-row align-v="center" cols="1" cols-lg="3">
                                                    <b-col class="text-left" >
                                                    
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                        <p2>Aký je priemerný počet osôb v aute?</p2>
                                                    </b-col>
                                                    <b-col class="text-left" >
                                                    <b-form-spinbutton id="osoby1" v-model="osoby1" min="0" max="9"></b-form-spinbutton>
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
                                                            <p2>Koľko kilometrov ročne najazdíte?</p2>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <b-form-input id="kilometre2" v-model="kilometre2"></b-form-input>
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
                                                        <b-form-input id="spotreba1" v-model="spotreba1"></b-form-input>
                                                        </b-col>
                                                        <b-col  cols=8 lg="3" class="text-left" >
                                                        <b-form-select v-model="palivo1" :options="palivo"></b-form-select>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p2>Aký je priemerný počet osôb v aute?</p2>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                        <b-form-spinbutton id="osoby2" v-model="osoby2" min="0" max="9"></b-form-spinbutton>
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
                                                            <p2>Koľko kilometrov ročne najazdíte?</p2>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <b-form-input id="kilometre3" v-model="kilometre3"></b-form-input>
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
                                                        <b-form-input id="spotreba1" v-model="spotreba1"></b-form-input>
                                                        </b-col>
                                                        <b-col  cols=8 lg="3" class="text-left" >
                                                        <b-form-select v-model="palivo1" :options="palivo"></b-form-select>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p2>Aký je priemerný počet osôb v aute?</p2>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                        <b-form-spinbutton id="osoby3" v-model="osoby3" min="0" max="9"></b-form-spinbutton>
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
                                                            <p2>Koľko kilometrov ročne najazdíte?</p2>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <b-form-input id="kilometre4" v-model="kilometre4"></b-form-input>
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
                                                        <b-form-input id="spotreba1" v-model="spotreba1"></b-form-input>
                                                        </b-col>
                                                        <b-col  cols=8 lg="3" class="text-left" >
                                                        <b-form-select v-model="palivo1" :options="palivo"></b-form-select>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" style="margin-bottom:2vh" cols="1" cols-lg="3">
                                                        <b-col class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p2>Aký je priemerný počet osôb v aute?</p2>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                        <b-form-spinbutton id="osoby4" v-model="osoby4" min="0" max="9"></b-form-spinbutton>
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
                                                            <p2>Koľko kilometrov ročne najazdíte?</p2>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <b-form-input id="kilometre5" v-model="kilometre5"></b-form-input>
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
                                                        <b-form-input id="spotreba1" v-model="spotreba1"></b-form-input>
                                                        </b-col>
                                                        <b-col  cols=8 lg="3" class="text-left" >
                                                        <b-form-select v-model="palivo1" :options="palivo"></b-form-select>
                                                        </b-col>
                                                    </b-row>
                                                    
                                                    <b-row align-v="center" cols="1" cols-lg="3">
                                                        <b-col class="text-center" >
                                                            <h4> </h4>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                            <p2>Aký je priemerný počet osôb v aute?</p2>
                                                        </b-col>
                                                        <b-col class="text-left" >
                                                        <b-form-spinbutton id="osoby5" v-model="osoby5" min="0" max="9"></b-form-spinbutton>
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
                                <b-form-input v-model="cudzieauto" placeholder="Vložte údaj"></b-form-input>
                            </b-col>
                            
                        </b-row>
                        <div v-if="details_doprava==false">
                            <b-row  style="margin-bottom:2vh" align-v="center">      
                                <b-col md="1" cols="1" class="text-right">8b.</b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Ako často využívate dopravu cudzím autom (BlaBlaCar, Uber, Taxi, kamarát...)?</b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                    <b-form-select v-model="frekvenciacudzie" :options="frekvenciadoprava"></b-form-select>
                                </b-col>
                            </b-row> 
                        </div>
                    </div>
                    
                    
                    <div class="otazka" >
                        <b-row  style="margin-bottom:2vh" align-v="center" v-if="details_doprava==true">      
                            <b-col md="1" cols="1" class="text-right">9.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko hodín/kilometrov si cestoval prímestskými autobusmi za posledný/priemerný týždeň?</b-col>
                            <b-col md="3" cols="6" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-input v-model="autobus" placeholder="Vložte údaj"></b-form-input></b-col>
                            <b-col md="2" cols="5"  class="text-left" align-h="start"><b-form-select v-model="kmhodautobus" :options="['km', 'hod']"></b-form-select></b-col>
                        </b-row>

                        <div v-if="details_doprava==false">
                            <b-row  style="margin-bottom:2vh" align-v="center">      
                                <b-col md="1" cols="1" class="text-right">9.</b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Ako často využívate hromadnú dopravu? (okrem vlakovej)</b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                    <b-form-select v-model="frekvenciamhd" :options="frekvenciadoprava"></b-form-select>
                                </b-col>
                            </b-row> 
                        </div>
                    </div>


                    <div class="otazka" >
                        <b-row  style="margin-bottom:2vh" align-v="center" v-if="details_doprava==true">      
                            <b-col md="1" cols="1" class="text-right">10.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko kilometrov si cestoval vlakmi za posledný/priemerný týždeň?</b-col>
                            <b-col md="3" cols="6" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-input v-model="vlak" placeholder="Vložte údaj"></b-form-input></b-col>
                            <b-col md="2" cols="5" class="text-left" align-h="start"><b-form-select v-model="kmhodvlak" :options="['km', 'hod']"></b-form-select></b-col>
                        </b-row>
                    
                        <div>
                            <b-row  style="margin-bottom:2vh" align-v="center" v-if="details_doprava==true">      
                                <b-col md="1" cols="1" class="text-right"></b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Akým typom vlaku prevažne cestuješ?</b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-select v-model="typvlak" :options="['elektrický', 'naftový' , 'neviem' , 'oba']"></b-form-select></b-col>
                            </b-row>
                        </div>

                        <div v-if="details_doprava==false">
                            <b-row  style="margin-bottom:2vh" align-v="center">      
                                <b-col md="1" cols="1" class="text-right">10.</b-col>
                                <b-col md="5" cols="11" class="text-left" align-h="start">Ako často využívate vlakovú dopravu?</b-col>
                                <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start">
                                    <b-form-select v-model="frekvenciavlak" :options="frekvenciadoprava"></b-form-select>
                                </b-col>
                            </b-row> 
                        </div>
                    </div>



                    <div class="otazka" v-if="details_doprava==true">
                        <b-row  style="margin-bottom:2vh" align-v="center">      
                            <b-col md="1" cols="1" class="text-right">12.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko hodín/kilometrov si cestoval MHD (električkami, autobusmi, trolejbusmi)?</b-col>
                            <b-col md="3" cols="6" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-input v-model="mhd" placeholder="Vložte údaj"></b-form-input></b-col>
                            <b-col md="2" cols="5" class="text-left" align-h="start"><b-form-select v-model="kmhodmhd" :options="['km', 'hod']"></b-form-select></b-col>
                        </b-row> 

                    </div>



                    <div class="otazka">
                        <b-row  style="margin-bottom:2vh" align-v="center" >      
                            <b-col md="1" cols="1" class="text-right" v-if="details_doprava==true">13.</b-col>
                            <b-col md="1" cols="1" class="text-right" v-if="details_doprava==false">11.</b-col>
                            <b-col md="5" cols="11" class="text-left" align-h="start">Koľko letov si absolvoval za posledný rok?</b-col>
                            <b-col md="5" cols="11" offset-md="0" offset="1" class="text-left" align-h="start"><b-form-spinbutton id="pocetletov" v-model="pocetletov" min="0" max="20"></b-form-spinbutton></b-col>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let1" v-model="let1"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m1" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s1" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let2" v-model="let2"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m2" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s2" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let1" v-model="let3"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m3" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s3" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let1" v-model="let4"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m4" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s4" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let1" v-model="let5"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m5" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s5" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let6" v-model="let6"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m6" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s6" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let7" v-model="let7"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m7" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s7" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let8" v-model="let8"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m8" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s8" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let9" v-model="let9"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m9" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s9" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let10" v-model="let10"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m10" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s10" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let11" v-model="let11"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m11" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s11" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let1" v-model="let12"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m12" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s12" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let13" v-model="let13"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m13" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s13" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let14" v-model="let14"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m14" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s14" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let15" v-model="let15"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m15" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s15" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let16" v-model="let16"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m16" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s16" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let17" v-model="let17"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m17" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s17" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let18" v-model="let18"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m18" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s18" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let19" v-model="let19"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m19" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s19" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                                        <p2>Aká bola dĺžka daného letu? (jednosmerne)</p2>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-input id="let20" v-model="let20"></b-form-input>
                                                    </b-col>
                                                    <b-col lg=2 cols="6" class="text-left" >
                                                        <b-form-select v-model="m20" :options="lietanie"></b-form-select>
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
                                                        <b-form-radio-group class="pt-2" v-model="s20" :options="['Áno', 'Nie']"></b-form-radio-group>
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
                                    <b-button class="zacat" :pressed.sync="details_doprava">podrobnejšie</b-button>
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

        details_doprava: false,
        
        
        pocetaut: 1,
        autobus:100,
        kmhodautobus: 'km',
        vlak:100,
        kmhodvlak:'km',
        typvlak: 'elektrický',
        pocetletov:2,
        mhd:2,
        kmhodmhd:'hod',

        frekvenciadoprava: [
         
          { value: 1, text: 'Môj jediný spôsob dopravy' },
          { value: 2, text: 'Každý deň' },
          { value: 3, text: 'Niekoľkokrát týždenne' },
          { value: 4, text: 'Príležitostne' },
          { value: 5, text: 'Niekoľkokrát ročne' },
          { value: 6, text: 'Vôbec' },
          { value: 7, text: '2x týždenne východ-západ alebo späť' }
        ], 

        frekvenciavlastne: 3,
        frekvenciacudzie: 7,
        frekvenciamhd: 2,
        frekvenciavlak: 5,

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
          { value: 4, text: 'litrov bioetanolu na 100 km' },
          { value: 5, text: 'kWh elektriky na 100 km' },
          { value: 6, text: 'kg CNG na 100 km' }
        ], 

        lietanie: [
         
          { value: 1, text: 'hod' },
          { value: 2, text: 'km' }
 
        ], 

        spiatocnost: [
         
          { value: 1, text: 'Áno' },
          { value: 2, text: 'Nie' }
        ], 

        let1:2,
        m1: 1,
        s1: 'Áno',

        let2:0,
        m2: 1,
        s2: 'Áno',

        let3:0,
        m3: 1,
        s3: 'Áno',

        let4:0,
        m4: 1,
        s4: 'Áno',

        let5:0,
        m5: 1,
        s5: 'Áno',

        let6:0,
        m6: 1,
        s6: 'Áno',

        let7:0,
        m7: 1,
        s7: 'Áno',

        let8:0,
        m8: 1,
        s8: 'Áno',

        let9:0,
        m9: 1,
        s9: 'Áno',

        let10:0,
        m10: 1,
        s10: 'Áno',

        let11:0,
        m11: 1,
        s11: 'Áno',

        let12:0,
        m12: 1,
        s12: 'Áno',

        let13:0,
        m13: 1,
        s13: 'Áno',

        let14:0,
        m14: 1,
        s14: 'Áno',

        let15:0,
        m15: 1,
        s15: 'Áno',

        let16:0,
        m16: 1,
        s16: 'Áno',

        let17:0,
        m17: 1,
        s17: 'Áno',

        let18:0,
        m18: 1,
        s18: 'Áno',

        let19:0,
        m19: 1,
        s19: 'Áno',

        let20:0,
        m20: 1,
        s20: 'Áno',
        
      }
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

  width: 10rem;
   height: 3rem;  
   background: #FF6600;
    border-radius: 20px; 
    border: 0px solid #000000;
    color: white;

   
}


</style>