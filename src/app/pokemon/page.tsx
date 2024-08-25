"use client";

import { PokemonFilters } from "@/components/pokemon/PokemonFilters";
import { PokemonList } from "@/components/pokemon/PokemonList";
import { Paginator } from "@/components/ui/Paginator";
import { usePokemonContext } from "@/context/PokemonContext";

const PokemonListPage = () => {
  const { currentPage, setCurrentPage, pokemons, isLoading, error } =
    usePokemonContext();

  if (error) return <div>An error occurred</div>;

  return (
    <div className="container mx-auto p-5">
      <PokemonFilters />
      <PokemonList pokemons={pokemons} isLoading={isLoading} />

      <Paginator page={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default PokemonListPage;
