"use client";

import { PokemonList } from "@/app/components/pokemon/PokemonList";
import { Paginator } from "@/app/components/ui/Paginator";
import { usePokemonContext } from "@/app/context/PokemonContext";

const PokemonListPage = () => {
  const { currentPage, setCurrentPage, pokemons, isLoading, error } =
    usePokemonContext();

  if (error) return <div>An error occurred</div>;

  return (
    <div className="container mx-auto">
      <PokemonList pokemons={pokemons} isLoading={isLoading} />

      <Paginator page={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default PokemonListPage;
