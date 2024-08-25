
export interface Pokemon {
  id: number
  name: string
  experience: number
  height: number
  weight: number
  image: string,
  abilities: string[]
  types: string[]
  stats: Stat[]
}

interface Stat {
  name: string
  value: number
}