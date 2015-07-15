// isRoute :: String -> String -> Boolean
function isRoute (url, route) {
  return (
    (
      new RegExp(
        route
          .split('/')
          .map(function (splinter) {
            return /\*|:/g.test(splinter[0]) ? '[^\\/\\?#]*' : splinter
          })
            .join('\\/')
      )
    )
      .test(url)
  )
}

getHeader = function getHeader (url) {
  return _.reduce(Headers.find().fetch(), function (memo, header) {
    return isRoute(url, header.route) ? header.html : memo
  }, '')
}
