<template>
  <div id="common-word-page">
  <div class="row">
    <a href="#" type="button" class="button" @click="pos">Positive</a>
    <a href="#" type="button" class="button" @click="neg">Negative</a>
  </div>
    <pos-common v-if="positive" />
    <neg-common v-if="negative" />
  </div>
</template>

<script>
import PosCommon from "@/components/CsvDetect/PosCommon";
import NegCommon from "@/components/CsvDetect/NegCommon";

export default {
  name: "common-word-page",
  components: {
    PosCommon,
    NegCommon,
  },
  data: () => ({
    positive: true,
    negative: false
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
</style>