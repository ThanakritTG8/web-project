<template>
  <div id="count-comment">
    <div class="row">
      <div class="col-lg-6">
        <p class="head text-left" id="comment-icon">
        <i class="fa fa-comments"></i>
        </p>
      </div>
      <div class="col-lg-4">
        <p class="head" id="text">All Comment</p>
        <p
          class="lead "
          id="numComment"
          v-for="countDatas in countCommentData"
          :key="countDatas"
        >{{ countDatas.numComment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountComment",
  components: {},
  data: () => ({
    countCommentData: undefined,
  }),
  mounted() {
    this.$axios
      .get("http://localhost:5000/CountOfNumberMessage")
      .then(({ data }) => {
        this.countCommentData = data;
      });
  },
};
</script>

<style scoped>
  #count-comment {
    font-family: "Lato", Arial, sans-serif;
    text-transform: uppercase;
    width: 100%;
  }
  #text {
    padding-top: 0px;
    font-size: 15px;
    margin-right: 20px;
  }
  #numComment {
    font-size: 45px;
    padding-top: 0;
    margin-right: 20px;
  }
  #comment-icon{
    margin-left: 20px;
    font-size: 40px;
    margin-top: 10px;
    margin-right: 20px;
  }
  
  i.fa {
    display: inline-block;
    border-radius: 60px;
    box-shadow: 0px 0px 5px rgb(5, 5, 5);
    padding: 0.6em 0.6em;
  }
</style>