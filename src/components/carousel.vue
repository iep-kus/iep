<template>
    <agile :options="myOptions">
        <div class="slide">   
            <EntranceModal0></EntranceModal0>
        </div> 
        <div class="slide">   
            <EntranceModal></EntranceModal>
        </div> 

        <div class="slide">   
            <EntranceModal2></EntranceModal2>
        </div>

        <div class="slide">   
            <EntranceModal3></EntranceModal3>
        </div>
        <template slot="prevButton"><i class="fas fa-angle-left"></i></template>
        <template slot="nextButton"><i class="fas fa-angle-right"></i></template>
    </agile>
</template>

<script>
import { VueAgile } from 'vue-agile'
import EntranceModal from '@/components/EntranceModal.vue'
import EntranceModal0 from '@/components/EntranceModal0.vue'
import EntranceModal2 from '@/components/EntranceModal2.vue'
import EntranceModal3 from '@/components/EntranceModal3.vue'

export default {
    name: 'Carousel',
    components: {agile: VueAgile,EntranceModal,EntranceModal0,EntranceModal2,EntranceModal3},
    data () {
    return {
        myOptions: {
            autoplay: true,
            autoplaySpeed: 5000,
            navButtons: true,
            infinite: true,
            
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: false
                    }
                },
                
                {
                    breakpoint: 900,
                    settings: {
                        navButtons: true,
                        dots: true,
                        infinite: true,
                    }
                }
            ]
        },

    }
}
}
</script>

<style>

.agile__nav-button {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}

.agile__nav-button:hover {
  background-color: transparent;
  opacity: 1;
}


.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #fff;
}

.slide {
  display: block;
  height: 500px;
  object-fit: cover;
  width: 100%;
}

@media only screen and (max-width: 768px){
  .slide {
    display: block;
    object-fit: cover;
    height: 650px;
    width: 100%;
  }
}




</style>