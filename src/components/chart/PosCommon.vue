<template>
  <div id="pos-common">
    <div class="row">
      <div class="col-lg-12">
        <h4 class="title text-center">All Positive</h4>
        <div class="title text-center" id="chart">
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
import OverviewWordPositive from '@/components/chart/OverviewWordPositive'
import TopTenN from '@/components/chart/TopTenN'
import TopTenV from '@/components/chart/TopTenV'
import TopTenAdv from '@/components/chart/TopTenAdv'
import TopTenAdj from '@/components/chart/TopTenAdj'

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
  height: 320px;
  background: rgb(255, 255, 255);
  border-radius: 20px;
}
#chart {
  margin-bottom: 30px;
}
</style>