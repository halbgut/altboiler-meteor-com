altboiler.config({
  showLoader: true
})

checkRenderWithout = function checkRenderWithout (req) {
  var url = ''
  url = req ?
    req.url :
    location.pathname
  if(url.indexOf('/without') == 0) {
    altboiler.set({
      showLoader: false
    })
  }
}

// testEqual :: RegExp -> String -> Boolean
function testEqual (regexp, str) {
  return !!([].concat(regexp.exec(str))[0] === str)
}

// regexForSplinter :: String -> String
function regexForSplinter (splinter) {
  return /\*|\:/g.test(splinter[0]) ? '[^\\/\\?#]*' : splinter
}

// isRoute :: String -> String -> Boolean
function isRoute (url, route) {
  return testEqual(
    new RegExp(
      route
        .split('/')
        .map(regexForSplinter)
          .join('\\/')
    ),
    url
  )
}

getHeader = function getHeader (url) {
  return _.extend({}, _.find(Headers.find().fetch(), function (header) {
    return isRoute(url, header.route)
  }, '')).html
}
