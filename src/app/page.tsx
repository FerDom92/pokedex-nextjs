import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./components/ui/icons/ArrowRight";

export default function Home() {
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
        style={{ filter: "drop-shadow(0 0 10px rgba(151, 151, 151, 0.6))" }}
      />

      <div className="mx-auto mt-6">
        <Link href="/pokemon">
          <button className="btn btn-neutral">
            <div className="flex justify-center items-center uppercase">
              Go to Pokemon List
              <ArrowRightIcon className="ml-4" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
