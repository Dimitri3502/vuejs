import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCocktails() {
    return apiClient.get('/cocktails')
  },
  getCocktail(id) {
    return apiClient.get('/cocktails/' + id)
  }
}
