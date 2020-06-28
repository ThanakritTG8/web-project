<template>
  <div id="pos-neg">
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "PosNeg",
  data() {
    return {
      chartData: [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2]
      ],
      chartOptions: {}
    };
  }
};
</script>

<style>
</style>