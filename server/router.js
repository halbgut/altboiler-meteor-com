function isRoute (url, path) {
  return (
    (
      new RegExp(
        path
          .split('/')
          .map(function (splinter) {
            return splinter[0] == ':' ? '[^\\/\\?#]*' : splinter
          })
            .join('\\/')
      )
    )
      .test(url)
  )
}

WebApp.rawConnectHandlers.use(Meteor.bindEnvironment(function (req, res, next) {
  if(isRoute(req.originalUrl, '/blog/:post')) {
    altboiler.set({
      content: Assets.getText('loader/post.html')
    })
  }
  next()
}))