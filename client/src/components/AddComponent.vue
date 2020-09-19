<template>
  <div>
    <button @click.prevent="show">Add Routine</button>
    <modal name="add-form" :height="700">
      <form class="form-wrap"
        @submit.prevent.once='postRoutine'>

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

// import RoutineService from '../services/RoutineService.js'
import { mapSetters, mapActions } from 'vuex' 
 
export default {

  name: 'addRoutine',
  data() {
    return {
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
    ...mapActions(['writeRoutine']),
    // async addRoutine() {
    //   // const accessToken = await this.$auth.getTokenSilently()
      
    //   await RoutineService.addRoutinePost(
    //     this.name, 
    //     this.wtype, 
    //     this.categories, 
    //     this.sets, 
    //     this.reps,
    //     this.time,
    //     this.notes,
    //     this.userId = this.$auth.user.sub
    //   );
    // },
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
  },
  computed: mapSetters(['addRoutine']),
}

</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.form-wrap {
  border: 1px solid black;
  box-shadow: 10px 10px 5px #aaaaaa;
  padding: 15px 25px;
  margin: 30px auto;
  max-width: 400px;
  
}

.form-wrap .form-group {
  margin-top: 15px;
}

.form-wrap .form-group label {
  display: block;
  color: #666;
  text-align: left;
}

.form-wrap .form-group input {
  width: 100%;
  padding: 10px;
  border: #ddd 1px solid;
  border-radius: 5px;
}

.form-wrap .form-group span {
  padding: 2px;
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
  bottom: 28px;
  left: 150px;
  background: #2074c1;
  text-shadow: 2px 2px 4px #000000;
  color:whitesmoke;
}

.form-wrap .form-group span:hover {
  cursor: pointer;
  background-color: #0000cd;

}

.form-wrap button {
  width: 100%;
  display: block;
  background: #2074c1;
  padding: 10px;
  text-shadow: 2px 2px 4px #000000;
  color:whitesmoke;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 15px;
}

.form-wrap button:hover {
  cursor: pointer;
  background-color: #0000cd;
}

.form-wrap .form-group textarea {
  width: 100%;
  padding: 10px;
  border: #ddd 1px solid;
  border-radius: 5px;
}

.form-wrap .tags {
  display: inline-block;
}

.form-wrap .tags p {
  border: 1px solid grey;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 10px;
  padding: 5px;
  background: #2074c1;
  text-shadow: 2px 2px 4px #000000;
  color:whitesmoke;

}

</style>