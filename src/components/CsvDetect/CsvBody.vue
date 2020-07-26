<template>
  <div id="csv-body">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 text-center">
        <div class="card" id="count-comment">
          <div class="card-body">
            <count-comment />
          </div>
        </div>
        <div class="card" id="accuracy">
          <div class="card-body">
            <accuracy />
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12 text-center">
        <div class="card" id="all-sense-text">
          <div class="card-body">
            <all-sense-text />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card" id="common-word-cloud">
          <div class="card-body">
            <common-word-cloud-noun />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card" id="common-word-cloud">
          <div class="card-body">
            <common-word-cloud-adj />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card" id="common-word-cloud">
          <div class="card-body">
            <common-word-cloud-adv />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card" id="common-word-cloud">
          <div class="card-body">
            <common-word-cloud-verb />
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
import CommonWordCloudAdj from '@/components/CsvDetect/CommonWordCloudAdj'
import CommonWordCloudAdv from '@/components/CsvDetect/CommonWordCloudAdv'
import CommonWordCloudNoun from '@/components/CsvDetect/CommonWordCloudNoun'
import CommonWordCloudVerb from '@/components/CsvDetect/CommonWordCloudVerb'

export default {
  name: "csv-body",
  components: {
    CountComment,
    AllSenseText,
    Accuracy,
    CommonWordCloudAdj,
    CommonWordCloudAdv,
    CommonWordCloudNoun,
    CommonWordCloudVerb
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
  margin-bottom: 20px;
  border-radius: 20px;
}
#count-comment {
  height: 160px;
}
#accuracy {
  height: 300px;
}
#all-sense-text {
  height: 480px;
}
#common-word-cloud{
  height: 350px;
}
</style>