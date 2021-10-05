import axios from 'axios'

const api_users = axios.create({
    baseURL:"https://api.github.com/search/"
  }
)

export default api_users