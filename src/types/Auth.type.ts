export type RegisterData = {
  name: string
  email: string
  password: string
  confirm_password: string
}
export type LoginData = Omit<RegisterData, 'name' | 'email'>
