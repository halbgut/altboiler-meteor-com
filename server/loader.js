altboiler.config({
  action: '',
  content: Assets.getText('loader/main.html'),
  css: Assets.getText('loader/styles.css')
})

WebApp.connectHandlers.use(function (req, res, next) {
  if(req.url.indexof('/without') == 0) {
    altboiler.set({
      showLoader: false
    })
  }
})
