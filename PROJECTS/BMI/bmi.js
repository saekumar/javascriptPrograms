const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const bmi = (weight / ((height / 100) * (height / 100)).toFixed(2)).toFixed(2)
  const results = document.querySelector('#results')
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please provide valid height. ${height} cannot be acceptable`
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please provide valid weight. ${weight} cannot be acceptable`
  }
  let res
  if (bmi <= 18.6) {
    res = 'You are Under weight'
  } else if (bmi > 18.6 && bmi < 24.6) {
    res = 'You look Normal'
  } else {
    res = 'You are Overe weight'
  }

  results.innerHTML = `BMI is ${bmi} and  ${res}`
})
