const getTodos = async () => {
  let res = await fetch('http://localhost:4000/todos', {
    method: 'GET',
  })
  res = await res.json()
  console.log(res)
}

getTodos()
