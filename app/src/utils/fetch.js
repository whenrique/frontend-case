const request = async (request) => {
  try {
    const response = await fetch(request)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export default request