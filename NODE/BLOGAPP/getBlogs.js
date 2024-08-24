const getBlogs = async () => {
  let blogs = await fetch('http://localhost:3000/blogs', {
    method: 'GET',
  })
  blogs = await blogs.json()
  console.log(blogs)
}

getBlogs()
