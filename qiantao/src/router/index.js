import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Son2 from '../views/Son2.vue'
import Son3 from '../views/Son3.vue'
import Son1 from '../views/Son1.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
    path:"/son2",
    name:"Son2",
    // 命名视图
    components:{
      son2:Son2,
      son3:Son3
    }
  } ,{
    path:"/son3",
    name:"Son3",
    components:{
      default:Son1,
      son2:Son2
    }
  } ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
