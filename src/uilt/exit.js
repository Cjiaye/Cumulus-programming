import router from '../router/index'
const Login = ['/login']
router.beforeEach((to, from, next) => {
  const newHeader = localStorage.getItem('newHeader')
  if (newHeader) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      next()
    }
  } else {
    if (Login.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
