<template>
  <div id="csv-body">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card">
          <div class="card-body">
            <count-comment />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card">
          <div class="card-body">
            <accuracy />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card">
          <div class="card-body">
            <all-sense-text />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card">
          <div class="card-body">
            common-word
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountComment from "@/components/CsvDetect/CountComment";
import AllSenseText from "@/components/CsvDetect/AllSenseText";
import Accuracy from '@/components/CsvDetect/Accuracy'
export default {
  name: "csv-body",
  components: {
    CountComment,
    AllSenseText,
    Accuracy
  }
};
</script>

<style scoped>
.row {
  margin-top: 60px;
}
button {
  text-align: center;
  margin-top: 60px;
}
.card {
  height: 300px;
  margin-bottom: 50px;
  background: white;
}
</style>