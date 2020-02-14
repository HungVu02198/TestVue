import vue from 'vue'
import Router from 'vue-router'
import MISAMoneyKepper from '@/components/MISAMoneyKeeper'
import Test from '@/components/Test'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      name: 'MISAMoneyKepper',
      component: MISAMoneyKepper
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
