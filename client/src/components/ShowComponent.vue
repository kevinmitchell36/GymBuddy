<template>
  <div>
    <button @click.prevent="show"><i class="far fa-edit"></i></button>
    <modal :name="'edit-form-' + routine._id">
      <button @click="edit = true">Edit</button>
      <DeleteComponent :routineId="routine._id"/>  
      <form @submit.prevent="update()">
        <div class="update-form" v-if="edit === true">
          <div>
            <label for="name">Name: </label>
            <input id="name" type="text"  v-model="routine.name">
          </div>
          <div>
            <label for="wtype">Type: </label>
            <input id="wtype" type="text"  v-model="routine.wtype">
          </div>
          <div>
            <label for="category">Categories: </label>
            <input id="category" type="text" v-model="routine.categories">
          </div>
          <div>
            <label for="sets">Sets: </label>
            <input id="sets" type="number"  v-model="routine.sets">
          </div>
          <div>
            <label for="reps">Reps: </label>
            <input id="reps" type="number"  v-model="routine.reps">
          </div>
          <div>
            <label for="time">Time: </label>
            <input id="time" type="text"  v-model="routine.time">
          </div>
          <div>
            <label for="notes">Notes: </label>
            <input id="notes" type="text" v-model="routine.notes">
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
import DeleteComponent from "@/components/DeleteComponent"
import axios from 'axios';
export default {
  name: 'edit-routine',
  props: ['routine'],
  components: {
    DeleteComponent
  },
  data () {
    return {
      attrs: this.routine,
      edit: false,
      rountineId: ""
    }
  },
  methods: {
    show () {
      this.$modal.show('edit-form-' + this.routine._id, {
        'before-close': this.edit = false
      })
    },
    hide() {
      console.log("Hiding...in theory")
      this.$modal.hide('edit-form-' + this.routine._id)
      location.reload()
    },
    update() {
      let params = {
        name: this.attrs.name,
        wtype: this.attrs.wtype,
        categories: this.attrs.categories,
        sets: this.attrs.sets,
        reps: this.attrs.reps,
        time: this.attrs.time,
        notes: this.attrs.notes,
        userId: this.routine.userId
      }
      console.log(params);
      axios.patch("http://localhost:3000/api/routines/" + this.routine._id, params)
      .then(() => {
        this.hide()
      })
    } 
  }
}
</script>

<style>

</style>