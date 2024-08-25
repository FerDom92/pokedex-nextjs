import { pokemonAdapter } from '@/adapters/pokemonAdapter';
import { getPokemonId } from '@/utils/getPokemonId';
import axios, { AxiosInstance } from 'axios';
import { isNil } from 'lodash';
import { IPokeApiClient, PokemonResult } from '../interfaces/poke-api-client.interface';
import { PokemonDetailResponse } from '../interfaces/pokemon-detail-response.interface';
import { PokemonListResponse } from '../interfaces/pokemon-list-response.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

class PokeApiClient implements IPokeApiClient {
  private static instance: PokeApiClient;
  private axiosInstance: AxiosInstance;

  public constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_POKEAPI_BASE_URL,
    });
  }

  public static getInstance(): PokeApiClient {
    if (!PokeApiClient.instance) {
      PokeApiClient.instance = new PokeApiClient();
    }
    return PokeApiClient.instance;
  }

  async getPokemonList(offset: number = 0, limit: number = 5): Promise<Pokemon[]> {
    try {
      const response = await this.axiosInstance.get<PokemonListResponse>(`/pokemon?offset=${offset}&limit=${limit}`);

      const pokemonPromises = response.data.results.map(async (pokemon) => {
        const id = getPokemonId(pokemon)
        const result = await this.getPokemonDetails(`${id}`);
        return result.success ? result.data : null;
      });

      const pokemons = await Promise.all(pokemonPromises);

      return pokemons.filter((pokemon): pokemon is Pokemon => !isNil(pokemon));
    } catch (error) {
      console.error('Error getting list of Pokémon:', error);
      return [];
    }
  }

  async getPokemonDetails(id: number | string): Promise<PokemonResult> {
    try {
      const response = await this.axiosInstance.get<PokemonDetailResponse>(`/pokemon/${id}`);
      const pokemonAdapted = pokemonAdapter(response.data);

      return {
        success: true,
        data: pokemonAdapted
      };
    } catch (error) {
      return {
        success: false,
        error: 'Error searching for Pokémon'
      };
    }
  }
}

export default PokeApiClient;