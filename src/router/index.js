import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  routes: [

    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      component: () => import('@/pages/login.vue'),
      // hidden: true
    },
  ]
})
