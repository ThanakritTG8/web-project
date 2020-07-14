<template>
  <div id="neg-common">
    <div class="row">
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            <h4 class="card-title text-center">All Negative</h4>
            <overview-word-negative />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            overview-text 
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            top-ten-n 
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card text-left">
          <div class="card-body">
            top-ten-v 
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
import OverviewWordNegative from '@/components/CsvDetect/OverviewWordNegative'

export default {
  name: "neg-common",
  components: {
      OverviewWordNegative
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  height: 300px;
}
</style>