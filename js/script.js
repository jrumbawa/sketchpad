const sketchpad = document.getElementById('sketchpad')
const resetBtn = document.getElementById('reset-btn')
let gridSize = 16

resetBtn.addEventListener('click', function () {
  gridSize = Number(prompt('Enter a number 16-100'))
  renderGrid(gridSize)
})

function renderGrid(gridSize) {
  sketchpad.innerHTML = ''
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div')
    square.addEventListener('mouseover', function () {
      square.classList.add('hovered')
    })
    square.style.width = `${600 / gridSize}px`
    square.style.height = `${600 / gridSize}px`
    sketchpad.appendChild(square)
  }
}

renderGrid(gridSize)
