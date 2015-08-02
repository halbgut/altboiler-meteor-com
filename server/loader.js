altboiler.configuration.css = []
altboiler.config({
  action: '',
  content: Assets.getText('loader/main.html'),
  css: Assets.getText('loader/styles.css')
})

WebApp.rawConnectHandlers.use(function (req, res, next) {
  checkRenderWithout(req)
  next()
})
