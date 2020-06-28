<template>
  <div id="all-sense-text">
    <h2 class="text-center">All Sense Text</h2>

    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
export default {
  name: "AllSenseText",
  data() {
    return {

      chartData: [
        ["Element", "Sense Word", { role: "style" }],
        ["Emotion", 100, 'stroke-color: #703593; stroke-opacity: 0.4; stroke-width: 4; fill-color: #C5A5CF; fill-opacity: 0.2'],
        ["Action", 200, 'stroke-color: #871B47; stroke-opacity: 0.4; stroke-width: 4; fill-color: #BC5679; fill-opacity: 0.2'],
        ["Character", 250, 'stroke-color: #FFE600; stroke-opacity:0.4; stroke-width: 4; fill-color: #FFE600; fill-opacity: 0.2'],

      ],

    }
  }
};
</script>

<style scoped>

    #all-sense-text {
        font-family: "Lato", Arial, sans-serif;
        text-transform: uppercase;
    }

</style>