<template>
  <div>
    <h3>Routines</h3>
    <div class="routines">
        <div v-for="routine in allRoutines" :key="routine._id" class="routine">
          <router-link :to="'/routines/' + routine._id" class="links">
            <h3 class="name">{{routine.name}}</h3>
            <h4 class="type">{{routine.wtype}}</h4>
            <div v-for="category in routine.categories" :key="category" class="categories">
              <ul class="categories-list">
                <li class="category">{{category}}</li>
              </ul>
            </div>
            <p class="notes">{{routine.notes}}</p>
          </router-link>
          <div class="icons">
            <span class="edit"><i class="far fa-edit"></i></span>
            <span class="gym-bag"><i class="fas fa-suitcase"></i></span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Routines",
  methods: {
    ...mapActions(['fetchRoutines']),
    async fetchToken() {
      const accessToken = await this.$auth.getTokenSilently()
      this.fetchRoutines(accessToken)
    }
  },
  computed: mapGetters(['allRoutines']),
  created() {
    this.fetchToken()
  }
}
</script>

<style>

.routines {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.routine {
  border: 1px solid black;
  box-shadow: 10px 10px 5px #aaaaaa;
  margin: 10px;
  width: 400px;
  padding: 5px;
}

.routine .links {
  text-decoration: none;
  color: black;
}

.routine .links:hover {
  cursor: pointer;
}

.routine .categories {
  display: inline-block;
}
.routine .categories .categories-list {
  list-style-type: none; 
}

.routine .categories .categories-list .category {
  margin-left: 5px;
}

.icons {
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
}



</style>