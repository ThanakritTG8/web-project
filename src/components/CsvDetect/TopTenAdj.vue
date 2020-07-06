<template>
  <div id="top-ten-adj">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "top-ten-adj",
  mounted() {
    this.$axios.get("http://localhost:5000/TOP10AdjPatong")
    .then(({ data }) => {
      this.chartData = data;
    });
  },
  data: () => ({
    chartData: undefined
  })
};
</script>

<style>
</style>