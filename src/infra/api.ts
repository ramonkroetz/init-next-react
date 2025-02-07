import axios, { type AxiosResponse } from 'axios'
import { createCustomError } from './error'

export type ApiResponse<T> = AxiosResponse<T>

export const ApiService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
})

ApiService.interceptors.response.use(
  (response: AxiosResponse<unknown>) => {
    // Sometimes the API can return an error object with success status code
    // If that happens, we can create reject a custom error
    // const customError = createCustomError('ErrorApiResponse', info)
    // return Promise.reject(customError)

    return response
  },
  (error: unknown) => {
    const customError = createCustomError('ErrorApiResponse', error)
    return Promise.reject(customError)
  },
)
