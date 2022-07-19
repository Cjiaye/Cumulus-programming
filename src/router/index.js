import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    meta: {
      title: '主控台'
    },
    component: () => import('../layout'),
    redirect: '/',
    children: [
      {
        path: '/',
        meta: {
          title: '首页'
        },
        component: () => import('../views/home')
      },
      {
        path: '/goods/list',
        meta: {
          title: '商品管理'
        },
        component: () => import('../views/goods-list')
      },
      {
        path: '/category/list',
        meta: {
          title: '分类管理'
        },
        component: () => import('../views/category-list')
      },
      {
        path: '/skus/list',
        meta: {
          title: '规格管理'
        },
        component: () => import('../views/skus-list')
      },
      {
        path: '/coupon/list',
        meta: {
          title: '优惠券管理'
        },
        component: () => import('../views/coupon-list')
      },
      {
        path: '/user/list',
        meta: {
          title: '用户管理'
        },
        component: () => import('../views/user-list')
      },
      {
        path: '/level/list',
        meta: {
          title: '会员等级'
        },
        component: () => import('../views/level-list')
      },
      {
        path: '/order/list',
        meta: {
          title: '会员等级'
        },
        component: () => import('../views/order-list')
      },
      {
        path: '/comment/list',
        meta: {
          title: '订单管理'
        },
        component: () => import('../views/comment-list')
      },
      {
        path: '/manager/list',
        meta: {
          title: '管理员管理'
        },
        component: () => import('../views/manager-list')
      },
      {
        path: '/access/list',
        meta: {
          title: '权限管理'
        },
        component: () => import('../views/access-list')
      },
      {
        path: '/role/list',
        meta: {
          title: '权限管理'
        },
        component: () => import('../views/role-list')
      },
      {
        path: '/setting/base',
        meta: {
          title: '基础设置'
        },
        component: () => import('../views/setting-base')
      },
      {
        path: '/image/list',
        meta: {
          title: '图库管理'
        },
        component: () => import('../views/image-list')
      },
      {
        path: '/notice/list',
        meta: {
          title: '公告管理'
        },
        component: () => import('../views/notice-list')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
