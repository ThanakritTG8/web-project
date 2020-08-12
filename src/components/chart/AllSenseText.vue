<template>
  <div id="all-sense-text ">
    <div class="h2 mb-0 right">
   <a href="#">
     <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-printer-fill" fill="currentColor" @click="print">
  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5z"/>
  <path fill-rule="evenodd" d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
  <path fill-rule="evenodd" d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
      </svg>
      </a>
    </div>
    <div id="allSense">
    <h4 class="text-center" id="title">All Sense Text</h4>
    <GChart id="chart" type="ColumnChart" :data="chartData" :options="chartOptions" />
  </div>
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
    print() {
      // Pass the element id here
      this.$htmlToPaper("allSense");
    },
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
.right {
  text-align: right;
}
</style>