import axios from 'axios'

const API_BASE_URL = 'http://api.weatherapi.com/v1/'

const weatherApi = axios.create({
  baseURL: `${API_BASE_URL}`
})

export default weatherApi
