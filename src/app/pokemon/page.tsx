'use client'

import { Trans as T, useLingui } from '@lingui/react/macro'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import { useTheme } from '@/src/context/ThemeContext'
import { type ApiResponse, ApiService } from '@/src/infra/api'
import { getCustomError, getMessageCodeError, logCustomError } from '@/src/infra/error'


import s from './pokemon.module.css'

type APIPokemonResponse = {
  results: {
    name: string
    url: string
  }[]
}

export default function About() {
  const { t } = useLingui()
  const { theme, toggleTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setMessageError] = useState<string>('')
  const [data, setData] = useState<APIPokemonResponse | null>(null)

  useEffect(() => {
    async function init() {
      try {
        setIsLoading(true)
        const response: ApiResponse<APIPokemonResponse> = await ApiService.get('https://pokeapi.co/api/v2/pokemon')

        setData(response.data)
      } catch (error) {
        const customError = getCustomError(error)
        const errorMessage = getMessageCodeError(
          {
            ERR_BAD_REQUEST: t`Message error Bad Request`,
          },
          customError.codes,
        )

        if (errorMessage) {
          setMessageError(errorMessage)
        } else {
          logCustomError('Pokemon', error)
        }
      } finally {
        setIsLoading(false)
      }
    }

    init()
  }, [t])

  const renderPokemon = useCallback(() => {
    if (isLoading)
      return (
        <p>
          <T>Loading Names Pokemon...</T>
        </p>
      )
    if (errorMessage) return <p>{errorMessage}</p>
    if (data) {
      return (
        <>
          <p style={{ marginBottom: '20px' }}>https://pokeapi.co/api/v2/pokemon</p>
          {data.results.map((pokemon) => (
            <p key={pokemon.name}>{pokemon.name}</p>
          ))}
        </>
      )
    }
  }, [isLoading, errorMessage, data])

  return (
    <div className={s.page}>
      <h1>
        <T>Example Pokemon Page</T>
      </h1>
      <button className={s.button} type="button" onClick={toggleTheme}>
        <T>Theme {theme}</T>
      </button>
      <Link className={s.button} href={'/'}>
        <T>Home Page</T>
      </Link>
      {renderPokemon()}
    </div>
  )
}
