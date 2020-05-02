<template>
  <div class="routinelist">
    <h2 class="2-heading">
      View your routines
    </h2>
    <div class="items">
      <RoutineList />
    </div>
  </div>
</template>

<script>
import IndexComponent from '@/components/IndexComponent';
export default {
  name: 'routinelist',
  components: {
    IndexComponent
  }
}
</script>

<style scoped>

</style>