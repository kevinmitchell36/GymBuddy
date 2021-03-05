<template>
  <div id="gym-bag">
    <div class="temp" v-for="gymBagItem in wholeBag" :key="gymBagItem._id">
      <div class="card">
        <p>Id: {{gymBagItem._id}}</p>
        <div class="container">
          <h4><b>{{gymBagItem.name}}</b></h4>
          <p>{{gymBagItem.notes}}</p>
          <p>Parent Id:{{gymBagItem.parentId}}</p>
          <button @click="deleteGymBagItem(gymBagItem._id)">Delete</button>
          <button v-if="gymBagItem.parentId === null" @click="generateSets(gymBagItem)">Generate Sets</button>
        </div>
      </div>
    </div>
    <div id="run-workout">
      <router-link to='/runworkout'>Run Workout</router-link>
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
    ...mapActions(['getGymBag','destroyGymBagItem', 'populateSets']),
    deleteGymBagItem(id) {
      this.destroyGymBagItem(id)
    },
    generateSets(gymBagItem) {
      console.log(gymBagItem)
      this.populateSets(gymBagItem)
    }
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