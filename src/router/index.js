import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'
import Join from '@/components/Join'
import Board from '@/components/Board'
import List from '@/components/List'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    }
  ]
})
