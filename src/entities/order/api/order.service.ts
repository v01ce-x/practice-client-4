import { api } from '@/shared/api'
import { useAuth } from '@/shared/composables'

const { token } = useAuth()

export const orderService = {
  orders: () =>
    api
      .get('/order', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .then((res) => res.data.data),
}
