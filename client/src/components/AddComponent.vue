<template>
  <div>
    <button @click.prevent="show">Add Routine</button>
    <modal name="add-form" :height="700">
      <form class="form-wrap"
        @submit.prevent.once='addRoutine'>

          <div class="form-group">
            <label for='name'>Name</label>
            <input
              id='name'
              v-model='name'
              type='text'
              name='name'
            >
          </div>  

          <div class="form-group">
            <label for='wtype'>Type</label>
            <input
              id='wtype'
              v-model='wtype'
              type='text'
              name='wtype'
            >
          </div>  
        
          <div class="form-group">
            <label for='category'>Categories</label>
            <input
              id='category'
              v-model='category'
              type='text'
              placeholder="E.g. Upper body"
            ><span v-on:click="addCategory">Add</span>
          </div>
          
          <div class="tags"
            v-for="category in categories"
            v-bind:key="category">
            <p v-on:click="remove(category)">{{category}}</p>
          </div> 

          <div class="form-group">
            <label for='sets'>Sets</label>
            <input
              id='sets'
              v-model='sets'
              type='number'
              name='sets'
            >
          </div>  
        
          <div class="form-group">
            <label for='reps'>Reps</label>
            <input
              id='reps'
              v-model='reps'
              type='number'
              name='reps'
            >
          </div>   

          <div class="form-group">
            <label for='time'>Time</label>
            <input
              id='time'
              v-model='time'
              type='number'
              name='time'
            >
          </div>   

          <div class="form-group">
            <label for='notes'>Notes</label>
            <textarea
              id='notes'
              v-model='notes'
              type='text'
              name='notes'
            >
            </textarea>
          </div>   

        <button type='submit'>Submit</button>
      
      </form>
    </modal>  
  </div>    
</template>

<script>

import RoutineService from '../services/RoutineService.js'

 
export default {
  //Names template
  name: 'addRoutine',
  data() {
    return {
      category: '',
      name: '',
      wtype: '',
      categories: [],
      sets: null,
      reps: null,
      time: null,
      notes: '',
      userId: ''
    }
  },
  methods: {
    async addRoutine() {
      // const accessToken = await this.$auth.getTokenSilently()
      
      await RoutineService.addRoutinePost(
        this.name, 
        this.wtype, 
        this.categories, 
        this.sets, 
        this.reps,
        this.time,
        this.notes,
        this.userId = this.$auth.user.sub
      );
    },
    addCategory() {
      this.categories.push(this.category);
      console.log(this.categories);
      this.category = '';
    },
    remove(category) {
      this.categories.splice(this.categories.indexOf(category), 1);
    },
  show () {
    this.$modal.show('add-form')
    },
  }
}

</script>

