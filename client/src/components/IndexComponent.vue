<template>
  <div class="routine-list">
   <div v-for="routine in routines" :routine="routine" :key="routine._id" class="column">
        <router-link :to="'/routines/' + routine._id">
          <ShowComponent :routine="routine" />
        </router-link>
      </div>
  </div>
</template>

<script>
import RoutineService from "@/services/RoutineService.js";
import ShowComponent from '@/components/ShowComponent';
export default {
  name: 'routine-list',
  components : {
    ShowComponent
  },
  data () {
    return {
      routine: {},
      routines: [],
    };  
  },
  created() {
    this.getRoutinesData();
  },
  methods: {
    async getRoutinesData() {
      const accessToken = await this.$auth.getTokenSilently()
      RoutineService.getRoutines(accessToken)
      .then(
        (routines => {
          this.$set(this, "routines", routines);
        }).bind(this)
      );
    }
  }
}
</script>
<style scoped>

</style>

