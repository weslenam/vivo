import axios from 'axios'

const api_history = axios.create({
    baseURL:"http://0.0.0.0:8001",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }    
})

export default api_history