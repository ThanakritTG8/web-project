<template>
  <div id="count-comment">
    <p class="head">All comment</p>
    <p class="lead" id="numComment">{{ numComment }}</p>
    <p class="sub-lead">comments</p>
  
  </div>
</template>

<script>
export default {
    name:'CountComment',
    data () {
        return {
          numComment: 100
        }     
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