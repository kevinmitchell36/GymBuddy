<template>
  <div id="routine-single">
    <h1 class="name">
      {{routine.name}}
    </h1>
    <h2 class="type">
      {{routine.wtype}}
    </h2>
    <h3 class="categories">
      {{routine.categories}}
    </h3>
    <ul>
      <li class="sets">Sets:
        {{routine.sets}}
      </li>
      <li class="reps">Reps:
        {{routine.reps}}
      </li>
      <li class="time">Time:
        {{routine.time}}
      </li>
    </ul>
    <p class="notes">Notes:
      {{routine.notes}}
    </p>
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
    },
  }
}

</script>

<style>
  #routine-single {
    border: 1px solid black;
    box-shadow: 10px 10px 5px #aaaaaa;
    margin-top: 10px;
    width: 400px;
  }

  ul {
    display: flex;
    align-items: flex-start;
    list-style-type: none; 
  }

  ul li {
    padding: 1.5rem;
  }

  
</style>