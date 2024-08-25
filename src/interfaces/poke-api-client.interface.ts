import { Pokemon } from "./pokemon.interface";

export interface PokemonResult {
  success: boolean;
  data?: Pokemon;
  error?: string;
}

export interface IPokeApiClient {
  getPokemonList(offset?: number, limit?: number): Promise<Pokemon[]>;
  getPokemonDetails(pokemonNameOrId: string | number): Promise<PokemonResult>;
}