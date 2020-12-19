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
  color: #2c3e50;
}

.widget {
  display: grid;
  grid-gap: 32px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.widget-item {
  box-shadow: 1px 1px 20px rgba(216, 215, 215, 0.74);
  padding: 20px;
}

.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}

.widget-item img {
  width: 25px;
  height: 25px;
  cursor: pointer;
  padding: 20px;
}

h1 {
  border-bottom: 3.5px dotted;
}
</style>
