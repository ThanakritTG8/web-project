<template>
  <div id="csv">
    <section>
      <div class="card">
        <div class="card-body">
          <nav class="nav justify-content-center">
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#">Common Words</a>
          </nav>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
              <count-comment />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <all-sense-text />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <common-word />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <accuracy />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <pos-neg />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
              <button type="button" class="btn btn-primary">More Detail</button>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <allcomments :comments="comments" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CountComment from "@/components/CsvDetect/CountComment";
import AllSenseText from "@/components/CsvDetect/AllSenseText";
import CommonWord from "@/components/CsvDetect/CommonWord";
import Accuracy from "@/components/CsvDetect/Accuracy";
import PosNeg from "@/components/CsvDetect/PosNeg";
import Allcomments from "@/components/CsvDetect/Allcomments";

export default {
  name: "Csv",
  data() {
    return {
      comments: [
        {
          id: 1,
          comment: "tg",
          translate: "tg",
          rating: "9"
        }
      ]
    };
  },

  components: {
    CountComment,
    AllSenseText,
    CommonWord,
    Accuracy,
    PosNeg,
    Allcomments
  }
};
</script>

<style scoped>
section {
  padding: 100px 45px;
}

.card {
  height: auto;
}

.row {
  margin-top: 60px;
}
button {
  margin-top: 60px;
}
</style>