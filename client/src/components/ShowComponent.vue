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
    <!-- <ul>
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
    </p> -->
  </div>
</template>

<script>
export default {
  props: [
    'routine'
  ],
  
}
</script>

<style scoped>

#routine-single {
    border: 1px solid black;
    box-shadow: 10px 10px 5px #aaaaaa;
    margin-top: 10px;
    width: 400px;
  }

  /* ul {
    display: flex;
    align-items: flex-start;
    list-style-type: none; 
  }

  ul li {
    padding: 1.5rem;
  } */






  
</style>