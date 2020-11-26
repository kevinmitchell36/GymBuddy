<template>
  <button @click="deleteRoutine()"><i class="far fa-trash-alt"></i></button>
</template>

<script>
import axios from 'axios'
export default {
  props: ['routineId'],
  methods: {
    deleteRoutine() {
      axios.delete("http://localhost:3000/api/routines/" + this.routineId)
      .then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style>

</style>