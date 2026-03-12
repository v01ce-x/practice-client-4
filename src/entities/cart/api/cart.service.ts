import { api } from '@/shared/api'
import { useAuth } from '@/shared/composables'

const { token } = useAuth()

export const cartService = {
  carts: () =>
    api
      .get('/cart', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .then((res) => res.data.data),

  addToCart: (product_id: number) =>
    api.post(
      `/cart/${product_id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      },
    ),

  removeToCart: (product_id: number) =>
    api.delete(`/cart/${product_id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }),

  placingOrder: () =>
    api.post(
      '/order',
      {},
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      },
    ),
}
