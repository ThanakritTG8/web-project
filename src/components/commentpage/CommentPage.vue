<template>
  <div id="comment-page">
    <div id="space"></div>
    <div class="row">
      <div class="col-lg-8" id="comments"> 
        <all-comments />
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 text-center">
        <div id="blank"></div>
        <div class="card bg-white">
          <div class="card-body">
            <pos-neg />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accuracy from '@/components/chart/Accuracy'
import PosNeg from '@/components/chart/PosNeg'
import AllComments from '@/components/chart/AllComments'
import Pagination from '@/components/chart/Pagination'

export default {
  name: "comment-page",
  components: {
    Accuracy,
    PosNeg,
    AllComments,
    Pagination,  
  }
}
</script>

<style scoped>
.card {
  height: 300px;
  border-radius: 20px;
  margin-bottom: 35px;
}

</style>