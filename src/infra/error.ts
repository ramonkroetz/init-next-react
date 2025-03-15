import { logError } from 'client-error-logger'

type CustomErrorProps = {
  name: string
  message: string
  status?: number
  codes: (string | number)[]
}

export class CustomError extends Error {
  name: string
  status?: number
  codes: (string | number)[]

  constructor({ cause, message, name, status, codes }: { cause: unknown } & CustomErrorProps) {
    super(message, { cause })
    this.name = name
    this.status = status
    this.codes = codes
  }

  toJSON(): CustomErrorProps {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      codes: this.codes,
    }
  }
}

export function getMessageCodeError(errorMessages: Record<string, string>, codes: (string | number)[]) {
  return Object.entries(errorMessages).find(([key]) => codes.includes(key))?.[1]
}

export function getCustomError(error: unknown) {
  if (error instanceof CustomError) {
    return error.toJSON()
  }

  return createCustomError('Custom Error', error).toJSON()
}

export function logCustomError(name: string, error: unknown) {
  const customError = createCustomError(name, error)
  logError(name, { error: customError })
}

function createCustomError(name: string, error: unknown) {
  if (error instanceof CustomError) {
    error.name = `${name} >> ${error.name}`
    return error
  }

  if (error instanceof Error) {
    return new CustomError({
      name: name,
      message: error.message,
      status: 500,
      codes: ['UNKNOWN_ERROR'],
      cause: error,
    })
  }

  return new CustomError({
    name: name,
    message: 'An unexpected error occurred.',
    status: 500,
    codes: ['UNKNOWN_ERROR'],
    cause: error,
  })
}
