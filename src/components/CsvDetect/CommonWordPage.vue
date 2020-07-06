<template>
  <div id="common-word-page">
    <div class="row text-center">
        <div class="col-lg-6">
            <h1>Positive Word</h1>
            <overview-word-positive />
        </div>
        <div class="col-lg-6">
            <h1>Negative Word</h1>
            <overview-word-negative />
        </div>
    </div>
    <div class="row text-center">
        <div class="col-lg-6">
            <top-ten-n />
        </div>
        <div class="col-lg-6">
            <top-ten-adv />
        </div>
    </div>
    <div class="row text-center">
        <div class="col-lg-6">
            <top-ten-adj />
        </div>
        <div class="col-lg-6">
            <top-ten-v />
        </div>
    </div>
  </div>
</template>

<script>
import OverviewWordPositive from '@/components/CsvDetect/OverviewWordPositive'
import OverviewWordNegative from '@/components/CsvDetect/OverviewWordNegative'
import TopTenAdj from '@/components/CsvDetect/TopTenAdj'
import TopTenAdv from '@/components/CsvDetect/TopTenAdv'
import TopTenN from '@/components/CsvDetect/TopTenN'
import TopTenV from '@/components/CsvDetect/TopTenV'

export default {
    name: 'common-word-page-positive',
    components: {
        OverviewWordPositive,
        OverviewWordNegative,
        TopTenAdj,
        TopTenAdv,
        TopTenV,
        TopTenN
    }
}
</script>

<style>

</style>