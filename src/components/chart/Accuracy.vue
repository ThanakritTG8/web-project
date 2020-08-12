<template>
  <div id="accuracy">
    <h4>Detect Accuracy</h4>
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "accuracy",
  data: () => ({
    chartData: undefined,
    chartOptions: {
      pieHole: 0.3,
      slices: {
        0: { color: "#24F932" },
        1: { color: "#FF4B4B" }
      },
      legend: { position: "bottom" },
      backgroundColor: "none"
    }
  }),
  mounted() {
    this.$axios
      .get("http://localhost:5000/CorrectNodeRatingType1Patong")
      .then(({ data }) => {
        this.chartData = data;
      });
  }
};
</script>

<style>
</style>