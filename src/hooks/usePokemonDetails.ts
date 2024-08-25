import { pokeApiClient } from '@/lib/apiClient';
import { useQuery } from '@tanstack/react-query';

export const usePokemonDetails = (id: number | string) => {
  return useQuery({
    queryKey: ['pokemonDetail', id],
    queryFn: () => pokeApiClient.getPokemonDetails(id),
  });
};