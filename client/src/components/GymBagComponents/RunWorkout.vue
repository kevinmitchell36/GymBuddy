<template>
    <carousel class="container">
      <slide v-for="item in getMockGymBag"
        :key="item.id"> 
          <div class="card">
            {{item.name}}
          </div>
      </slide>
    </carousel>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'
// import { Swiper, SwiperItem } from 'vue-h5-swiper'
export default {
  components : {
    Carousel,
    Slide
    // Swiper,
    // SwiperItem
  },
  computed: {
    ...mapGetters(['getMockGymBag'])
  }

}
</script>

<style>


.card {
  /* Add shadows to create the "card" effect */

  height: 500px;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-top: 30px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
 
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 2px 16px;
}
</style>