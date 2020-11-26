<template>
  <div>
    <h3>Routines</h3>
    <table class="routines">
      <thead>
        <tr>
          <th>Name:</th>
          <th>Type:</th>
          <th>Categories:</th>
          <th>Notes:</th>
          <th>Options:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="routine in allRoutines" :key="routine._id" class="routine">
          <td class="name">{{routine.name}}</td>
          <td class="type">{{routine.wtype}}</td>
          <td>
            <span v-for="category in routine.categories" :key="category" class="categories">
              <span class="category">{{category}} </span> 
            </span>
          </td>
          <td class="notes">{{routine.notes}}</td>
            <td class="drop-down">
            <ShowComponent  :routine="routine" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ShowComponent from "@/components/ShowComponent"
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Routines",
  data() {
    return {
      routine: {}
    }
  },
  components: {
    ShowComponent
  },
  methods: {
    ...mapActions(['fetchRoutines']),
    async fetchToken() {
      const accessToken = await this.$auth.getTokenSilently()
      this.fetchRoutines(accessToken)
    }
  },
  computed: {
    ...mapGetters(['allRoutines']),
  },
  created() {
    this.fetchToken()
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

table {
  width: 100%;
  border-spacing: 0;
}


th, td {
  border-bottom: 2px solid black;
  padding: 5px 0;
}

</style>