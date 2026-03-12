import { api } from '@/shared/api'
import type { RegisterBody, LoginBody } from '@/entities/account'
import { useAuth } from '@/shared/composables'

const { token } = useAuth()

export const accountService = {
  register: (data: RegisterBody) => api.post('/signup', data),
  login: (data: LoginBody) => api.post('/login', data).then(res => res.data),
  logout: () => api.get('/logout', {
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })
}
