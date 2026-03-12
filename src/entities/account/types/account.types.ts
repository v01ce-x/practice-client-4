export interface RegisterBody {
  fio: string
  email: string
  password: string
}

export interface LoginBody {
  email: string
  password: string
}
