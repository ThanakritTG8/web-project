<template>
  <div id="comment-page">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card bg-white">
          <div class="card-body">
            <accuracy />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card bg-white">
          <div class="card-body">
            <pos-neg />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <all-comments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import Accuracy from '@/components/CsvDetect/Accuracy'
import PosNeg from '@/components/CsvDetect/PosNeg'
import AllComments from '@/components/CsvDetect/AllComments'
export default {
    name: 'comment-page',
    components: {
        Accuracy,
        PosNeg,
        AllComments
    },  
    data() {
        return {
        
        };
    },
    methods: {

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
  height: 300px;
  margin-bottom: 50px;
}
</style>