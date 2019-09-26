/**
 *Create by suchao an 2019/9/25
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login'

export default new VueRouter({
    routes:[
      {
        path: '/msite',
        component: MSite, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
        meta:{
          showFooter:true
        }
      },
      {
        path: '/search',
        component: Search,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/order',
        component: Order,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/profile',
        component: Profile,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/login',
        component: Login,
        meta:{
          showFooter:false
        }
      },
      {
        path:'/',
        redirect:'/msite'
      }
    ]
})
