import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tabbar from '../components/Tabbar.vue'
import XiaoLian from "../views/XiaoLian.vue"
import PiFu from "../views/PiFu.vue"
import Shezhi from "../views/Shezhi.vue"
import Wode from "../views/Wode.vue"
// 解决ElementUI导航栏中vue-router在3.0版本上重复点击报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/',
    name: 'Tabbar',
    component: Tabbar
  },{
    path: '/xiaolian',
    name: 'XiaoLian',
    component: XiaoLian
  },{
    path: '/consultation',
    name: 'PiFu',
    component: PiFu
  },{
    path: '/person',
    name: 'Shezhi',
    component: Shezhi
  },{
    path: '/setup',
    name: 'Wode',
    component: Wode
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
