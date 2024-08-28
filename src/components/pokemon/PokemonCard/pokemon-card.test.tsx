import { mockPokemon } from "@/__mocks__/pokemon.mock";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { PokemonCard } from "./";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("<PokemonCard />", () => {
  it("should render correctly with given props", () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText(`#${mockPokemon.id}`)).toBeInTheDocument();
    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument();

    expect(screen.getByText("Weight: 6.9 kgs")).toBeInTheDocument();
    expect(screen.getByText("Height: 0.7 mts")).toBeInTheDocument();
  });

  it("should render type images correctly", () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    mockPokemon.types.forEach((type) => {
      const typeImage = screen.getByAltText(type) as HTMLImageElement;
      expect(typeImage.src).toContain(`${type}.png`);
    });
  });

  it("should render pokemon image correctly", () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    const pokemonImage = screen.getByAltText(
      mockPokemon.name
    ) as HTMLImageElement;
    expect(pokemonImage.src).toContain(mockPokemon.image);
  });

  it("should redirect to pokemon detail page when button is clicked", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<PokemonCard pokemon={mockPokemon} />);
    const button = screen.getByRole("button", { name: /see more.../i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith("/pokemon/bulbasaur");
  });
});
