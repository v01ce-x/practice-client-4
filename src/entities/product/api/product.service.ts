import { api } from '@/shared/api'
import { useAuth } from '@/shared/composables'

const { token } = useAuth()

export const productService = {
  products: () => api.get('/products').then((res) => res.data.data),
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
}
