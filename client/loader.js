mainContainer = document.getElementsByTagName('main')[0]
header = document.getElementsByTagName('header')[0]

checkRenderWithout()

Tracker.autorun(function () {
  if(FlowRouter.subsReady()) {
    mainContainer.removeChild(
      mainContainer.children[0]
    )
  }
})
