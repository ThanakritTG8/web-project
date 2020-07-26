<template>
  <div id="common-word-cloud-verb">
    <h4 class="text-center">Action</h4>
        <wordcloud
        class="wordcloud"
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
  name: 'common-word-cloud-verb',
  components: {
      wordcloud
  },
  mounted() {
    this.$axios.get("http://localhost:5000/cloudVerbPatongName").then(({ data }) => {
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
.wordcloud {
  font-family: "Lato", Arial, sans-serif;
  width: 400px;
  height: 250px;
}
</style>