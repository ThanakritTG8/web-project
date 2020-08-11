<template>
  <div id="top-ten-n">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "top-ten-n",
  mounted() {
    this.$axios
      .get("http://localhost:5000/TOP10NounPatong")
      .then(({ data }) => {
        this.chartData = data;
      });
  },
  data: () => ({
    chartData: undefined,
    chartOptions: {
      width: '80%',
      height: 250,
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