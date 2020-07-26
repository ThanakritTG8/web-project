<template>
  <div id="top-ten-adv-neg">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "top-ten-adv-neg",
  mounted() {
    this.$axios.get("http://localhost:5000/top10NegAdvPatong").then(({ data }) => {
      this.chartData = data;
    });
  },
  data: () => ({
    chartData: undefined,
    chartOptions: {
      chartArea: { width: "60%", height: "70%" },
      colors: [{ color: "#FFFB5B" }],
      hAxis: {
        title: "Total Word",
        minValue: 0
      },
      vAxis: {
        title: "Character Text"
      },
      legend: {position: 'none'},
      backgroundColor: 'none'
    }
  })
};
</script>

<style>
</style>