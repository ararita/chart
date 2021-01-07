<template>
  <section class="widget-item">
    <div class="top-section">
      <h1>{{ profile.title }}</h1>
      <img
        v-if="menuBtnVisible"
        src="../assets/menu-dots.png"
        alt="menu"
        @click="cloneComponent"
      />
    </div>
    <div>
      <apexchart
        class="chart"
        width="380"
        type="donut"
        :options="{
          responsive: [
            {
              breakpoint: 600,
              options: {
                chart: {
                  width: 300,
                },
              },
            },
          ],
          legend: { width: 90 },
          labels: getLabels,
          colors: ['#db1675', '#84acf0', '#662E9B'],
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    label: profile.totalLabel,
                  },
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
        :series="getValues"
      ></apexchart>
    </div>
  </section>
</template>

<script>
export default {
  name: "DonutChartCard",
  props: ["title", "profile"],
  data() {
    return {
      menuBtnVisible: true,
    };
  },
  computed: {
    getLabels: function() {
      return this.profile.data.map((obj) => {
        return obj.label;
      });
    },
    getValues: function() {
      return this.profile.data.map((obj) => {
        return obj.value;
      });
    },
  },
  methods: {
    cloneComponent: function() {
      this.$emit("clone", this.profile);
      this.menuBtnVisible = false;
    },
  },
};
</script>

<style scoped>
.widget-item {
  border-radius: 4px;
  box-shadow: 1px 1px 20px rgba(216, 215, 215, 0.74);
  padding: 20px;
}

.widget-item:hover {
  box-shadow: 5px 3px 20px rgba(202, 201, 201, 0.74);
  transition: ease-in 0.3s;
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

@media (max-width: 600px) {
  .widget-item {
    padding: 20px;
    margin-right: 1% auto;
  }
}
</style>
