<template>
  <div>
    <form
      @submit.prevent='addRoutine'>
    
        <label for='name'>Name</label>
        <input
          id='name'
          v-model='name'
          type='text'
          name='name'
        >  
    
        <label for='wtype'>Type</label>
        <input
          id='wtype'
          v-model='wtype'
          type='text'
          name='wtype'
        >  
      
        <label for='categories'>Categories</label>
        <input
          id='categories'
          v-model='categories'
          type='text'
          name='categories'
        >  
    
        <label for='sets'>Sets</label>
        <input
          id='sets'
          v-model='sets'
          type='number'
          name='sets'
        >  
      
        <label for='reps'>Reps</label>
        <input
          id='reps'
          v-model='reps'
          type='number'
          name='reps'
        >   
      
        <label for='time'>Time</label>
        <input
          id='time'
          v-model='time'
          type='number'
          name='time'
        >   
      
        <label for='notes'>Notes</label>
        <input
          id='notes'
          v-model='notes'
          type='text'
          name='notes'
        >   

       <p>{{$auth.user.user_id}}</p>

      <button type='submit'>Submit</button>
    
    </form>
  </div>
    
</template>

<script>

import RoutineService from '../services/RoutineService.js'
  
export default {
  //Names template
  name: 'addRoutine',
  data() {
    return {
      name: '',
      wtype: '',
      categories: '',
      sets: 0,
      reps: 0,
      time: 0,
      notes: '',
      userId: ''
    }
  },
   created() {
    this.addRoutine();
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
    } 
  }
}

</script>