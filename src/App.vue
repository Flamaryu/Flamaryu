<template>
  <HomeView msg="Aspiring Software Developer"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeView from './components/HomeView.vue'

export default {
  name: 'App',
  components: {
   HomeView
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(60deg, #D7DEDC, #1e90ff); /* Orange to Blue gradient */
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>./components/HomeView.vue
