import { AppContext } from 'src/contexts/app.context'
import { AuthData, User } from 'src/types/Auth.type'
import { useContext } from 'react'

export const LocalStorageEventTarget = new EventTarget()

export const saveAccessTokenToLS = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const clearAccessTokenFromLS = () => {
  localStorage.removeItem('access_token')
}

export const getAccessTokenFromLS = (): string => localStorage.getItem('access_token') || ''

export const saveRefreshTokenToLS = (accessToken: string) => {
  localStorage.setItem('refresh_token', accessToken)
}

export const clearRefreshToken = () => {
  localStorage.removeItem('refresh_token')
}

export const getRefreshToken = (): string => localStorage.getItem('refresh_token') || ''
export const saveUserToLS = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user))
}
export const getUserFromLS = (): User => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : {}
}

export const clearUserFromLS = () => {
  localStorage.removeItem('user')
}

export const clearLS = () => {
  clearRefreshToken()
  clearAccessTokenFromLS()
  clearUserFromLS()
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}
