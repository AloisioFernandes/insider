import axios from 'axios'

export const key = '2be6d381'

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
})

export default api