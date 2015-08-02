mainContainer = document.getElementsByTagName('main')[0]
header = document.getElementsByTagName('header')[0]

checkRenderWithout()

Tracker.autorun(function () {
  if(FlowRouter.subsReady()) {
    mainContainer.removeChild(
      mainContainer.children[0]
    )
  }

  if(header) {
    Array.prototype.forEach.call(
      header.querySelectorAll('.header__link'),
      function (elem) {
        elem.className = 'header__link'
        if(
          (
            elem.innerHTML.toLowerCase().indexOf('without') > -1 &&
            location.href.indexOf(elem.href) > -1
          ) ||
          (
            elem.innerHTML.toLowerCase().indexOf('without') == -1 &&
            location.href.indexOf('without') == -1
          )
        ) {
          elem.className += ' header__link--active'
        }
      }
    )
  }
})
