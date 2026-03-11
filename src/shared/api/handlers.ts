import { AxiosError } from 'axios'
import type { ApiError } from '@/shared/api'

export const errorHandler = (error: Error) => {
  if (error instanceof AxiosError) return axiosErrorHandler(error)
  else return 'Непредвиденная ошибка'
}

export const axiosErrorHandler = (error: AxiosError<ApiError>) => {
  if (error.response)
    switch (error.response.status) {
      case 500:
        return 'Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.'
      case 502:
        return 'Сервер не смог обработать запрос. Пожалуйста, попробуйте еще раз'
      case 503:
        return 'Сервер временно недоступен. Пожалуйста, попробуйте позже.'
      default:
        if (error.response.data.message) return error.response.data.message
        else return 'Ошибка при обработке ответа сервера. Попробуйте позже'
    }
  else return 'Ошибка при отправке запроса. Попробуйте позже'
}
