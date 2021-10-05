import Vue        from 'vue'
import Router     from 'vue-router'

import Main       from '@/views/Main' 
import Search     from '@/views/Search' 
import History     from '@/views/History'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/search',
      children:[
        {
          path: 'search',
          name: 'Search', 
          component: Search,
          props: true
        },  
        {
          path: 'history',
          name: 'History', 
          component: History
        }
      ]
    },
  ]
});
