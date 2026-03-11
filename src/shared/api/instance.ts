import axios, { type AxiosInstance } from 'axios'
// import { ApiStatus } from './constants'
// import { Routes, useAuth } from '@/shared'
// import { push } from 'notivue'
// import type { Router } from 'vue-router'
//
// const { clearToken, isAuth } = useAuth()

export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
  },
})
//
// api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })
//
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === ApiStatus.UNAUTHORIZED) {
//       if (isAuth.value) {
//         const router: Router = await import('@/app/router').then((i) => i.default)
//         void router.push(Routes.home.path)
//         push.error('Сессия истекла. Пожалуйста, авторизуйтесь заново')
//       }
//       clearToken()
//     }
//     return Promise.reject(error)
//   },
// )
