"use client";

import { ArrowRightIcon } from "@/components/ui/icons/ArrowRight";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container flex flex-col justify-center mx-auto">
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center mt-10">
        Welcome to my <strong className="italic">Pokedex</strong>
      </h1>

      <p className="text-center text-lg md:text-2xl lg:text-3xl mt-5">
        You can see information about Pokemons
      </p>

      <Image
        src={"/pokemon-landing.png"}
        alt="Pokemons"
        width={1000}
        height={200}
        className="mx-auto p-5"
        style={{ filter: "drop-shadow(0 0 30px rgba(0, 0, 0, 1))" }}
        priority
      />

      <div className="mx-auto mt-10">
        <button
          className="btn btn-neutral flex flex-row"
          onClick={() => router.push("/pokemon")}
        >
          Go to Pokemon List
          <ArrowRightIcon className="ml-4" />
        </button>
      </div>
    </div>
  );
}
