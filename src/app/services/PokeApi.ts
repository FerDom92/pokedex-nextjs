import axios, { AxiosInstance } from 'axios';
import { pokemonAdapter } from '../adapters/pokemonAdapter';
import { IPokeApiClient } from '../interfaces/poke-api-client.interface';
import { PokemonDetailResponse } from '../interfaces/pokemon-detail-response.interface';
import { PokemonListResponse } from '../interfaces/pokemon-list-response.interface';

class PokeApiClient implements IPokeApiClient {
  private static instance: PokeApiClient;
  private axiosInstance: AxiosInstance;

  private constructor() {
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

  async getPokemonList(offset: number = 0, limit: number = 5) {
    const response = await this.axiosInstance.get<PokemonListResponse>(`/pokemon?offset=${offset}&limit=${limit}`);

    const pokemons = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const id = pokemon.url.split('/').at(-2);
        const pokemonData = await this.getPokemonDetails(`${id}`);
        return pokemonData;
      })
    );

    return pokemons
  }

  async getPokemonDetails(id: number | string) {
    const response = await this.axiosInstance.get<PokemonDetailResponse>(`/pokemon/${id}`);

    const pokemonAdapted = pokemonAdapter(response.data)

    return pokemonAdapted;
  }
}

export default PokeApiClient;