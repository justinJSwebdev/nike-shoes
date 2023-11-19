import http from 'src/utils/http'
import { AuthData, LoginData, RegisterData } from 'src/types/Auth.type'
import { ResponseData } from 'src/types/Response.type'

export const loginAPI = (data: LoginData) => http.post<AuthData>(`login`, data)
export const signUpAPI = (data: RegisterData) => http.post<ResponseData<AuthData>>(`register`, data)
export const logoutAPI = () => http.post(`logout`)
// export const profileAPI = () => http.get(`${URL}me`)
