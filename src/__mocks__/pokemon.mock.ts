import { Pokemon } from "@/interfaces/pokemon.interface";

export const mockPokemon: Pokemon = {
  id: 1,
  name: "bulbasaur",
  experience: 64,
  weight: 6.9,
  height: 0.7,
  abilities: ["overgrow", "chlorophyll"],
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  types: ["grass", "poison"],
  stats: [
    {
      name: "hp",
      value: 45,
    },
    {
      name: "attack",
      value: 49,
    },
    {
      name: "defense",
      value: 49,
    },
    {
      name: "special attack",
      value: 65,
    },
    {
      name: "special defense",
      value: 65,
    },
    {
      name: "speed",
      value: 45,
    },
  ],
};