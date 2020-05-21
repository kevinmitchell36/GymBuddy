<template>
  <div>
    <h3>Routines</h3>
    <div class="routines">
      <div v-for="routine in allRoutines" :key="routine.id" class="routine">
        {{ routine.name}}
        {{ routine.wtype}}
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

</style>