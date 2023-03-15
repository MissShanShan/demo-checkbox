<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <checkboxs/>
    <filderdemo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import checkboxs from './components/CheckBoxs.vue'
import filderdemo from './components/filtersDemo.vue'
export default {
  name: 'App',
  components: {
    checkboxs,
    filderdemo
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
  margin-top: 60px;
}
</style>
