FlowRouter.route('/', {
  action: function () {
    console.log(mainContainer)
    Blaze.render(Template.start, mainContainer)
  }
})
