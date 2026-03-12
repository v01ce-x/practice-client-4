import { defineQuery, useQuery } from '@pinia/colada'
import { ORDER_QUERY_KEYS, orderService } from '@/entities/order'

export const useOrder = defineQuery(() => {
  return useQuery({
    key: ORDER_QUERY_KEYS.all,
    query: () => orderService.orders(),
  })
})
