<template>
  <div class="widget">
    <div v-for="profile in profiles" v-bind:key="profile.title">
      <h1>{{ profile.title }}</h1>
      <p>{{ profile.totalLabel }}</p>
      <div v-for="entry in profile.data" v-bind:key="entry.label">
        {{ entry.label }} <br />
        <!-- {{ entry.value }} -->
      </div>
      <div>{{ sumTotalValues }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DonutChartCard",
  data() {
    return {
      profiles: [],
    };
  },

  created: function() {
    // console.log("before axios call");
    axios
      .get("/chartData.json")
      .then((res) => {
        this.profiles = res.data.profiles;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  computed: {
    sumTotalValues: function() {
      let sumOfValues = this.profiles.map((profile) => {
        return profile.data.reduce((sum, currentItem) => {
          return sum + currentItem.value;
        }, 0);
      });
      return sumOfValues.map((eachSum) => {
        console.log(eachSum);
        return eachSum;
      });
    },
  },

  // mounted: function() {},
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> 
-->
