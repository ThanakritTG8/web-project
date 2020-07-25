<template>
  <div id="top-ten-v-neg">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "top-ten-v-neg",
  mounted() {
    this.$axios
      .get("http://localhost:5000/top10NegVerbPatong")
      .then(({ data }) => {
        this.chartData = data;
      });
  },
  data: () => ({
    chartData: undefined,
    chartOptions: {
      chartArea: { width: "75%" },
      colors: [{ color: "#F77895" }],
      hAxis: {
        title: "Total Word",
        minValue: 0
      },
      vAxis: {
        title: "Action Text"
      },
      legend: {position: 'none'},
      backgroundColor: 'none'
    }
  })
};
</script>

<style>
</style>