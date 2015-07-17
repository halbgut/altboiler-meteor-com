mainContainer = document.getElementsByTagName('main')[0]
header = document.getElementsByTagName('header')[0]

Tracker.autorun(function () {
  if(FlowRouter.subsReady('allPosts')) {
    console.log('Hi')
    mainContainer.removeChild(
      mainContainer.children[0]
    )
  }
})
