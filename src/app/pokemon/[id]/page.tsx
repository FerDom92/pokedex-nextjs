"use client";

import { PokemonImage } from "@/app/components/pokemon/PokemonImage";
import { PokemonInfo } from "@/app/components/pokemon/PokemonInfo";
import { ArrowLeftIcon } from "@/app/components/ui/icons/ArrowLeft";
import { Spinner } from "@/app/components/ui/Spinner";
import { usePokemonDetails } from "@/app/hooks/usePokemonDetails";
import { isNil } from "lodash";
import { useRouter } from "next/navigation";

export default function PokemonDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data: pokemon, isLoading, error } = usePokemonDetails(params.id);

  const handleBackClick = () => {
    router.back();
  };

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error || isNil(pokemon)) return <div>An error occurred</div>;

  return (
    <>
      <button
        className="btn btn-ghost self-start mt-2 ml-2"
        onClick={handleBackClick}
      >
        <ArrowLeftIcon />
        Back to List
      </button>
      <div className="container grid grid-cols-1 xl:grid-cols-2 p-5 pt-0 items-center w-full lg:w-1/2 xl:w-3/4 mx-auto">
        <PokemonImage pokemon={pokemon} />
        <PokemonInfo pokemon={pokemon} />
      </div>
    </>
  );
}
