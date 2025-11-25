<template>
    <b-container fluid>
        <div class="background">
            <vue-aos animation-class="fadeIn threshold: 1">
                <div class="obsah">
                    <b-row class="title">
                        <b-col class="text-left">
                            <h1>Prehľad tém</h1>
                        </b-col>
                    </b-row>
                    <div data-aos="slide-up" data-aos-duration="800">
                        <div class="grid">
                            <div v-for="(topic, index) in topics" :key="index" class="card">
                                <img :src="topic.image" alt="" class="card-image" />
                                <div class="card-body" @click="toggle(index)">
                                    <h3>{{ topic.name }}</h3>
                                    <p>{{ topic.description }}</p>
                                    <div class="arrow">{{ topic.open ? '▲' : '▼' }}</div>
                                </div>
                                <div v-if="topic.open" class="card-content">
                                    <ul>
                                        <li v-for="item in topic.items" :key="item.slug">
                                        <router-link :to="`/mapy/${item.slug}`">{{ item.title }}</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </vue-aos>            
        </div>
    </b-container>    
</template>

<script>
import voda_img from '@/assets/voda.jpg'
import doprava_img from '@/assets/doprava.jpg'
import odpady_img from '@/assets/background-odpady.jpg'
import opatrenia_img from '@/assets/opatrenia.jpg'
import ovzdusie_img from '@/assets/ovzdusie.jpg'
import financie_img from '@/assets/financie.jpg'

export default {
  name: 'MapyGrafy',
  data() {
    return {
      topics: [
        {
          name: 'Voda',
          image: voda_img,
          description: 'Ako Slovensko hospodári s vodou a aké výzvy prináša jej správa a ochrana?',
          open: false,
          items: [
            { title: 'Mapa: Kto vlastní vodovody na Slovensku?', slug: 'mapa-vodarenske-spolocnosti' },
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3' }
          ]
        },
        {
          name: 'Doprava',
          image: doprava_img,
          description: 'Ako doprava ovplyvňuje životné prostredie a spoločnosť na Slovensku?',
          open: false,
          items: [
            { title: 'Mapa: Stupne ohrozenia obcí dopravnou chudobou', slug: 'mapa-dopravna-chudoba' },
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3' }
          ]
        },
        {
          name: 'Odpady',
          image: odpady_img,
          description: 'Ako sa Slovensko vyrovnáva s rastúcim množstvom odpadov?',
          open: false,
          items: [
            { title: 'Mapa/Graf 1', slug: 'mapa-graf-1' },
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3' }
          ]
        },
        {
          name: 'Verejné financie',
          image: financie_img,
          description: 'Ako môžu verejné financie podporiť udržateľný rozvoj a efektívne využívanie zdrojov?',
          open: false,
          items: [
            { title: 'Mapa/Graf 1', slug: 'mapa-graf-1' },
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3' }
          ]
        },
        {
          name: 'Ovzdušie',
          image: ovzdusie_img,
          description: 'Ako znečistené ovzdušie ovplyvňuje zdravie a život na Slovensku?',
          open: false,
          items: [
            { title: 'Mapa/Graf 1', slug: 'mapa-graf-1' },
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3' }
          ]
        },
        {
          name: 'Zmena klímy a opatrenia',
          image: opatrenia_img,
          description: 'Ako nás ovplyvňuje zmena klímy a aké opatrenia môžu zmierniť jej dopady?',
          open: false,
          items: [
            { title: 'Mapa/Graf 1', slug: 'mapa-graf-1' },
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3' }
          ]
        }
        // ďalšie témy...
      ]
    }
  },
  methods: {
    toggle(index) {
      this.topics[index].open = !this.topics[index].open
    }
  }
}
</script>

<style scoped>

.container-fluid { 
    width: 100%; padding-right: 0; padding-left: 0; margin-right: auto; margin-left: auto; 
}

.background {
    background-color:white;
}

.obsah {
    padding: 5%;
}

.title {
    margin-bottom: 5%;
    font-family: "chivo-bold";
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
}
.card-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.card-body {
  padding: 16px;
  cursor: pointer;
}
.card-body h3 {
  margin: 0 0 8px;
}
.arrow {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
}
.card-content {
  padding: 0 16px 16px;
}
.card-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.card-content li {
  margin: 6px 0;
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr; /* na mobile len 1 karta v riadku */
  }
}

</style>
