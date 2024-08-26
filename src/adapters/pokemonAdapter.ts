import { PokemonDetailResponse } from "@/interfaces/pokemon-detail-response.interface";
import { Pokemon } from "@/interfaces/pokemon.interface";

export const pokemonAdapter = (pokemon: PokemonDetailResponse): Pokemon => {
  const {
    id,
    name,
    base_experience: experience,
    weight,
    height,
    sprites: images,
    types,
    stats,
    abilities
  } = pokemon

  const pokemonAdapted: Pokemon = {
    id,
    name,
    experience,
    weight: weight / 10,
    height: height / 10,
    abilities: abilities.map(ability => ability.ability.name.replaceAll('-', ' ')),
    image: images.other?.dream_world.front_default ?? images.front_default,
    types: types.map(type => type.type.name),
    stats: stats.map(stat => ({ name: stat.stat.name.replaceAll('-', ' '), value: stat.base_stat })),
  }

  return pokemonAdapted
}