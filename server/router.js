if(Headers.find().count() < 1) {
  Headers.insert({
    route: '/',
    html: Assets.getText('loader/startHeader.html')
  })

  Headers.insert({
    route: '/blog/:post',
    html: Assets.getText('loader/postHeader.html')
  })
}

WebApp.rawConnectHandlers.use(Meteor.bindEnvironment(function (req, res, next) {
  if(!req.originalUrl) return
  altboiler.set({
    content: getHeader(req.originalUrl) + Assets.getText('loader/main.html')
  })
  next()
}))