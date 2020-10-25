<template>
  <div>
    <button @click.prevent="show"><i class="far fa-edit"></i></button>
    <modal :name="'edit-form-' + routine._id">
      <button @click="edit = true">Edit</button>
      <form @submit.prevent="update()">
        <div class="update-form" v-if="edit === true">
          <div>
            <label for="name">Name: </label>
            <input id="name" type="text" :placeholder=routine.name>
          </div>
          <div>
            <label for="wtype">Type: </label>
            <input id="wtype" type="text" :placeholder=routine.wtype>
          </div>
          <div>
            <label for="categories">Categories: </label>
            <input id="categories" type="text" :placeholder=routine.categories>
          </div>
          <div>
            <label for="sets">Sets: </label>
            <input id="sets" type="number" :placeholder=routine.sets>
          </div>
          <div>
            <label for="reps">Reps: </label>
            <input id="reps" type="number" :placeholder=routine.reps>
          </div>
          <div>
            <label for="time">Time: </label>
            <input id="time" type="text" :placeholder=routine.time>
          </div>
          <div>
            <label for="notes">Notes: </label>
            <input id="notes" type="text" :placeholder=routine.notes>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div v-if="edit === false">
        <p>Name: {{routine.name}}</p>
        <p>Type: {{routine.wtype}}</p>
        <p>Categories: {{routine.categories}}</p>
        <p>sets: {{routine.sets}}</p>
        <p>reps: {{routine.reps}}</p>
        <p>time: {{routine.time}}</p>
        <p>notes: {{routine.notes}}</p>
      </div>
    </modal>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'edit-routine',
  props: ['routine'],
  data () {
    return {
      edit: false,
    }
  },
  methods: {
    show () {
      this.$modal.show('edit-form-' + this.routine._id, {
        'before-close': this.edit = false
      })
    },
    update() {
      let params = {
        name: this.routine.name,
        wtype: this.routine.wtype,
        categories: this.routine.categories,
        sets: this.routine.sets,
        reps: this.routine.reps,
        time: this.routine.time,
        notes: this.routine.notes,
        userId: this.routine.userId
      }
      axios.patch("http://localhost:3000/api/routines/" + this.routine._id, params)
      .then((response) => {
        console.log(response.data)
      })
    } 
  }
}
</script>

<style>

</style>