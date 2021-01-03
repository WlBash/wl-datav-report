<template>
  <common-card
    title="今日交易用户数"
    value="3,356,851"
  >
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.76%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

  export default {
    data() {
      return {
        orderUserTrend: [620, 450, 690, 100, 800, 600, 300, 100, 400, 600, 300, 900],
        orderUserTrendAxis: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00']
      }
    },
    mixins: [commonCardMixin],
    methods: {
      getOptions() {
        return {
          color: ['#3398DB'],
          tooltip: {},
          series: [{
            name: '用户实时交易量',
            type: 'bar',
            data: this.orderUserTrend,
            barWidth: '60%'
          }],
          xAxis: {
            type: 'category',
            data: this.orderUserTrendAxis,
            show: false
          },
          yAxis: {
            show: false
          },
          grid: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
