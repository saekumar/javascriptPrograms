const postBlog = async (blog) => {
  let res = await fetch('http://localhost:3000/blogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(blog),
  })
  res = await res.json()
  console.log(res)
}

let blog = {
  title: 'Rohith kumar shetty',
  content: 'Rohith is a gooduu girll ',
  author: {
    userid: 1000,
    name: 'user100',
    email: 'email10@gmail.com',
    password: '1234',
  },
  draft: true,
}

postBlog(blog)
