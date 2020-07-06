<template>
  <div id="csv-body">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 text-center">
        <count-comment />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <all-sense-text />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">common-word</div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <accuracy />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <pos-neg />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="button text-center">
          <button @click="more" type="button" class="btn btn-primary">More Detail</button>
        </div>
        <all-comments :comments="comments" v-if="click" />
      </div>
    </div>
  </div>
</template>

<script>
import CountComment from "@/components/CsvDetect/CountComment";
import AllSenseText from "@/components/CsvDetect/AllSenseText";
import Accuracy from "@/components/CsvDetect/Accuracy";
import PosNeg from "@/components/CsvDetect/PosNeg";
import AllComments from '@/components/CsvDetect/AllComments'

export default {
  name: "csv-body",
  data() {
    return {
      click: false
    };
  },
  methods: {
    more() {
      this.click = true
    }
  },

  components: {
    CountComment,
    AllSenseText,
    Accuracy,
    PosNeg,
    AllComments
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
</style>