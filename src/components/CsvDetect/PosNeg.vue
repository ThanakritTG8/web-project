<template>
  <div id="pos-neg">
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
    name: "accuracy",
    data: () => ({
        chartData: undefined,
        chartOptions: {
            
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