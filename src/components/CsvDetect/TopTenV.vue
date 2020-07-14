<template>
  <div id="top-ten-v">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "top-ten-v",
  mounted() {
    this.$axios
      .get("http://localhost:5000/TOP10VerbPatong")
      .then(({ data }) => {
        this.chartData = data;
      });
  },
  data: () => ({
    chartData: undefined,
    chartOptions: {
      chartArea: { width: "60%" },
      colors: [{ color: "#F77895" }],
      hAxis: {
        title: "Total Word",
        minValue: 0
      },
      vAxis: {
        title: "Action Text"
      }
    }
  })
};
</script>

<style>
</style>