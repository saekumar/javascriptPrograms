const change = function () {
  console.log('Hello there ')
}

const ti = setTimeout(change, 5000)

const h1 = document.querySelector('#h1')
const sele = document
  .querySelector('#stop')
  .addEventListener('click', function () {
    clearTimeout(ti)
    console.log('Stopped')
    h1.innerHTML = 'Stopped'
  })
