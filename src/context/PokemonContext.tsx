"use client";

import { isNil, isUndefined } from "lodash";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePokemons } from "../hooks/usePokemons";
import { Pokemon } from "../interfaces/pokemon.interface";

interface PokemonContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pokemons: Pokemon[];
  setPokemons: (pokemon: Pokemon[]) => void;
  isLoading: boolean;
  error?: Error | null;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { data, isLoading, error } = usePokemons(currentPage);

  useEffect(() => {
    if (data && !isNil(data)) {
      setPokemons(data);
    }
  }, [data]);

  return (
    <PokemonContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        pokemons,
        isLoading,
        error,
        setPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);

  if (isUndefined(context)) {
    throw new Error("usePokemonContext should be used in a PokemonProvider");
  }

  return context;
};
