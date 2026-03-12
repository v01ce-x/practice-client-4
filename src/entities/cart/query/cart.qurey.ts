import { defineMutation, defineQuery, useMutation, useQuery, useQueryCache } from '@pinia/colada'
import { CART_QUERY_KEYS, cartService } from '@/entities/cart'

export const useAddToCart = defineMutation(() => {
  const queryCache = useQueryCache()

  return useMutation({
    mutation: cartService.addToCart,

    onSuccess: () => {
      queryCache.invalidateQueries({ key: CART_QUERY_KEYS.all })
    },

    onError: () => {
      console.log('пупупу')
    },
  })
})

export const useCarts = defineQuery(() => {
  return useQuery({
    key: CART_QUERY_KEYS.all,
    query: () => cartService.carts(),
  })
})
