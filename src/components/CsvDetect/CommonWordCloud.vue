<template>
  <div id="common-word-cloud">
    <h4 class="text-center">TG Text</h4>
        <wordcloud
        :data="defaultWords"
        nameKey="name"
        valueKey="value"
        :color="Accent"
        :showTooltip="true"
        :wordClick="wordClickHandler">
        </wordcloud>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'
export default {
  name: 'common-word-cloud',
  components: {
      wordcloud
  },
  mounted() {
    this.$axios.get("http://localhost:5000/cloudAdjPatong").then(({ data }) => {
      this.defaultWords = data;
    });
  },
  data: () => ({
    defaultWords: [],

  }),
    methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  }
};
</script>

<style scoped>
#all-sense-text {
  font-family: "Lato", Arial, sans-serif;
  text-transform: uppercase;
}
</style>