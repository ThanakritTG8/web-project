<template>
  <div id="neg-common">
    <div class="row">
      <div class="col-lg-12">
        <h4 class="title text-center">All Negative</h4>
        <div class="title text-center" id="chart">
          <overview-word-negative />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <top-ten-n-neg />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <top-ten-v-neg />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <top-ten-adj-neg />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <top-ten-adv-neg />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OverviewWordNegative from "@/components/CsvDetect/OverviewWordNegative";
import TopTenAdjNeg from "@/components/CsvDetect/TopTenAdjNeg";
import TopTenAdvNeg from "@/components/CsvDetect/TopTenAdvNeg";
import TopTenNNeg from "@/components/CsvDetect/TopTenNNeg";
import TopTenVNeg from "@/components/CsvDetect/TopTenVNeg";

export default {
  name: "neg-common",
  components: {
    OverviewWordNegative,
    TopTenAdjNeg,
    TopTenAdvNeg,
    TopTenNNeg,
    TopTenVNeg,
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  height: 320px;
  background: rgb(255, 255, 255);
  border-radius: 20px;
}
#chart {
  margin-bottom: 30px;
}
</style>