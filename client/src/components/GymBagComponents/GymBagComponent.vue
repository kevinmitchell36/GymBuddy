<template>
  <div id="gym-bag">
    <div class="temp" v-for="routine in wholeBag" :key="routine._id">
      <div class="card">
        <img src="img_avatar.png" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>{{routine.name}}</b></h4>
          <p>{{routine.notes}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' 
export default {
  name: "gym-bag",
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions(['getGymBag'])
  },
  computed: {
    ...mapGetters(['wholeBag'])
  },
  created() {
    this.getGymBag()
  }
}
</script>

<style>

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>