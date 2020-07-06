<template>
  <div id="top-ten-adv">
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />

  </div>
</template>

<script>
export default {

name: 'top-ten-adv',
  mounted() {
    this.$axios.get("http://localhost:5000/TOP10AdvPatong")
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