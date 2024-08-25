import { useQuery } from '@tanstack/react-query';
import PokeApiClient from '../services/PokeApi';

export const usePokemonDetails = (id: number | string) => {
  return useQuery({
    queryKey: ['pokemonDetail', id],
    queryFn: () => PokeApiClient.getInstance().getPokemonDetails(id),
  });
};