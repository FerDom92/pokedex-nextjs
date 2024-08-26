import { mockPokemonDetail } from "@/__mocks__/pokemon-detail-response.mock";
import { mockPokemon } from "@/__mocks__/pokemon.mock";
import { PokemonDetailResponse } from "@/interfaces/pokemon-detail-response.interface";
import { Pokemon } from "@/interfaces/pokemon.interface";
import { pokemonAdapter } from "./pokemonAdapter";

describe("Pokemon Adapter", () => {
  it("function pokemonAdapter should return a correct data", () => {
    const mockPokemonDetailResponse: PokemonDetailResponse = mockPokemonDetail;

    const expectedPokemon: Pokemon = mockPokemon;
    const adaptedPokemon = pokemonAdapter(mockPokemonDetailResponse);

    expect(adaptedPokemon).toEqual(expectedPokemon);
  });

  it("function pokemonAdapter should not be equal", () => {
    const mockPokemonDetailResponse: PokemonDetailResponse = mockPokemonDetail;

    const expectedPokemon: Pokemon = mockPokemon;
    const adaptedPokemon = pokemonAdapter({
      ...mockPokemonDetailResponse,
      name: "Inexistent pokemon name",
    });

    expect(adaptedPokemon).not.toEqual(expectedPokemon);
  });
});
