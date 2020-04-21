<template>
  <div>
    <header id="showcase">
      <div class="showcase-content">
        <h1>What do you want to do today?</h1>
        <i class="fas fa-chevron-circle-down fa-3x"></i>
      </div>
    </header>
    <div class="suggestions">
        <a class="generate" href="#"><i class="far fa-calendar-alt"></i>Repeat</a>
        <p>View your calendar and repeat your favorite workout.</p> 
    </div>
    <div class="suggestions">
        <a class="generate" href="#"><i class="fas fa-list"></i>Suggest</a>
        <p>We'll auto generate a workout based off your suggestions.</p> 
    </div>
    <div class="suggestions">
        <router-link to="/routines"><i class="fas fa-pencil-alt"></i>Build</router-link>
        <p>Select your routines from your database.</p> 
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkoutSuggestion',
  components: {
  }
}
</script>

<style>

.suggestions {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 5rem;
  border: 1px solid black;
  align-items: center;
  height: 100px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #bdbdbd;
  border-radius: 5px;
}

.suggestions i {
  padding: 0.5rem;
  color:blue;
}

.suggestions a {
  padding: 0.5rem;
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  font-size: 25px;
  text-shadow: 2px 2px 4px #000000;
  width: 100%;
  /* border: 2px black solid; */
  margin-left: 25px;
}

.suggestions p {
  text-align: center;
  color:whitesmoke;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000000;
}


#showcase {
  background: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
  no-repeat center center/cover;
  height: 50vh;
  text-shadow: 2px 2px 4px #000000;
}

#showcase .showcase-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  color: whitesmoke;
}


</style>