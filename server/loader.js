altboiler.config({
  action: '',
  content: Assets.getText('loader/main.html'),
  css: Assets.getText('loader/styles.css')
})

// This is a little overkill
// // Add an artificial delay
// WebApp.rawConnectHandlers.stack = [{
//   route: '/altboiler/main.js',
//   handle: function (req, res, next) {
//     return setTimeout(next, 4000)
//   }
// }].concat(WebApp.rawConnectHandlers.stack)
