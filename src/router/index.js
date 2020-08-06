import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeCsv from '@/components/CsvDetect/HomeCsv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeCsv
    },
 
  ]
})
