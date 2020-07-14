<template>
  <div id="overview-text">
    <div class="card primary">
      <div class="card-body" >

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "overview-text",
  data: () => ({
    textData: undefined,

  }),
  mounted() {
    this.$axios
      .get("http://localhost:5000/MuchInPatongPositive")
      .then(({ data }) => {
        this.textData = data;
      });
  }
};
</script>

<style>
</style>