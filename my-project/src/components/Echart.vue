<template>
    <div>
      <ve-line :data="chartData"></ve-line>
      {{ $route.params.id }}
    </div>
</template>
<script>
import VeLine from 'v-charts/lib/line'
export default {
  name: 'HelloWorld',
  components: { VeLine },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.chartData = {
      columns: ['日期', '销售量'],
      rows: [
        { '日期': '1月1日', '销售量': 123 },
        { '日期': '1月2日', '销售量': 1223 },
        { '日期': '1月3日', '销售量': 2123 },
        { '日期': '1月4日', '销售量': 4123 },
        { '日期': '1月5日', '销售量': 3123 },
        { '日期': '1月6日', '销售量': 7123 }
      ]
    }
  }
}
</script>
