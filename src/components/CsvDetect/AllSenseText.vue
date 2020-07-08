<template>
  <div id="all-sense-text">
    <h4 class="text-center">All Sense Text</h4>
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "AllSenseText",
  mounted() {
    this.$axios.get("http://localhost:5000/SentencePatong").then(({ data }) => {
      this.chartData = data;
    });
  },
  data: () => ({
    chartData: undefined,
    chartOptions: {
      chartArea: { width: "60%" },
      colors: [{color: '#69ABFF'}],
      hAxis: {
        title: "Total Word",
        minValue: 0
      },
      vAxis: {
        title: "Sense Text"
      }
    }
  })
};
</script>

<style scoped>
#all-sense-text {
  font-family: "Lato", Arial, sans-serif;
  text-transform: uppercase;
}
</style>