"use client";

import { Pokemon } from "@/interfaces/pokemon.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";
import { Divider } from "../../ui/Divider";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps): ReactElement => {
  const router = useRouter();

  return (
    <div className="card flex flex-col justify-between glass w-72 h-96 pt-2 shadow-normal hover:shadow-hover duration-200">
      <figure
        style={{ filter: "drop-shadow(5px 30px 12px rgba(0, 0, 0, 0.6))" }}
      >
        <Image
          src={pokemon.image}
          width={300}
          height={300}
          alt={pokemon.name}
          className="w-32 h-32 pt-2"
          priority
        />
      </figure>
      <div className="card-body p-4 flex flex-col justify-between">
        <div className="flex flex-row gap-2 items-center">
          <h4>#{pokemon.id}</h4>
          <h2 className="card-title capitalize text-center">{pokemon.name}</h2>
        </div>
        <div className="flex flex-row">
          {pokemon.types.map((type) => (
            <div key={type}>
              <Image
                src={`/${type}.png`}
                width={60}
                height={100}
                alt={type}
                className="mr-2 w-16"
              />
            </div>
          ))}
        </div>
        <Divider />
        <div>
          <p>Weight: {pokemon.weight} kgs</p>
          <p>Height: {pokemon.height} mts</p>
        </div>
        <div className="card-actions justify-center mt-2">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md"
            onClick={() => router.push(`/pokemon/${pokemon.name}`)}
          >
            See more...
          </button>
        </div>
      </div>
    </div>
  );
};
