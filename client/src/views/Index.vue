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

/* .routinelist .routine-list {
  display: grid;
  grid-template-areas: 
    'header header header'
    'column column column';
}

.header {
  grid-area: header;
}

.column {
  grid-area: column;
} */
</style>