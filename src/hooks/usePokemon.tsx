import { type ApiResponse, ApiService } from '@/src/infra/api'
import useSWR from 'swr'
import type { CustomError } from '../infra/error'

export type APIPokemonResponse = {
  name: string
  url: string
}

export type APIListPokemonResponse = {
  results: APIPokemonResponse[]
}

export function usePokemon() {
  const { data, error, isLoading } = useSWR<ApiResponse<APIListPokemonResponse>, CustomError>(
    'https://pokeapi.co/api/v2/pokemon',
    async (url: string) => {
      return await ApiService.get(url)
    },
  )

  return {
    isLoading,
    data: data?.data,
    error,
  }
}
