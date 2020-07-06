<template>
  <div id="all-sense-text">
    <h2 class="text-center">All Sense Text</h2>
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "AllSenseText",
  mounted () {
      this.$axios
        .get('http://localhost:5000/SentencePatong')
        .then(({data}) => {
            this.chartData = data
        })
  },
  data: () => ({
      chartData: undefined,
      
  })
};
</script>

<style scoped>

    #all-sense-text {
        font-family: "Lato", Arial, sans-serif;
        text-transform: uppercase;
    }

</style>