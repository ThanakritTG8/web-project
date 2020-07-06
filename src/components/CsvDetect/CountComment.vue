<template>
  <div id="count-comment">
    <p class="head">All Comment</p>
    <p class="lead" id="numComment" v-for="countDatas in countCommentData" :key="countDatas">{{ countDatas.numComment }}</p>
    <p class="sub-lead">comments</p>

  </div>

  
</template>

<script>
export default {
  name: "CountComment",
  components: {
    
  },
  data: () => ({
    countCommentData: undefined,

  }),
  mounted () {
    this.$axios
      .get('http://localhost:5000/CountOfNumberMessage')
      .then(({data}) => {
        this.countCommentData = data;
      })
  }
}
</script>

<style scoped>
  #count-comment {
    font-family: "Lato", Arial, sans-serif;
    text-transform: uppercase;
  }

  .head {
    padding-top: 30px;
    font-size: 20px;
  }
  #numComment {
    font-size: 60px;
    padding-top : 0;
  }

  .sub-lead {
    font-size: 20px;
  }

</style>