import axios, { type AxiosError, type InternalAxiosRequestConfig, type AxiosInstance } from 'axios'
import {
  clearAccessTokenFromLS,
  getAccessTokenFromLS,
  getRefreshToken,
  clearUserFromLS,
  saveAccessTokenToLS,
  saveRefreshTokenToLS,
  saveUserToLS,
  clearLS
} from './auth'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  private requestRefreshToken: Promise<string> | null
  constructor() {
    this.requestRefreshToken = null
    this.accessToken = getAccessTokenFromLS()
    this.refreshToken = getRefreshToken()
    this.instance = axios.create({
      baseURL: 'http://localhost:5050/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>) => {
        // Do something before request is sent
        if (this.accessToken && config.headers) {
          config.headers.authorization = `Bearer ${this.accessToken}`
          return config
        }
        return config
      },
      function (error: AxiosError) {
        // Do something with request error
        console.log(error)
        return Promise.reject(error)
      }
    ),
      this.instance.interceptors.response.use(
        (response) => {
          const { config } = response
          if (config.url === 'register' || config.url === 'login') {
            this.accessToken = response.data.data.token
            this.refreshToken = response.data.data.refresh_token
            saveAccessTokenToLS(this.accessToken)
            saveRefreshTokenToLS(this.refreshToken)
            saveUserToLS(response.data.data.user)
          } else if (config.url === 'logout') {
            this.accessToken = ''
            this.refreshToken = ''
            clearLS()
          }
          return response
        },
        async (error) => {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          if (error.response.data.message === 'Token hết hạn' && error.response.status === 401) {
            const config = error.response?.config || {}
            this.requestRefreshToken = this.requestRefreshToken ? this.requestRefreshToken : this.handleRefreshToken()
            this.requestRefreshToken.finally(() => {
              this.requestRefreshToken = null
            })
            return await this.requestRefreshToken.then((data) => {
              return this.instance({
                ...config,
                headers: { ...config.headers, authorization: `Bearer ${data}` }
              })
            })
          } else if (!error.response?.data && error.response.data.message !== 'Token hết hạn') {
            toast.error(error.message)
            clearLS()
          } else {
            let err = error.response.data.message
            toast.error(err)
            clearLS()
          }
          return Promise.reject(error)
        }
      )
  }
  private async handleRefreshToken() {
    const response = await this.instance.post('/refresh-token', {
      refresh_token: this.refreshToken
    })
    this.refreshToken = response.data.refresh_token
    this.accessToken = response.data.token
    saveRefreshTokenToLS(this.refreshToken)
    saveAccessTokenToLS(this.accessToken)
    return response.data
  }
}
const http = new Http().instance
export default http
