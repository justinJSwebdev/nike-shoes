export type RegisterData = {
  name: string
  email: string
  password: string
  confirm_password: string
}
export type User = {
  email: string
  name: string
  role: string
  image?: string
}

export type AuthData = {
  status: string
  data: {
    token: string
    refresh_token: string
    user: User
  }
}

export type LoginData = Pick<RegisterData, 'password' | 'email'>
