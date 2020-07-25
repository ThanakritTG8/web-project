<template>
  <div id="pos-common">
    <div class="row">
      <div class="col-lg-12">
        <h4 class="title text-center">All Positive</h4>
        <div class="title text-center">
          <overview-word-positive />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <top-ten-n />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <top-ten-v />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <top-ten-adj />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <top-ten-adv />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OverviewWordPositive from "@/components/CsvDetect/OverviewWordPositive";
import TopTenN from "@/components/CsvDetect/TopTenN";
import TopTenV from "@/components/CsvDetect/TopTenV";
import TopTenAdj from "@/components/CsvDetect/TopTenAdj";
import TopTenAdv from "@/components/CsvDetect/TopTenAdv";

export default {
  name: "pos-common",
  components: {
    OverviewWordPositive,
    TopTenN,
    TopTenV,
    TopTenAdj,
    TopTenAdv,
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  height: 300px;
  background: rgb(241, 239, 239);
  border-radius: 20px;
}
</style>