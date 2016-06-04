export function configRouter (router) {
  // normal routes
  router.map({
    // basic example
    '/': {
      component: require('./components/News.vue')
    },
    '/services': {
      component: require('./components/Services.vue')
    },
    '/payments': {
      component: require('./components/Payments.vue')
    },
    '/help': {
      component: require('./components/Help.vue')
    },
    '/about': {
      component: require('./components/About.vue')
    },
    // not found handler
    '*': {
      component: require('./components/Notfound.vue')
    }

  })

  // redirect
  // router.redirect({
  //   '/info': '/about',
  //   '/hello/:userId': '/user/:userId'
  // })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  // router.beforeEach((transition) => {
  //   if (transition.to.path === '/forbidden') {
  //     router.app.authenticating = true
  //     setTimeout(() => {
  //       router.app.authenticating = false
  //       alert('this route is forbidden by a global before hook')
  //       transition.abort()
  //     }, 3000)
  //   } else {
  //     transition.next()
  //   }
  // })
}
