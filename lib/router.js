FlowRouter.route('/', {
  subscriptions: function (params) {
    this.register('posts', Meteor.subscribe('posts'))
  },
  action: function () {
    Blaze.renderWithData(Template.start, {
      posts: Posts.find()
    }, mainContainer)
  }
})
