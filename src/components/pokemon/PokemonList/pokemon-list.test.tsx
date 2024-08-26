import { mockPokemons } from "@/__mocks__/pokemons.mock";
import { render, screen } from "@testing-library/react";
import { PokemonList } from "./";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("<PokemonList />", () => {
  it("should render loading skeletons when isLoading is true", () => {
    render(<PokemonList pokemons={[]} isLoading={true} />);

    const skeletons = screen.getAllByTestId("skeleton-card");
    expect(skeletons).toHaveLength(5);
    skeletons.forEach((skeleton) => expect(skeleton).toBeInTheDocument());
  });

  it("should render pokemon cards when isLoading is false and pokemons are provided", () => {
    render(<PokemonList pokemons={mockPokemons} isLoading={false} />);

    const pokemonCards = screen.getAllByTestId("pokemon-card");
    expect(pokemonCards).toHaveLength(mockPokemons.length);
    mockPokemons.forEach((pokemon) => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument();
    });
  });

  it("should not render pokemon cards when isLoading is false and pokemons list is empty", () => {
    render(<PokemonList pokemons={[]} isLoading={false} />);

    const pokemonCards = screen.queryByTestId("pokemon-card");
    expect(pokemonCards).not.toBeInTheDocument();
  });

  it("should render correctly with empty props", () => {
    render(<PokemonList pokemons={[]} isLoading={false} />);

    const container = screen.getByTestId("pokemon-list");
    expect(container).toBeInTheDocument();
  });
});
