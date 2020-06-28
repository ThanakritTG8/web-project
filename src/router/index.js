import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Csv from '@/components/CsvDetect/Csv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Csv',
      name: 'Csv',
      component: Csv
    }
  ]
})
