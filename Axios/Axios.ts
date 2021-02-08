import Axios from 'axios'

const API = 'https://api.nasa.gov/neo/rest/v1/neo/'

const axios = Axios.create({baseURL: API})

export default axios
