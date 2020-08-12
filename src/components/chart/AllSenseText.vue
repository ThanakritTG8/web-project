<template>
  <div id="all-sense-text ">
    <button @click="print">print</button>
    <h4 class="text-center" id="title">All Sense Text</h4>
      <GChart id="chart" type="ColumnChart" :data="chartData" :options="chartOptions" />
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
    output: null,
    chartData: undefined,
    chartOptions: {
      width: 1100,
      height: 400,
      colors: [{ color: "#69ABFF" }],
      hAxis: {
        title: "Sence Word",
        minValue: 0,
      },
      vAxis: {
        title: "Total Word",
      },
      legend: { position: "none" },
      backgroundColor: "none",
    },
  }),
   methods: {
    print () {
      // Pass the element id here
      this.$htmlToPaper('chart');
    }
  }
};
</script>

<style scoped>
#all-sense-text {
  font-family: "Lato", Arial, sans-serif;
  text-transform: uppercase;
}
#title {
  padding-top: 20px;
}
</style>