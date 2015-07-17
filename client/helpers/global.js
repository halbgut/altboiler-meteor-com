Template.registerHelper('headerImage', function (image) {
  header.style.backgroundImage = ['url(', ')'].join(image)
})

Template.registerHelper('URIEncode', function (uri) {
  return encodeURIComponent(uri)
})
