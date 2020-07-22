<template>
  <div id="overview-word-negative">
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
    name: "overview-word-negative",
    data: () => ({
        chartData: undefined,
        chartOptions: {
            legend: {
              position: 'left'
            }
        }
    }),
    mounted () {
    this.$axios
      .get('http://localhost:5000/MuchInPatongNegative')
      .then(({data}) => {
          this.chartData = data
      })
  }

}
</script>

<style>

</style>