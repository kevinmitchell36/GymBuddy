<template>
  
  <main class="routinelist">
    <header class="header">
      View your routines
    </header>
    <div>
      <IndexComponent />
    </div>
    <button @click="hello">Click Me!</button>
  </main>
  
</template>

<script>
import IndexComponent from '@/components/IndexComponent';
export default {
  name: 'routinelist',
  components: {
    IndexComponent
  },
  mixins: [IndexComponent]
}
</script>

<style scoped>

.routinelist .routine-list {
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
}
</style>