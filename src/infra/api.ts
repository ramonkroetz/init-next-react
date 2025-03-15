'use client'

import axios, { type AxiosError, type AxiosResponse } from 'axios'
import { logError } from 'client-error-logger'

import { CustomError } from './error'

export type ApiResponse<T> = AxiosResponse<T>

export const ApiService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
})

ApiService.interceptors.response.use(
  (response: AxiosResponse<unknown>) => {
    // Sometimes the API can return an error object with success status code
    // If that happens, we can create a custom error and log it
    // const customError = new CustomError({
    //   name: 'ErrorApiResponse',
    //   message: ...,
    //   status: ...,
    //   cause: ...,
    // })
    // return Promise.reject(customError)

    return response
  },
  (error: AxiosError<unknown>) => {
    const customError = new CustomError({
      name: 'ErrorApiResponse',
      message: error?.message,
      status: error.response?.status,
      cause: error,
      codes: [error?.code || 'UNKNOWN_ERROR'],
    })

    logError('ErrorApiResponse', {
      error: customError,
    })

    return Promise.reject(customError)
  },
)
