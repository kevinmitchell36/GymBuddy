<template>
  <div id="gym-bag">
    <div v-for="routine in wholeBag" :key="routine._id">{{routine.notes}}</div>
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

</style>