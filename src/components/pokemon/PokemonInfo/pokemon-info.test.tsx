import { mockPokemon } from "@/__mocks__/pokemon.mock";
import { render, screen } from "@testing-library/react";
import { PokemonInfo } from ".";

describe("<PokemonInfo />", () => {
  it("should render all titles", () => {
    render(<PokemonInfo pokemon={mockPokemon} />);

    expect(screen.getByText(/stats/i)).toBeInTheDocument();
    expect(screen.getByText(/characteristics/i)).toBeInTheDocument();
    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(screen.getByText(/abilities/i)).toBeInTheDocument();
  });

  it("should render PokemonInfo with valid data", () => {
    render(<PokemonInfo pokemon={mockPokemon} />);

    expect(screen.getByText(/experience - 64/i)).toBeInTheDocument();
    expect(screen.getByText(/weight - 6.9 kgs/i)).toBeInTheDocument();
    expect(screen.getByText(/height - 0.7 mts/i)).toBeInTheDocument();
    expect(screen.getByText(/overgrow/i)).toBeInTheDocument();
    expect(screen.getByText(/chlorophyll/i)).toBeInTheDocument();
  });

  it("should render images for types", () => {
    render(<PokemonInfo pokemon={mockPokemon} />);

    mockPokemon.types.forEach((type) => {
      const typeImage = screen.getByAltText(type) as HTMLImageElement;
      expect(typeImage.src).toContain(`${type}.png`);
    });
  });
});
