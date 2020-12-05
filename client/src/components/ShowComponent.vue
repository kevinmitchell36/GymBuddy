<template>
  <div>
    <button @click.prevent="show"><i class="far fa-edit"></i></button>
    <modal :name="'edit-form-' + routine._id" :height="750">
      <form @submit.prevent="update()">
        <div class="form-wrap" v-if="edit === true">
          <div class="form-group">
            <label for="name">Name: </label>
            <input id="name" type="text"  v-model="routine.name">
          </div>
          <div class="form-group">
            <label for="wtype">Type: </label>
            <input id="wtype" type="text"  v-model="routine.wtype">
          </div>
          <div class="form-group">
            <label for="category">Categories: </label> 
            <input id="category" type="text" v-model="category">
            <span @click.prevent="addCategory()">Add</span>
          </div>
          <div class="tags" v-for="(category, index) in routine.categories" :key="index">
            <p @click="remove(category)">{{category}}</p>
          </div>
          <div class="form-group">
            <label for="sets">Sets: </label>
            <input id="sets" type="number" v-model="routine.sets">
          </div>
          <div class="form-group">
            <label for="reps">Reps: </label>
            <input id="reps" type="number"  v-model="routine.reps">
          </div>
          <div class="form-group">
            <label for="time">Time: </label>
            <input id="time" type="text"  v-model="routine.time">
          </div>
          <div class="form-group">
            <label for="notes">Notes: </label>
            <textarea id="notes" type="text" v-model="routine.notes"></textarea>
          </div>
          <button type="submit">Save</button>
          <button @click="edit = false">Cancel</button>
        </div>
      </form>
      <div class="form-wrap" v-if="edit === false">
        <div class="from-group">  
          <p>Name: </p>
          <p>{{routine.name}}</p>
        </div>

        <p>Type: {{routine.wtype}}</p>
        <p>Categories: {{routine.categories}}</p>
        <p>sets: {{routine.sets}}</p>
        <p>reps: {{routine.reps}}</p>
        <p>time: {{routine.time}}</p>
        <p>notes: {{routine.notes}}</p>
        <button @click="edit = true">Edit</button>
        <button @click="addToGymBag()">Gym Bag</button>
        <DeleteComponent :routine="routine"/>  
      </div>
    </modal>
  </div>
</template>

<script>
import DeleteComponent from "@/components/DeleteComponent"
import { mapGetters, mapActions } from 'vuex'
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
      rountineId: "",
      category: "",
    }
  },
  methods: {
    show () {
      this.$modal.show('edit-form-' + this.routine._id, {
        'before-close': this.edit = false
      })
    },
    hide() {
      this.$modal.hide('edit-form-' + this.routine._id)
      location.reload()
    },
    ...mapActions(['updateRoutine', 'createGymBagItem']),
    update() {
      this.updateRoutine({
        id: this.routine._id,
        name: this.attrs.name,
        wtype: this.attrs.wtype,
        categories: this.attrs.categories,
        sets: this.attrs.sets,
        reps: this.attrs.reps,
        time: this.attrs.time,
        notes: this.attrs.notes,
        userId: this.$auth.user.sub
      })
      .then(() => {
        this.hide()
      })
    },
    addToGymBag() {
      this.createGymBagItem({
        "sets": this.routine.sets,
        "reps": this.routine.reps,
        "time": this.routine.time,
        "notes": this.routine.notes,
        "setId": 1,
        "routine": this.routine._id
      })
    },
    remove(category) {
      this.routine.categories.splice(this.routine.categories.indexOf(category), 1);
    },
    addCategory() {
      this.routine.categories.push(this.category);
      this.category = '';
    },
    ...mapGetters(['wholeBag'])
    
  },
}
</script>

<style scoped>

.form-wrap button {
  width: 50%;
  display: inline-block;
  background: #2074c1;
  padding: 10px;
  text-shadow: 2px 2px 4px #000000;
  color:whitesmoke;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 15px
}

.form-wrap .form-group p {
  color: #666;
  text-align: left;
}


</style>