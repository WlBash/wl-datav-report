<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>
  export default {
    data() {
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [
            {
              name: '成都',
              value: 100 * Math.random()
            },
            {
              name: '杭州',
              value: 100 * Math.random()
            },
            {
              name: '上海',
              value: 100 * Math.random()
            },
            {
              name: '长沙',
              value: 100 * Math.random()
            }
          ]
        },
        chartSettings: {
          color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)']
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
