<template>
  <section class="widget">
    <div
      v-for="(profile, index) in profiles"
      v-bind:key="index"
      class="widget-item"
    >
      <div class="top-section">
        <h1>{{ profile.title }}</h1>
        <img
          src="../assets/menu-dots.png"
          alt="menu"
          @click="cloneComponent(index, profile)"
        />
      </div>
      <div>
        <apexchart
          width="380"
          type="donut"
          :options="{
            legend: { width: 90 },
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
                    total: { show: true, label: profile.totalLabel },
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
    };
  },

  created: function() {
    axios
      .get("/chartData.json")
      .then((res) => {
        this.profiles = res.data.profiles;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    // getSum: function(data) {
    //   return data.reduce((sum, currentItem) => {
    //     return sum + currentItem.value;
    //   }, 0);
    // },
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
    cloneComponent: function(index, profile) {
      console.log("index", index);
      let copiedProfile = { ...profile };
      // console.log(JSON.parse(JSON.stringify(newProfile)));
      return this.profiles.push(copiedProfile);
    },
  },
};
</script>
