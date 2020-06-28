<template>
  <div id="home">
    <h1 class="text-center">{{ text }}</h1>
    <section>
      <div class="card">
        <div class="card-body col-4">
          <text-box />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-6">
              <sense-text />
            </div>
            <div class="col-6">
              <pie-chart />
            </div>
          </div>
          <div class="row">
            <column-chart />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TextBox from "@/components/TextBox";
import SenseText from "@/components/DetectText/SenseText";
import PieChart from '@/components/DetectText/PieChart'
import ColumnChart from '@/components/DetectText/ColumnChart'

export default {
  name: "Home",
  components: {
    TextBox,
    SenseText,
    PieChart,
    ColumnChart
  },
  data() {
    return {
      text: "Detect Word Sense"
    };
  }
};
</script>

<style scoped>
h1 {
  color: #fff;
  font-size: 3rem;
  padding-top: 102px;
  font-family: "Lato", Arial, sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
}
section {
  padding: 85px 70px;
}
.card {
  height: 500px;
}
</style>