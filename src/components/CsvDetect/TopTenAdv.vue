<template>
  <div id="top-ten-adv">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "top-ten-adv",
  mounted() {
    this.$axios.get("http://localhost:5000/TOP10AdvPatong").then(({ data }) => {
      this.chartData = data;
    });
  },
  data: () => ({
    chartData: undefined,
    chartOptions: {
      chartArea: { width: "60%" },
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