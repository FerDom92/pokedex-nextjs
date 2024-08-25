import { pokeApiClient } from '@/lib/apiClient';
import { useQuery } from '@tanstack/react-query';

export const usePokemons = (page: number) => {
  const offset = (page - 1) * 5
  return useQuery({
    queryKey: ['pokemonList', page],
    queryFn: () => pokeApiClient.getPokemonList(offset, 5),
  });
};