import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import View_son1 from '../views/View_son1.vue'
import View_son2 from '../views/View_son2.vue'
import View_son3 from '../views/View_son3.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      name:"Home",
      component:Home
    },
  {
    path: '/view_son1',
    name: 'View_son1',
    components: {
       default:View_son1,
       son2:View_son2
    }
  },{
    path: '/view_son2',
    name: 'View_son2',
    components: {
      son2:View_son2,
      son3:View_son3
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
