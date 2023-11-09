import http from 'src/http'
import { LoginData, RegisterData } from 'src/types/Auth.type'
import { ResponseData } from 'src/types/Response.type'
const URL = '/'
type registerSuccess = {
  token: string
  status: string
}

// export const loginAPI = (data: LoginData) => http.post<ResponseData<AuthData>>(`${URL}login`, data)
// export const signUpAPI = (data: RegisterData) => http.post<ResponseData<AuthData>>(`${URL}register`, data)
// export const logoutAPI = () => http.post(`${URL}logout`)
// export const profileAPI = () => http.get(`${URL}me`)
