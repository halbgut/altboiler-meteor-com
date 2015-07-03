function styleBubble (elem) {
  elem.style.left = Math.round(Math.random() * 100) + '%'
  elem.style.top = '-100px'
}

function createBubble (wrapper) {
  var newBubble = document.createElement('div')
  newBubble.className = 'altboiler_loader__bubble'
  wrapper.appendChild(newBubble)
  setTimeout(styleBubble.bind(null, newBubble), 10)
}

addEventListener('load', function () {
  window.boilerplate_interval = window.setInterval(
    createBubble.bind(
      null,
      document.getElementsByClassName(
        'altboiler_loader__bubbles_conatiner'
      )[0]
    ),
    200
  )
})
