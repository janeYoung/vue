import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Echart from '@/components/Echart'
import Count from '@/pages/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'count',
          component: Count
        }
      ]
    },
    {
      path: '/echart/:id',
      name: 'Echart',
      component: Echart
    }
  ]
})
