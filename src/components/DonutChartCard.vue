<template>
  <section class="widget">
    <div
      v-for="profile in profiles"
      v-bind:key="profile.title"
      class="widget-item"
    >
      <div class="top-section">
        <h1>{{ profile.title }}</h1>

        <img src="../assets/menu-dots.png" alt="menu" />
      </div>
      <!-- <p>{{ profile.totalLabel }}</p>
      {{ getSum(profile.data) }} -->
      <div>
        <apexchart
          width="380"
          type="donut"
          :options="{
            chart: {
              width: 200,
            },
            labels: getLabels(profile.data),
            colors: ['#db1675', '#84acf0', '#662E9B'],
            dataLabels: {
              enabled: false,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: { show: true },
                    name: {
                      show: true,
                    },
                    value: {
                      show: true,
                    },
                  },
                },
              },
            },
          }"
          :series="getValues(profile.data)"
        ></apexchart>
      </div>
      <!-- <div v-for="entry in profile.data" v-bind:key="entry.label">
        {{ entry.label }} <br />
      </div> -->
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "DonutChartCard",
  data() {
    return {
      profiles: [],
      // options: {
      //   chart: {
      //     id: "chart",
      //   },
      //   xaxis: {
      //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      //   },
      // },
      // series: [
      //   {
      //     name: "series-1",
      //     data: [30, 40, 45, 50, 49, 60, 70, 91],
      //   },
      // ],
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

  // computed: {
  //   sumTotalValues: function() {
  //     let sumOfValues = this.profiles.map((profile) => {
  //       return profile.data.reduce((sum, currentItem) => {
  //         return sum + currentItem.value;
  //       }, 0);
  //     });
  //     return sumOfValues.map((eachProfileSum) => {
  //       // console.log(eachProfileSum);
  //       return eachProfileSum;
  //     });
  //   },
  // },

  methods: {
    getSum: function(data) {
      return data.reduce((sum, currentItem) => {
        return sum + currentItem.value;
      }, 0);
    },
    getLabels: function(data) {
      return data.map((obj) => {
        return obj.label;
      });
    },
    getValues: function(data) {
      return data.map((obj) => {
        return obj.value;
      });
    },
  },
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
