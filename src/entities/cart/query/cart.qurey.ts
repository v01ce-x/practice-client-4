import { defineMutation, defineQuery, useMutation, useQuery, useQueryCache } from '@pinia/colada'
import { CART_QUERY_KEYS, cartService } from '@/entities/cart'
import { push } from 'notivue'
import { errorHandler } from '@/shared/api'

export const useCarts = defineQuery(() => {
  return useQuery({
    key: CART_QUERY_KEYS.all,
    query: () => cartService.carts(),
  })
})

export const useAddToCart = defineMutation(() => {
  const queryCache = useQueryCache()

  return useMutation({
    mutation: cartService.addToCart,

    onSuccess: () => {
      push.success('Товар добавлен в корзину')
      queryCache.invalidateQueries({ key: CART_QUERY_KEYS.all })
    },

    onError: (error) => {
      push.error(errorHandler(error))
    },
  })
})

export const useRemoveToCart = defineMutation(() => {
  const queryCache = useQueryCache()

  return useMutation({
    mutation: cartService.removeToCart,

    onSuccess: () => {
      push.success('Товар удален из корзины')
      queryCache.invalidateQueries({ key: CART_QUERY_KEYS.all })
    },

    onError: (error) => {
      push.error(errorHandler(error))
    },
  })
})

export const usePlacingOrder = defineMutation(() => {
  const queryCache = useQueryCache()

  return useMutation({
    mutation: cartService.placingOrder,

    onSuccess: () => {
      queryCache.invalidateQueries({ key: CART_QUERY_KEYS.all })
    },

    onError: () => {
      console.log('Плохо')
    }
  })
})
