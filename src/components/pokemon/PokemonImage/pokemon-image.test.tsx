import { mockPokemon } from "@/__mocks__/pokemon.mock";
import { render, screen } from "@testing-library/react";
import { PokemonImage } from ".";

describe("<PokemonImage />", () => {
  it("should render id and name of pokemon", () => {
    render(<PokemonImage pokemon={mockPokemon} />);

    const id = screen.getByText(`#${mockPokemon.id}`);
    const name = screen.getByText(mockPokemon.name);

    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it("should render image", () => {
    render(<PokemonImage pokemon={mockPokemon} />);

    const image = screen.getByAltText(/bulbasaur/i) as HTMLImageElement;
    expect(image.src).toContain(mockPokemon.image);
  });
});
