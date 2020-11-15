<template>
  <button @click="deleteRoutine()"><i class="far fa-trash-alt"></i></button>
</template>

<script>
import axios from 'axios'
export default {
  props: ['routineId'],
  methods: {
    deleteRoutine() {
      console.log(this.routineId)
      axios.delete("http://localhost:3000/api/routines/" + this.routineId)
      .then(() => {
        this.$router.push("/routines")
      })
    }
  }
}
</script>

<style>

</style>