<template>
  <div class="container">
    <AddComponent />   
  </div>
</template>

<script>

import AddComponent from '@/components/AddComponent.vue'
export default {
  name: "add-routine",
  components: {
    AddComponent
  }
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