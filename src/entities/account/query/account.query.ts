import { defineMutation, useMutation, useQueryCache } from '@pinia/colada'
import { accountService } from '@/entities/account/api/account.service.ts'
import { push } from 'notivue'
import { errorHandler } from '@/shared/api'
import { ACCOUNT_QUERY_KEYS } from '@/entities/account'

export const useRegister = defineMutation(() => {
  const queryCache = useQueryCache()

  return useMutation({
    mutation: accountService.register,

    onSuccess: () => {
      push.success('супер')
      queryCache.invalidateQueries({ key: ACCOUNT_QUERY_KEYS.all })
    },

    onError: (error) => {
      console.log(432)
      push.error(errorHandler(error))
    },
  })
})
