<template>
  <button @click="deleteRoutine(routine)"><i class="far fa-trash-alt"></i></button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['routine'],
  methods: {
    ...mapActions(["destroyRoutine"]),
    deleteRoutine(routine) {
      this.destroyRoutine(routine)
    }
  }
}
</script>

<style>

</style>