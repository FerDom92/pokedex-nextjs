import HomePage from "@/app/page";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  it("should render 'Welcome to my Pokedex'", () => {
    render(<HomePage />);

    const welcomeText = screen.getByText("Welcome to my") as HTMLDivElement;
    const pokedexText = screen.getByText("Pokedex") as HTMLDivElement;

    expect(welcomeText).toBeInTheDocument();
    expect(welcomeText.innerHTML).toContain("Welcome to my");

    expect(pokedexText).toBeInTheDocument();
    expect(pokedexText.innerHTML).toContain("Pokedex");
  });

  it("should render 'You can see information about Pokemons'", () => {
    render(<HomePage />);

    const text = screen.getByText(
      "You can see information about Pokemons"
    ) as HTMLDivElement;

    expect(text).toBeInTheDocument();
    expect(text.innerHTML).toBe("You can see information about Pokemons");
  });

  it("should render button with text 'Go to Pokemon List'", () => {
    render(<HomePage />);

    const button = screen.getByRole("button", { name: "Go to Pokemon List" });

    expect(button).toBeInTheDocument();
  });

  it("should render image from landing page", () => {
    render(<HomePage />);

    const pokemonImage = screen.getByAltText(/Pokemons/i) as HTMLImageElement;

    expect(pokemonImage.src).toContain("pokemon-landing.png");
  });

  it("navigates to /pokemon on button click", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<HomePage />);

    const button = screen.getByRole("button", { name: /go to pokemon list/i });
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(pushMock).toHaveBeenCalledWith("/pokemon");
    expect(pushMock).toHaveBeenCalledTimes(1);
  });
});
