<template>
  <div id="pos-neg">
    <h4>All Positive and Negative Sentence</h4>
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
    name: "accuracy",
    data: () => ({
        chartData: undefined,
        chartOptions: {
            slices: {
              0: { color: '#24F932'},
              1: { color: '#FF4B4B'}
            }
        }
    }),
    mounted () {
    this.$axios
      .get('http://localhost:5000/PositiveAndNegative')
      .then(({data}) => {
          this.chartData = data
      })
  }

}
</script>

<style>
</style>