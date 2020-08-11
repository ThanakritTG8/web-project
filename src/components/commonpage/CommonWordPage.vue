<template>
  <div id="common-word-page">
    <b-button pill variant="outline-danger" id="button" @click="pos">positive</b-button>

    <b-button pill variant="outline-danger" id="button" @click="neg">negative</b-button>
    <pos-common v-if="positive" />
    <neg-common v-if="negative" />
  </div>
</template>

<script>
import PosCommon from '@/components/chart/PosCommon'
import NegCommon from '@/components/chart/NegCommon'

export default {
  name: "common-word-page",
  components: {
    PosCommon,
    NegCommon,
  },
  data: () => ({
    positive: true,
    negative: false,
   

  }),
  methods: {
    pos() {
      this.positive = true,
      this.negative = false
   

    },
    neg() {
      this.positive = false,
      this.negative = true
      
    }
  }
};
</script>

<style scoped>
a {
  border: rgb(0, 0, 0) solid;
  border-radius: 20px;
  margin: 20px;
  margin-bottom: 50px;
  padding: 15px 40px;
  color: black;
  background: rgb(255, 255, 255);
}
a:hover {
  background: aquamarine;
}
#button{
  margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>