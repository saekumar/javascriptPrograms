const digitalClock = document.getElementById('clock')

setInterval(function () {
  let date = new Date()

  digitalClock.innerHTML = `${date.toLocaleTimeString()}`
}, 1000)
