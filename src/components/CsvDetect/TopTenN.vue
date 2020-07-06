<template>
  <div id="top-ten-n">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />

  </div>
</template>

<script>
export default {

name: 'top-ten-n',
      mounted() {
    this.$axios.get("http://localhost:5000/TOP10NounPatong")
    .then(({ data }) => {
      this.chartData = data;
    });
  },
  data: () => ({
    chartData: undefined
  })
}
</script>

<style>

</style>