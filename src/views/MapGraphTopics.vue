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

                <transition name="card-expand">
                  <div v-show="topic.open" class="card-content">
                    <ul>
                      <li v-for="item in topic.items" :key="item.slug">
                        <router-link :to="`/visualization/${item.slug}`">
                          {{ item.title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </transition>

              </div>
            </div>
          </div>

        </div>
      </vue-aos>
    </div>
  </b-container>
</template>


<script>
// obrázok pre každú tému treba najprv importovať. Požadovaný obrázok uložíme do src/assets/
import voda_img from '@/assets/voda.jpg'
import doprava_img from '@/assets/doprava.jpg'
import odpady_img from '@/assets/background-odpady.jpg'
import opatrenia_img from '@/assets/opatrenia.jpg'
import ovzdusie_img from '@/assets/ovzdusie.jpg'
import financie_img from '@/assets/financie.jpg'

export default {
  name: 'MapGraphTopics',
  data() {
    return {
      // nasledujú témy vizualizácií:
      topics: [
        {
          // názov témy, ktorý sa zobrazí:
          name: 'Voda',
          // obrázok v pozadí navrchu:
          image: voda_img,
          // krátky popis:
          description: 'Ako Slovensko hospodári s vodou a aké výzvy prináša jej správa a ochrana?',
          // keď sa stránka načíta, karta s témou bude zatvorená:
          open: false,
          // tu sa vložia mapy a grafy, ktoré s témou súvisia:
          items: [
            // stránka potrebuje vedieť názov, unikátny slug a či ide o mapu alebo graf:
            { title: 'Mapa: Kto vlastní vodovody na Slovensku?', slug: 'mapa-vodarenske-spolocnosti', type: 'mapa'},
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2', type: 'mapa' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3', type: 'mapa' }
          ]
        },
        {
          name: 'Doprava',
          image: doprava_img,
          description: 'Ako doprava ovplyvňuje životné prostredie a spoločnosť na Slovensku?',
          open: false,
          items: [
            { title: 'Mapa: Stupne ohrozenia obcí dopravnou chudobou', slug: 'mapa-dopravna-chudoba', type: 'mapa'},
            { title: 'Doughnut', slug: 'doughnut-example', type: 'graf' },
            { title: 'Dvojvrstvovy doughnut', slug: 'doughnut-multi', type: 'graf' }
          ]
        },
        {
          name: 'Odpady',
          image: odpady_img,
          description: 'Ako sa Slovensko vyrovnáva s rastúcim množstvom odpadov?',
          open: false,
          items: [
            { title: 'Pie', slug: 'pie-example', type: 'graf' },
            { title: 'Bar', slug: 'bar-example', type: 'graf' },
            { title: 'Line', slug: 'line-example', type: 'graf' }
          ]
        },
        {
          name: 'Verejné financie',
          image: financie_img,
          description: 'Ako môžu verejné financie podporiť udržateľný rozvoj a efektívne využívanie zdrojov?',
          open: false,
          items: [
            { title: 'Mapa/Graf 1', slug: 'mapa-graf-1', type: 'mapa' },
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2', type: 'mapa' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3', type: 'mapa' }
          ]
        },
        {
          name: 'Ovzdušie',
          image: ovzdusie_img,
          description: 'Ako znečistené ovzdušie ovplyvňuje zdravie a život na Slovensku?',
          open: false,
          items: [
            { title: 'Skrátenie dĺžky života kvôli vystaveniu znečistenému ovzdušiu', slug: 'mapa-dlzka-zivota-ovzdusie', type: 'mapa' },
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2', type: 'mapa' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3', type: 'mapa' }
          ]
        },
        {
          name: 'Zmena klímy',
          image: opatrenia_img,
          description: 'Ako nás ovplyvňuje zmena klímy a aké opatrenia môžu zmierniť jej dopady?',
          open: false,
          items: [
            { title: 'Emisie sklenníkových plynov v roku 2022', slug: 'emisie-2022', type: 'graf' },
            { title: 'Mapa/Graf 2', slug: 'mapa-graf-2', type: 'mapa' },
            { title: 'Mapa/Graf 3', slug: 'mapa-graf-3', type: 'mapa' }
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
  align-items: start;
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
  overflow: hidden;
  max-height: 300px;
}

.card-expand-enter-active,
.card-expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.card-expand-enter,
.card-expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.card-expand-enter-to,
.card-expand-leave {
  max-height: 300px;
  opacity: 1;
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
