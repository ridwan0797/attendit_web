<template>
  <apexchart v-bind="$attrs" ref="realtimeChart" type="line"    />
</template>

<script lang="ts">
import { onMounted } from 'vue'
// import { VueApexChartsComponent } from 'vue3-apexcharts';

export default {
  name: 'ApexLine',
  setup () {
    const getRandomArbitrary = (min, max) => {
      return Math.floor(Math.random() * 99)
    }

    const setDataLineChart = () => {
      setInterval(() => {
        // series.value[0].data.splice(0, 1)
        // series.value[0].data.push(getRandomArbitrary(0, 99))
        // // updateSeriesLine()
      }, 3000)
    }
    onMounted(() => {
      setDataLineChart()
    })

    return {
      getRandomArbitrary,
      setDataLineChart
    }
  }
}
</script>
<style>
@media print {
}
</style>
