const fetch = require('node-fetch')

const apiKey = 'yourkey'
const baseUrl = 'http://www.omdbapi.com/'
const posterUrl = 'http://img.omdbapi.com/'

// Function to search for a movie by title
async function searchByTitle(title, plot = 'short', year, type) {
  const params = new URLSearchParams({
    apikey: apiKey,
    t: title,
    plot: plot,
    r: 'json',
    ...(year && { y: year }),
    ...(type && { type: type }),
  })

  try {
    const response = await fetch(`${baseUrl}?${params.toString()}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Function to search for a movie by IMDb ID
async function searchById(imdbId, plot = 'short') {
  const params = new URLSearchParams({
    apikey: apiKey,
    i: imdbId,
    plot: plot,
    r: 'json',
  })

  try {
    const response = await fetch(`${baseUrl}?${params.toString()}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Function to perform a general search
async function generalSearch(title, type, year, page = 1) {
  const params = new URLSearchParams({
    apikey: apiKey,
    s: title,
    r: 'json',
    page: page,
    ...(type && { type: type }),
    ...(year && { y: year }),
  })

  try {
    const response = await fetch(`${baseUrl}?${params.toString()}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Function to fetch a movie poster
async function fetchPoster(imdbId) {
  const params = new URLSearchParams({
    apikey: apiKey,
    i: imdbId,
  })

  try {
    const response = await fetch(`${posterUrl}?${params.toString()}`)
    if (response.ok) {
      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)
      return imageUrl
    } else {
      throw new Error('Failed to fetch poster')
    }
  } catch (error) {
    console.error('Error fetching poster:', error)
  }
}

// Example usage
;(async () => {
  const movieData = await searchByTitle('thor', 'full')
  console.log('Movie Data by Title:', movieData)

  const movieDataById = await searchById('tt1285016', 'full')
  console.log('Movie Data by ID:', movieDataById)

  const searchData = await generalSearch('thor', 'movie', 2011)
  console.log('General Search Data:', searchData)

  const posterImage = await fetchPoster('tt1285016')
  console.log('Poster Image URL:', posterImage)
})()
