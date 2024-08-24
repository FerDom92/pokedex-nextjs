import { Pokemon } from "@/app/interfaces/pokemon.interface";
import Image from "next/image";
import { Chip } from "../../ui/Chip";
import { PokemonStats } from "../PokemonStats";

interface PokemonInfoProps {
  pokemon: Pokemon;
}

export const PokemonInfo = ({ pokemon }: PokemonInfoProps) => {
  return (
    <div className="flex flex-col mt-20 xl:mt-10">
      <div>
        <h2 className="text-2xl uppercase text-center my-4">Stats</h2>
        <PokemonStats stats={pokemon.stats} />
      </div>

      <div>
        <h2 className="text-2xl uppercase text-center my-4">Characteristics</h2>
        <div className="flex flex-row gap-4">
          <Chip name={`Experience - ${pokemon.experience}`} />
          <Chip name={`Weight - ${pokemon.weight} kgs`} />
          <Chip name={`Height - ${pokemon.height} mts`} />
        </div>
      </div>

      <div>
        <h2 className="text-2xl uppercase text-center my-4">Type</h2>
        <div className="flex flex-row gap-2">
          {pokemon.types.map((type) => (
            <Image
              key={type}
              src={`/${type}.png`}
              width={60}
              height={100}
              alt={pokemon.name}
              className="mr-2 w-16"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl uppercase text-center my-4">Abilities</h2>
        <div className="flex flex-row gap-4 flex-wrap">
          {pokemon.abilities.map((ability) => (
            <div className="capitalize" key={ability}>
              <Chip name={ability} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
