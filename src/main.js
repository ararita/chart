import Vue from "vue";
import App from "./App.vue";
// import "@/plugins/apexcharts";
import VueApexCharts from "vue-apexcharts";
// // import VueApexCharts from "vue3-apexcharts";

Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
