<template>
  <div id="accuracy">
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import pieChartVue from '../DetectText/pieChart.vue';
export default {
  name: "Accuracy",
  data() {
    return {
      chartData: [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7]
      ],
      chartOptions: {
          pieHole: 0.6
      }
    
    };
  }
};
</script>

<style>
</style>