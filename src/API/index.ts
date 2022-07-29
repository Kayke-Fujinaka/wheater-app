import axios from 'axios'

const API_BASE_URL = 'http://api.weatherbit.io/v2.0/forecast/daily'

const weatherApi = axios.create({
  baseURL: `${API_BASE_URL}`
})
export default weatherApi
