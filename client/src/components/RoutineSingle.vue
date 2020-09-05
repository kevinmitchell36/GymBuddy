<template>
  <div>
    <p>{{singleRoutine.name}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Routine',
  methods: {
    ...mapActions(['fetchSingleRoutine']),
     async fetchToken() {
      const accessToken = await this.$auth.getTokenSilently()
      const id = this.$route.params.id
      this.fetchSingleRoutine({"id": id, "accessToken": accessToken})
    }
  },
  computed: mapGetters(['singleRoutine']),
  created() {
    this.fetchToken()
  } 
}
</script>

<style>

</style>