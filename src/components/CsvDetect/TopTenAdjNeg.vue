<template>
  <div id="top-ten-adj-neg">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "top-ten-adj-neg",
  mounted() {
    this.$axios.get("http://localhost:5000/top10NegAdjPatong").then(({ data }) => {
      this.chartData = data;
    });
  },
  data: () => ({
    chartData: undefined,
    chartOptions: {
      width: '80%',
      height: 250,
      colors: [{ color: "#69ABFF" }],
      hAxis: {
        title: "Total Word",
        minValue: 0
      },
      vAxis: {
        title: "Emotion Text"
      },
      legend: {position: 'none'},
      backgroundColor: 'none'
    }
  })
};
</script>

<style>
</style>