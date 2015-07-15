FlowRouter.triggers.exit([function () {
  mainContainer.innerHTML = ''
  header.innerHTML = ''
}])
FlowRouter.triggers.enter([function () {
  var url = FlowRouter._current.path
  if(!header.childNodes[0]) {
    Meteor.subscribe('header', url, function () {
      header.innerHTML = getHeader(url)
    })
  }
}])

FlowRouter.route('/', {
  subscriptions: function (params) {
    this.register('allPosts', Meteor.subscribe('allPosts'))
  },
  action: function () {
    Blaze.renderWithData(Template.start, {
      posts: Posts.find()
    }, mainContainer)
  }
})

FlowRouter.route('/blog/:title', {
  subscriptions: function (params) {
    this.register('singlePost', Meteor.subscribe('singlePost', params.title))
  },
  action: function (params) {
    FlowRouter.subsReady(function () {
      Blaze.renderWithData(Template.post, Posts.findOne(), mainContainer)
    })
  }
})
