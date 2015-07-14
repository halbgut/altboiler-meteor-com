FlowRouter.route('/', {
  action: function () {
    Blaze.render(Template.start, mainContainer)
  }
})
