import { Pokemon } from "./pokemon.interface";

export interface IPokeApiClient {
  getPokemonList(limit: number, offset: number): Promise<Pokemon[]>;
  getPokemonDetails(pokemonNameOrId: string): Promise<Pokemon>;
}
