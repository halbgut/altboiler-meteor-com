Meteor.publish('allPosts', function () {
  return Posts.find({}, {
    fields: { title: 1, teaser: 1 }
  })
})

Meteor.publish('singlePost', function (postTitle) {
  return Posts.find({title: postTitle}, {
    fields: { title: 1, teaser: 1, body: 1 }
  })
})