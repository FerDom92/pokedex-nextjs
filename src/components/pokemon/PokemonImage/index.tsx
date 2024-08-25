import { Pokemon } from "@/interfaces/pokemon.interface";
import Image from "next/image";

interface PokemonImageProps {
  pokemon: Pokemon;
}

export const PokemonImage = ({ pokemon }: PokemonImageProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center gap-4">
        <h3 className="text-2xl">#{pokemon.id}</h3>
        <h1 className="text-4xl uppercase py-2">{pokemon?.name}</h1>
      </div>
      <figure
        style={{ filter: "drop-shadow(20px 60px 12px rgba(0, 0, 0, 0.6))" }}
      >
        <Image
          src={pokemon?.image}
          alt={pokemon.name}
          width={350}
          height={200}
          priority
          className="w-72 md:w-80 mt-6"
        />
      </figure>
    </div>
  );
};
