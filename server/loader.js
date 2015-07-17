altboiler.config({
  action: Assets.getText('loader/loader.html'),
  content: Assets.getText('loader/main.html'),
  css: Assets.getText('loader/styles.css'),
  showLoader: false
})

// Add an artificial delay
WebApp.rawConnectHandlers.stack = [{
  route: '/altboiler/main.js',
  handle: function (req, res, next) {
    return setTimeout(next, 4000)
  }
}].concat(WebApp.rawConnectHandlers.stack)
