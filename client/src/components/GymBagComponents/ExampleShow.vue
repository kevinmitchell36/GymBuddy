<template>
  <section class="container">
    <div 
      class="fixed"
      :class="{'transition': isVisible}"
      v-if="current"
      style="z-index: 3"
      >
        <Vue2InteractDraggable
          v-if="isVisible"
          :interact-out-of-sight-x-coordinate="500"
          :interact-max-rotation="15"
          :interact-x-threshold="200"
          :interact-y-threshold="200"
          :interact-event-bus-events="interactEventBus"
          interact-block-drag-down
          @draggedRight="emitAndNext('toGymBag')"
          @draggedLeft="emitAndNext('backToDb')"
          @draggedUp="emitAndNext('skip')"
        >
        <div class="card">
          <div class="container">
            <h4>{{current.name}}</h4>
            <p>{{current.sets}}</p>
            <p>{{current.reps}}</p>
          </div>
        </div>
      </Vue2InteractDraggable>
    </div>
    <div
      v-if="next"
      class="fixed"
      style="z-index: 2"
      >
      <div class="card">
        <div class="container">
          <h4>{{next.name}}</h4>
          <p>{{next.sets}}</p>
          <p>{{next.reps}}</p>
        </div>
      </div>
    </div>
    <div
      v-if="index + 2 < cards.length"
      style="z-index: 1"
      class="fixed"
      >
      <div>
        <p>What goes here?</p>
      </div>
    </div>
  </section>
</template>
<script>
import { Vue2InteractDraggable, InteractEventBus  } from 'vue2-interact'
const EVENTS = {
  TO_GYM_BAG: 'toGymBag',
  BACK_TO_DB: 'backToDb',
  SKIP: 'skip'
}


export default {
  components: {
    Vue2InteractDraggable
  }, 
  data () {
    return {
      isVisible: true,
      index: 0,
      interactEventBus: {
        draggedRight: EVENTS.TO_GYM_BAG,
        draggedLeft: EVENTS.BACK_TO_DB,
        draggedUp: EVENTS.SKIP
      },
      cards: [
        { name: "Squats", sets: 4, reps: 10 },
        { name: "Push ups", sets: 3, reps: 20 },
        { name: "Preacher Curls", sets: 5, reps: 8 },
        { name: "Bench Press", sets: 2, reps: 9 },
        { name: "Inverted Rows", sets: 3, reps: 10 },
        { name: "Dumbbell Flies", sets: 5, reps: 8 },
        { name: "Calf Extensions", sets: 3, reps: 12 },
        { name: "Lateral Pull", sets: 3, reps: 15 },
        { name: "Shoulder Raises", sets: 4, reps: 10 },
        
      ]
    }
  },
  computed: {
    current() {
      return this.cards[this.index]
    },
    next() {
      return this.cards[this.index + 1]
    }
  },
  methods: {
    toGymBag() {
      InteractEventBus.$emit(EVENTS.TO_GYM_BAG)
    },
    backToDb() {
      InteractEventBus.$emit(EVENTS.BACK_TO_DB)
    },
    skip() {
      InteractEventBus.$emit(EVENTS.SKIP)
    },
    emitAndNext(event) {
      this.$emit(event, this.index)
      setTimeout(() => this.isVisible = false, 200)
      setTimeout(() => {
        this.index++
        this.isVisible = true
      }, 200)
    }
  }
};
</script>


<style scoped>

.container {
  background: #eceff1;
  width: 100%;
  height: 100vh;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */


.transition {
  animation: appear 200ms ease-in;
}

.fixed {
  position: fixed;
}
</style>
