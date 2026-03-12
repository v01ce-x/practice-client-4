import { api } from '@/shared/api'

export const productService = {
  products: () => api.get("/products").then(res => res.data.data),
}
