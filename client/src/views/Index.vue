<template>
  
  <main class="routinelist">
    <Routines/>
    <header class="header">
      View your routines
    </header>
  </main>
  
</template>

<script>

import Routines from '@/components/Routines';
export default {
  name: 'routinelist',
  components: {
    Routines
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