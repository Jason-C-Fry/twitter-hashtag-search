<template>
  <div id="app">
    <div class="header">
      <img alt="Meshify logo" src="./assets/logo.png" align="left">
    </div>
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header{
  /* background: #1c190e; */
  background-image: linear-gradient(#1c190e, #232e51);
  padding: 25px;
  height:100px;
}
</style>
