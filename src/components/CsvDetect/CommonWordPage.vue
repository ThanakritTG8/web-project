<template>
  <div id="common-word-page">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Positive" active>
          <b-card-text>
            <pos-common />
          </b-card-text>
        </b-tab>
        <b-tab title="Negative">
          <b-card-text>
            <neg-common />
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import PosCommon from '@/components/CsvDetect/PosCommon'
import NegCommon from '@/components/CsvDetect/NegCommon'

export default {
  name: "common-word-page-positive",
  components: {
      PosCommon,
      NegCommon
  }
};
</script>

<style scoped>
</style>