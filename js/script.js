const sketchpad = document.getElementById('sketchpad')

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div')
  square.addEventListener('mouseover', function () {
    square.classList.add('hovered')
  })
  square.style.width = '37.5px'
  square.style.height = '37.5px'
  sketchpad.appendChild(square)
}
