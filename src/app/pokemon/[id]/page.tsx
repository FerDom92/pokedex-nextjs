"use client";

import { PokemonImage } from "@/components/pokemon/PokemonImage";
import { PokemonInfo } from "@/components/pokemon/PokemonInfo";
import { ArrowLeftIcon } from "@/components/ui/icons/ArrowLeft";
import { NotFoundIcon } from "@/components/ui/icons/NotFound";
import { Spinner } from "@/components/ui/Spinner";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { isNil } from "lodash";
import { useRouter } from "next/navigation";

export default function PokemonDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data, isLoading, error } = usePokemonDetails(params.id);

  const pokemon = data?.data;

  const handleBackClick = () => {
    router.replace("/pokemon");
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <button
        className="btn btn-ghost self-start mt-2 ml-2"
        onClick={handleBackClick}
      >
        <ArrowLeftIcon />
        Back to List
      </button>
      {error || isNil(pokemon) ? (
        <div className="flex flex-col items-center gap-5">
          <NotFoundIcon width={124} height={124} />
          <p className="text-2xl">Pokemon not found</p>
        </div>
      ) : (
        <div className="container grid grid-cols-1 xl:grid-cols-2 p-5 pt-0 items-center w-full lg:w-1/2 xl:w-3/4 mx-auto">
          <PokemonImage pokemon={pokemon} />
          <PokemonInfo pokemon={pokemon} />
        </div>
      )}
    </>
  );
}
