<template>
  <div id="app">
    <NavComponent/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import NavComponent from './components/partials/NavComponent.vue';
import FooterComponent from './components/partials/FooterComponent.vue';
export default {
  name: 'app',
  components: {
    NavComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
