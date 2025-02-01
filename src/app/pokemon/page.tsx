"use client";

import { useTheme } from "@/src/context/ThemeContext";
import { type APIPokemonResponse, usePokemon } from "@/src/hooks/usePokemon";
import Link from "next/link";
import { useCallback } from "react";

import { Trans } from "@lingui/react/macro";
import s from "./pokemon.module.css";

export default function About() {
  const { theme, toggleTheme } = useTheme();
  const { data, error, isLoading } = usePokemon();

  const renderPokemon = useCallback(() => {
    if (isLoading)
      return (
        <p>
          <Trans>Loading Names Pokemon...</Trans>
        </p>
      );
    if (error) return <p>{error.message}</p>;
    if (data?.results) {
      return (
        <>
          <p style={{ marginBottom: "20px" }}>
            https://pokeapi.co/api/v2/pokemon
          </p>
          {data.results.map((pokemon: APIPokemonResponse) => (
            <p key={pokemon.name}>{pokemon.name}</p>
          ))}
        </>
      );
    }
  }, [isLoading, error, data]);

  return (
    <div className={s.page}>
      <h1>
        <Trans>Example Pokemon Page</Trans>
      </h1>
      <button className={s.button} type="button" onClick={toggleTheme}>
        <Trans>Theme {theme}</Trans>
      </button>
      <Link className={s.button} href={"/"}>
        <Trans>Home Page</Trans>
      </Link>
      {renderPokemon()}
    </div>
  );
}
