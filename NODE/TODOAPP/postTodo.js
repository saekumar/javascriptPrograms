async function postTodo(tit, desc) {
  let res = await fetch('http://localhost:4000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: tit,
      description: desc,
    }),
  })
  res = await res.json()
  console.log(res)
}

postTodo('check', 'checked')
