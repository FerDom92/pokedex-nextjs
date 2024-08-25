import { Pokemon } from "@/interfaces/pokemon.interface";
import { SkeletonCard } from "../../ui/SkeletonCard";
import { PokemonCard } from "../PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
  isLoading: boolean;
}

export const PokemonList = ({ pokemons, isLoading }: PokemonListProps) => {
  const skeletonCount = 5;
  const skeletonArr = new Array(skeletonCount).fill(0);

  return (
    <div className="flex flex-row gap-5 m-3 justify-center">
      {isLoading ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
            {skeletonArr.map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-row w-full xl:w-3/4 flex-wrap justify-center items-center gap-5">
          {pokemons?.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};
