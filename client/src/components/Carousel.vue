<template>
 
 
    <VueSlickCarousel class="image" :arrows="true" :dots="true">
      <div class="image">1</div>
      <div class="image">2</div>
      <div class="image">3</div>
      <div class="image">4</div>
    </VueSlickCarousel>
  

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
}
</script>

<style>

.image { 
  width: 50%;
}

</style>