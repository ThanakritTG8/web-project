<template>
  <div id="pos-neg">
    <h4>All Positive and Negative Sentence</h4>
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
    name: "pos-neg",
    data: () => ({
        chartData: undefined,
        chartOptions: {
            slices: {
              0: { color: '#24F932'},
              1: { color: '#FF4B4B'}
            },
            backgroundColor: 'none',
            legend: {position: 'top', alignment: 'center'}
        }
    }),
    mounted () {
    this.$axios
      .get('http://localhost:5000/PositiveAndNegativePatongTrip')
      .then(({data}) => {
          this.chartData = data
      })
  }

}
</script>

<style>
</style>