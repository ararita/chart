<template>
  <div id="app">
    <section class="widget">
      <DonutChartCard
        v-for="(profile, index) in profiles"
        :profile="profile"
        :key="index"
        @clone="cloneComponent"
      />
    </section>
  </div>
</template>

<script>
import DonutChartCard from "./components/DonutChartCard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    DonutChartCard,
  },

  data() {
    return {
      profiles: [],
    };
  },
  created: function() {
    axios
      .get("/chartData.json")
      .then((res) => {
        this.profiles = res.data.profiles;
        // this.profiles.forEach((profile) => {
        // Vue.set(object, propertyName, value)
        // this.$set(profile, "menuBtnVisible", true);
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    cloneComponent: function(profile) {
      let copiedProfile = { ...profile };
      this.profiles.push(copiedProfile);
    },
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
</style>
