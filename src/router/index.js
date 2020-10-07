import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from "../views/profile/Profile";

Vue.use(VueRouter)
const originalPush = VueRouter .prototype.push
VueRouter .prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const Home=()=>import('../views/home/Home')
const Cart=()=>import('../views/cart/Cart')
const Category=()=>import('../views/category/Category')
const profile=()=>import('../views/profile/Profile')
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
