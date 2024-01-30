const colorElement = document.querySelector('.color')

const colors = ['red', 'green', 'white']

colorElement.addEventListener('click', (e) => {
  const randomcolor = colors[Math.floor(Math.random() * colors.length)]
  const eew = e.target
  eew.style.backgroundColor = randomcolor
})
