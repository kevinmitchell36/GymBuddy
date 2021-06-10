<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="container">
          <div class="box name">Kettle Bell Squats</div>
          <div class="box category">Free Weights</div>
          <div class="box img">
            <img src="https://media.giphy.com/media/7J4HZn44mlCg1y8P2a/giphy.gif">
          </div>
          <div class="box group">Lower Body</div>
          <div class="box targets">Glutes, Quads</div>
          
          <div class="box weight"><i class="fas fa-dumbbell"></i><span class="value">25 lbs.</span></div>
          <div class="box sets"><i class="fas fa-circle-notch"></i><span class="value">3</span></div>
          <div class="box reps"><i class="fas fa-redo"></i><span class="value">12</span></div>
          <div class="box time">N/A</div>
          <div class="box tempo">3A01</div>
          <div class="box notes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, praesentium eveniet corporis fuga animi cumque blanditiis dolore quaerat vel quas?</div>
        </div>
      </div>
      <div class="flip-card-back">
        <h1>John Doe</h1>
        <p>Architect & Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["routine"],
  data () {
    return {
      card:
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
        }
    }
  }
}
</script>

<style scoped>

/* .flip-card {
  background-color: transparent;
  perspective: 1000px; 
} */

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
  border: 2px solid black;
}

.container {
  width: 50%;
  height: 75vh;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: grid;
  grid-gap: 5px;
  grid-template-rows: 5% 40% 5% 20% 5% 20%;
  grid-template-columns: repeat(6, 1fr);
}


.container:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)
}

.box {
  color: black;
  padding: 5px;
}

.name, .group, .time  {
  justify-self: start;
  grid-column: span 3;
}

.category, .targets, .tempo {
  justify-self: end;
  grid-column: span 3;
}

.img {
  grid-column: span 6;
}

img {
  max-height: 100%;
  max-width: 100%;
}


.weight, .sets, .reps {
  justify-self: center;
  grid-column: span 2;
  margin: auto;
  
}

.notes {
  justify-self: start;
  grid-column: span 6;
}

.value {
  display: block;
  padding: .75em;
}

@media screen and (max-width: 400px) {
  .container {
    width: 100%;
  }
 }






</style>