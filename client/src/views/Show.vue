<template>
  <div id="routine-single">
    <h1 class="title">
      {{routine.name}}
    </h1>
    <h2 class="category">
      {{routine.type}}
    </h2>
    <h3 class="description">
      {{routine.notes}}
    </h3>
  </div>
</template>

<script>
import RoutineService from "@/services/RoutineService.js";
export default {
  name: 'RoutineSingle',
    data () {
    return {
      routine: {},
    }  
  },
  created() {
    this.getRoutines();
  },
  methods: {
  async getRoutines() {
    // Get the access token from the auth wrapper
    const accessToken = await this.$auth.getTokenSilently()

    // Use the eventService to call the getEventSingle method
    RoutineService.getRoutineSingle(this.$route.params.id, accessToken)
    .then(
      (routine => {
        this.$set(this, "routine", routine);
      }).bind(this)
    );
  }
}
}

</script>

<style>

</style>