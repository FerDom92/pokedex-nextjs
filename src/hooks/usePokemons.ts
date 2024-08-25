import { useQuery } from '@tanstack/react-query';
import PokeApiClient from '../services/PokeApi';

export const usePokemons = (page: number) => {
  const offset = (page - 1) * 5
  return useQuery({
    queryKey: ['pokemonList', page],
    queryFn: () => PokeApiClient.getInstance().getPokemonList(offset, 5),
  });
};