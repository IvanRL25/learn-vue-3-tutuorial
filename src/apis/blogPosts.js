

const BASE_URL = `http://localhost:3000/blogPosts`
/*
  fetchs all blog posts form the API
  @returns {Promise<object>} array of blog posts
*/
const findAll = async () => {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) {
      throw new Error(`Error fetching blog posts: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

/*
  fetches a single blog post based on id
  @param {number} id the ide of the blog post to fetch
  @returns {Promise<Object>} a promise that reolves to the blog post object
*/
const findById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`)
    if (!response.ok) {
      throw new Error(`Error fetching blog posts: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default{findAll,findById}