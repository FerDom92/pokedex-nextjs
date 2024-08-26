import { Pokemon } from "@/interfaces/pokemon.interface";

export const mockPokemons: Pokemon[] = [
  {
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
  },
  {
    id: 2,
    name: "ivysaur",
    experience: 142,
    weight: 13,
    height: 1,
    abilities: ["overgrow", "chlorophyll"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    types: ["grass", "poison"],
    stats: [
      {
        name: "hp",
        value: 60,
      },
      {
        name: "attack",
        value: 62,
      },
      {
        name: "defense",
        value: 63,
      },
      {
        name: "special attack",
        value: 80,
      },
      {
        name: "special defense",
        value: 80,
      },
      {
        name: "speed",
        value: 60,
      },
    ],
  },
];