<template>
  <div id="top-ten-n-neg">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "top-ten-n-neg",
  mounted() {
    this.$axios
      .get("http://localhost:5000/top10NegNounPatong")
      .then(({ data }) => {
        this.chartData = data;
      });
  },
  data: () => ({
    chartData: undefined,
    chartOptions: {
      chartArea: { width: "75%" },
      colors: [{ color: "#73FD64" }],
      hAxis: {
        title: "Total Word",
        minValue: 0
      },
      vAxis: {
        title: "About Place Text"
      },
      legend: {position: 'none'},
      backgroundColor: 'none'
    }
  })
};
</script>

<style>
</style>