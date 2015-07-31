Headers.upsert({route: '/'}, {
  $set: {
    route: '/',
    html: Assets.getText('loader/startHeader.html')
  }
})

Headers.upsert({route: '/blog/:post'}, {
  $set: {
    route: '/blog/:post',
    html: Assets.getText('loader/postHeader.html')
  }
})

Headers.upsert({route: '/without'}, {
  $set: {
    route: '/without',
    html: Assets.getText('loader/startHeader.html')
  }
})

Headers.upsert({route: '/without/blog/:post'}, {
  $set: {
    route: '/without/blog/:post',
    html: Assets.getText('loader/postHeader.html')
  }
})

SSR.compileTemplate('loaderMain', Assets.getText('loader/main.html'))

// Because FlowRouter has no server-side routes, I have to do them myself
WebApp.rawConnectHandlers.use(Meteor.bindEnvironment(function (req, res, next) {
  if(!req.originalUrl) return
  altboiler.set({
    content: SSR.render('loaderMain', {header: getHeader(req.originalUrl)})
  })
  next()
}))