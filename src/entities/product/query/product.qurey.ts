import { defineMutation, defineQuery, useMutation, useQuery } from '@pinia/colada'
import { PRODUCT_QUERY_KEYS, productService } from '@/entities/product'

export const useProduct = defineQuery(() => {
  return useQuery({
    key: PRODUCT_QUERY_KEYS.all,
    query: () => productService.products()
  })
})

export const useAddToCart = defineMutation(() => {

  return useMutation({
    mutation: productService.addToCart,

    onSuccess: () => {
      console.log(123)
    },

    onError: () => {
    console.log(321)
  }
  })
})
