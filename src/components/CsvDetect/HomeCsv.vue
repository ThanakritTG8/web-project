<template>
  <div id="home-csv">
    <section>
      <nav class="nav justify-content-center">
        <button @click="home">Home</button>
        <button @click="comment">Comment</button>
        <button @click="common">Common Words</button>
      </nav>
      <csv-body v-if="enter" />
      <comment-page v-if="to" />
      <common-word-page v-if="direct" />
    </section>
  </div>
</template>

<script>
import CsvBody from "@/components/CsvDetect/CsvBody";
import CommonWordPage from "@/components/CsvDetect/CommonWordPage";
import CommentPage from "@/components/CsvDetect/CommentPage";

export default {
  name: "home-csv",
  components: {
    CsvBody,
    CommonWordPage,
    CommentPage
  },
  data() {
    return {
      enter: true,
      to: false,
      direct: false
    };
  },
  methods: {
    home() {
      this.enter = true;
      this.to = false;
      this.direct = false;
    },
    comment() {
      this.enter = false;
      this.to = true;
      this.direct = false;
    },
    common() {
      this.enter = false;
      this.to = false;
      this.direct = true;
    }
  }
};
</script>

<style>
section {
  padding: 100px 45px;
}
button {
  border: none;
  margin: 20px;
  background: none;
}
</style>