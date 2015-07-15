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

WebApp.rawConnectHandlers.use(Meteor.bindEnvironment(function (req, res, next) {
  if(!req.originalUrl) return
  altboiler.set({
    content: getHeader(req.originalUrl) + Assets.getText('loader/main.html')
  })
  next()
}))