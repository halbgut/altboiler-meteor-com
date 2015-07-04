function styleBubble (elem) {
  elem.style.left = Math.round(Math.random() * 100) + '%'
  elem.style.top = '-100px'
  elem.style.width = '5px'
  elem.style.height = '5px'
}

function createBubble (wrapper) {
  console.log('bubble')
  var newBubble
  wrapper = document.querySelector(wrapper)
  if(!wrapper) return
  newBubble = document.createElement('div')
  newBubble.className = 'altboiler_loader__bubble'
  wrapper.appendChild(newBubble)
  setTimeout(styleBubble.bind(null, newBubble), 10)
}

window.boilerplate_interval = window.setInterval(
  createBubble.bind(
    null,
    '.altboiler_loader__bubbles_conatiner'
  ),
  200
)
