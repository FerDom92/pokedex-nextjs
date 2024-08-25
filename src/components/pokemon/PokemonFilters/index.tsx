import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const PokemonFilters = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchPokemon = (e?: FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.replace(`/pokemon/${searchQuery.trim()}`);
    }
  };

  return (
    <div className="collapse bg-base-200 mb-8 w-4/5 mx-auto">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">Find</div>
      <div className="collapse-content">
        <form onSubmit={handleSearchPokemon} className="flex flex-col gap-5">
          <div className="flex flex-row gap-5">
            <input
              type="text"
              placeholder="Search pokemon by name or id"
              className="input input-bordered w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
