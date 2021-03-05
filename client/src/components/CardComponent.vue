<template>
  <div class="wrapper">
    <div class="card">
      <img src="https://thumbs.gfycat.com/BlueWetHarvestmouse-small.gif" alt="Avatar">
      <div class="container">
        <div class="name">
          <h4>Routine</h4>
          <hr>
          <p>{{routine.name}}</p>
        </div>
        <div class="weight">
          <h4>Weight</h4>
          <hr>
          <p>{{routine.weight}}</p>
        </div>
        <div class="reps">
          <h4>Reps</h4>
          <hr>
          <p>{{routine.reps}}</p>
        </div>
        <div class="sets">
          <h4>Sets</h4>
          <hr>
          <p>{{routine.sets}}</p>
        </div>
        <div class="time">
          <h4>Time</h4>
          <p>{{routine.time}}</p>
        </div> 
        <div class="tempo">
          <h4>Tempo</h4>
          <p>{{routine.tempo}}</p>
        </div>  
        <div class="targets">
          <h4>Targets</h4>
          <p>{{routine.targets}}</p>
        </div>  
        <div class="notes">
          <h4>Notes</h4>
          <p>{{routine.notes}}</p>
        </div> 
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["routine"],
  data () {
    return {
      cards: [
        { 
          id: 1,  
          name: "Squats", 
          category: "Body Weight",
          group: "Lower Body", 
          targets: "Glutes, Quads",
          weight: "Body",
          sets: 4, 
          reps: 10,
          time: "Nil",
          tempo: "3A01",
          notes: "Ass to grass!"
        },
      ]
    }
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
} 

.card {
  height: 75vh;
  width: 75vw;
  border-radius: 10%;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  font-family: 'Arvo', serif;
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: 2px 16px;
  justify-content: space-evenly;
}

.container:first-child {
  border: 1px solid black;
}

img {
  height: 300px;
  width: 100%;
}

hr {
  border-color: blue;
  margin: .5em 0;
}

.time {
  margin: 2.5em 0;
  grid-column: 1 / span 2;
  display: flex;
  justify-content: space-evenly;
}

.tempo {
  margin: 2.5em 0;
  grid-column: 3 / span 2;
  display: flex;
  justify-content: space-evenly;
}
.targets {
  margin: 2.5em 0;
  grid-column: 1 / span 4;
  display: flex;
  justify-content: space-evenly;
}

.notes {
  margin: 2.5em 0;
  grid-column: 1 / span 4;
  display: flex;
  justify-content: space-evenly;
}

</style>