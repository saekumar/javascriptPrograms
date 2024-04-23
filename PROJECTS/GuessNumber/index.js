const original = parseInt(Number(Math.random() * 100).toFixed(0))
const data = document.querySelector('form')
console.log(original)
let count = 3
data.addEventListener('submit', function (e) {
  e.preventDefault()
  const guessField = parseInt(document.querySelector('#guessField').value)

  if (guessField === original) {
    res.innerHTML = `You guess it right ${original}`
  } else {
    prev.innerHTML = `Previous Guess is ${guessField}`

    count--
    rem.innerHTML = `Guesses Remaining : ${count}`
  }
  if (count == 0) {
    res.innerHTML = `Your chances are completed and original is ${original}`
  }
  console.log(guessField, typeof guessField)
  console.log(original, typeof original)
})
