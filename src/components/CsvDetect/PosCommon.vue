<template>
  <div id="pos-common">
    <div class="row">
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <h4 class="card-title text-center">All Positive</h4>
            <overview-word-positive />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <overview-text />
          </div>
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
import OverviewWordPositive from "@/components/CsvDetect/OverviewWordPositive"
import OverviewText from '@/components/CsvDetect/OverviewText'
import TopTenN from '@/components/CsvDetect/TopTenN'
import TopTenV from '@/components/CsvDetect/TopTenV'
import TopTenAdj from '@/components/CsvDetect/TopTenAdj'
import TopTenAdv from '@/components/CsvDetect/TopTenAdv'

export default {
  name: "pos-common",
  components: {
    OverviewWordPositive,
    OverviewText,
    TopTenN,
    TopTenV,
    TopTenAdj,
    TopTenAdv
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  height: 300px;
}
</style>