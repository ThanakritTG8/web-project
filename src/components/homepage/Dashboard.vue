<template>
  <div id="dashboard">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <h1 class="text-center">Dashboard</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 text-center">
        <div class="card shadow-lg p-2 mb-5 bg-white rounded" id="count-comment">
          <div class="card-body">
            <count-comment />
          </div>
        </div>
        <div class="card shadow-lg p-3 mb-5 bg-white rounded" id="accuracy">
          <div class="card-body">
            <pos-neg />
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
            <common-word-cloud-verb />
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
            <common-word-cloud-adj />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountComment from "@/components/chart/CountComment";
import PosNeg from "@/components/chart/PosNeg";
import AllSenseText from "@/components/chart/AllSenseText";
import CommonWordCloudNoun from "@/components/chart/CommonWordCloudNoun";
import CommonWordCloudVerb from "@/components/chart/CommonWordCloudVerb";
import CommonWordCloudAdv from "@/components/chart/CommonWordCloudAdv";
import CommonWordCloudAdj from "@/components/chart/CommonWordCloudAdj";

export default {
  name: "dashboard",
  components: {
    CountComment,
    PosNeg,
    AllSenseText,
    CommonWordCloudNoun,
    CommonWordCloudVerb,
    CommonWordCloudAdv,
    CommonWordCloudAdj,
  },
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
}
#count-comment {
  height: 160px;
}
#accuracy {
  height: 300px;
}
#all-sense-text {
  height: 500px;
}
#common-word-cloud {
  height: 350px;
}
</style>