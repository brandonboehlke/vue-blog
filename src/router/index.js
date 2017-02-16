import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Blog from '../components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      name: 'blog',
      path: '/blogs/:blogTitle',
      component: Blog
    }
  ]
})
