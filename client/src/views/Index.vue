<template>
  
  <div>
    <AddComponent />
    <main class="routinelist">
      <Routines />
    </main>
  </div>
  
</template>

<script>

import Routines from '@/components/Routines';
import AddComponent from '@/components/AddComponent';
export default {
  name: 'routinelist',
  components: {
    Routines,
    AddComponent
  }
}
</script>

<style scoped>

</style>