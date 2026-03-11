import { api } from '@/shared/api'
import type { RegisterBody } from '@/entities/account'

export const accountService = {
  register: (data: RegisterBody) => api.post('signup', data)
}
