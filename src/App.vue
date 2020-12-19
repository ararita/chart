<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <DonutChartCard msg="Welcome to Your DonutChartCard.js App" />
  </div>
</template>

<script>
import DonutChartCard from "./components/DonutChartCard.vue";

export default {
  name: "App",
  components: {
    DonutChartCard,
  },
};
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
