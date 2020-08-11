<template>
  <div id="common-word-cloud-adj">
    <h4 class="text-center">Emotion</h4>
        <wordcloud
        class="wordcloud"
        :data="defaultWords"
        nameKey="word"
        valueKey="count"
        :color="Accent"
        :showTooltip="true"
        :wordClick="wordClickHandler">
        </wordcloud>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'
export default {
  name: 'common-word-cloud-adj',
  components: {
      wordcloud
  },
  mounted() {
    this.$axios.get("http://localhost:5000/cloudAdjPatongName").then(({ data }) => {
      this.defaultWords = data;
    });
  },
  data: () => ({
    defaultWords: [],

  }),
    methods: {
    wordClickHandler(word, count, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  }
};
</script>

<style scoped>
.wordcloud {
  font-family: "Lato", Arial, sans-serif;
  width: 100%;
  height: 250px;
}
</style>