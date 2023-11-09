import axios, { type AxiosInstance } from 'axios'
import { getAccessTokenFromLS, saveAccessTokenToLS } from './utils/auth'
class Http {
  instance: AxiosInstance
  accessToken: string
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:5050/',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.accessToken = getAccessTokenFromLS()
    this.instance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        if (this.accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${this.accessToken}`
        }
        console.log(config.headers.Authorization)
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      }
    ),
      this.instance.interceptors.response.use(
        function (response) {
          const { config } = response
          if (config.url === '/register' || config.url === 'sign-in') {
            saveAccessTokenToLS(response.data.token)
          }
          return response
        },
        function (error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          return Promise.reject(error)
        }
      )
  }
}
const http = new Http().instance
export default http
