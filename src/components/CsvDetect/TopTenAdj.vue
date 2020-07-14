<template>
  <div id="top-ten-adj">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "top-ten-adj",
  mounted() {
    this.$axios.get("http://localhost:5000/TOP10AdjPatong").then(({ data }) => {
      this.chartData = data;
    });
  },
  data: () => ({
    chartData: undefined,
    chartOptions: {
      chartArea: { width: "60%" },
      colors: [{ color: "#69ABFF" }],
      hAxis: {
        title: "Total Word",
        minValue: 0
      },
      vAxis: {
        title: "Emotion Text"
      }
    }
  })
};
</script>

<style>
</style>