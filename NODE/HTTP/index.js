const http = require('http')

const check = async () => {
  const res = await fetch('http://localhost:3000/', {
    method: 'GET',
  })
  const data = await res.json()
  console.log(data)
}
