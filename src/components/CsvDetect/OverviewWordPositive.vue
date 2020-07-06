<template>
  <div id="overview-word-positive">
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
    name: "overview-word-positive",
    data: () => ({
        chartData: undefined,
        chartOptions: {
            
        }
    }),
    mounted () {
    this.$axios
      .get('http://localhost:5000/MuchInPatongPositive')
      .then(({data}) => {
          this.chartData = data
      })
  }

}
</script>

<style>

</style>