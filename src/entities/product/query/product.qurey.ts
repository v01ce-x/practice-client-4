import { defineQuery, useQuery } from '@pinia/colada'
import { PRODUCT_QUERY_KEYS, productService } from '@/entities/product'

export const useProduct = defineQuery(() => {
  return useQuery({
    key: PRODUCT_QUERY_KEYS.all,
    query: () => productService.products()
  })
})
