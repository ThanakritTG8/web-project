<template>
  <div id="home-csv">
    <section>
      <div class="card">
        <div class="card-body">
          <nav class="nav justify-content-center">
            <button @click="home">Home</button>
            <button @click="common">Common Words</button>
          </nav>
          <csv-body v-if="enter" />
          <common-word-page v-if="direct" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CsvBody from "@/components/CsvDetect/CsvBody";
import CommonWordPage from "@/components/CsvDetect/CommonWordPage";

export default {
  name: "home-csv",
  components: {
    CsvBody,
    CommonWordPage
  },
  data() {
    return {
      enter: true,
      direct: false
    }
  },
  methods: {
    home() {
      this.enter = true
      this.direct = false
    },
    common() {
      this.enter = false
      this.direct = true
    }
  }
};
</script>

<style>
section {
  padding: 100px 45px;
}
.card {
  height: auto;
}
button {
  border: none;
  margin: 20px;
  background: none;
}
</style>