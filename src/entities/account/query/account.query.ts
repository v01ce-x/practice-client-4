import { defineMutation, useMutation, useQueryCache } from '@pinia/colada'
import { accountService } from '@/entities/account/api/account.service.ts'
import { push } from 'notivue'
import { errorHandler } from '@/shared/api'
import { ACCOUNT_QUERY_KEYS } from '@/entities/account'
import { useAuth } from '@/shared/composables'
import { useRouter } from 'vue-router'

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

export const useLogin = defineMutation(() => {
  const queryCache = useQueryCache()
  const { setToken } = useAuth()

  return useMutation({
    mutation: accountService.login,

    onSuccess: (data) => {
      setToken(data.data.user_token)

      queryCache.invalidateQueries({ key: ACCOUNT_QUERY_KEYS.profile() })
    },

    onError: (error) => {
      console.log(432)
      push.error(errorHandler(error))
    },
  })
})

export const useLogout = defineMutation(() => {
  const queryCache = useQueryCache()
  const { clearToken } = useAuth()
  const router = useRouter()

  return useMutation({
    mutation: accountService.logout,

    onSuccess: () => {
      clearToken()
      queryCache.invalidateQueries({ key: ACCOUNT_QUERY_KEYS.all })
      push.success('Вы вышли из аккаунта')
      router.push('/')
    },

    onError: (error) => {
      console.log(432)
      push.error(errorHandler(error))
    },
  })
})
