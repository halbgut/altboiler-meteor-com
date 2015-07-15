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
