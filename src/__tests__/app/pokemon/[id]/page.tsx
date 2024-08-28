import { fireEvent, render, screen } from "@testing-library/react";

import { mockPokemon } from "@/__mocks__/pokemon.mock";
import PokemonDetails from "@/app/pokemon/[id]/page";
import { useRouter } from "next/navigation";
import { usePokemonDetails } from "../../../../hooks/usePokemonDetails";

jest.mock("../../../../hooks/usePokemonDetails");
jest.mock("next/navigation");

describe.only("Pokemon Detail Page", () => {
  const mockUsePokemonDetails = usePokemonDetails as jest.Mock;

  it("should render spinner when its loading", () => {
    mockUsePokemonDetails.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<PokemonDetails params={{ id: "1" }} />);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("should render pokemon details when data is loaded", () => {
    mockUsePokemonDetails.mockReturnValue({
      data: { data: mockPokemon },
      isLoading: false,
      error: null,
    });

    render(<PokemonDetails params={{ id: "1" }} />);
    const image = screen.getByAltText(mockPokemon.name) as HTMLImageElement;

    expect(screen.getByText("Back to List")).toBeInTheDocument();
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(image.src).toBe(mockPokemon.image);
  });

  it("should render 'Pokemon not found' message when there's an error or no data", () => {
    mockUsePokemonDetails.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    });

    render(<PokemonDetails params={{ id: "654654" }} />);

    expect(screen.getByText("Pokemon not found")).toBeInTheDocument();
  });

  it("should return back to the list when 'Back to List' button is clicked", () => {
    const mockUseRouter = useRouter as jest.Mock;
    const mockReplace = jest.fn();

    mockUseRouter.mockReturnValue({ push: mockReplace });

    mockUsePokemonDetails.mockReturnValue({
      data: { data: mockPokemon },
      isLoading: false,
      error: null,
    });

    render(<PokemonDetails params={{ id: "1" }} />);

    const button = screen.getByRole("button", { name: "Back to List" });

    fireEvent.click(button);

    expect(mockReplace).toHaveBeenCalledWith("/pokemon");
    expect(mockReplace).toHaveBeenCalledTimes(1);
  });
});
