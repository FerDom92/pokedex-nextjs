import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { PokemonFilters } from ".";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("<PokemonFilters />", () => {
  it("should renders PokemonFilters component", () => {
    render(<PokemonFilters />);

    const input = screen.getByPlaceholderText(/Search pokemon by name or id/i);

    expect(input).toBeInTheDocument();
    expect(screen.getByText(/Find/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("initial search query state should be empty", () => {
    render(<PokemonFilters />);

    const input = screen.getByPlaceholderText(
      /Search pokemon by name or id/i
    ) as HTMLInputElement;
    expect(input.value).toBe("");
  });

  it("should update input value on change", async () => {
    render(<PokemonFilters />);

    const input = screen.getByPlaceholderText(
      /Search pokemon by name or id/i
    ) as HTMLInputElement;
    await userEvent.type(input, "Pikachu");
    expect(input.value).toBe("Pikachu");
  });

  it("should submit search query and redirects", async () => {
    const replaceMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: replaceMock });

    render(<PokemonFilters />);
    const input = screen.getByPlaceholderText(
      /Search pokemon by name or id/i
    ) as HTMLInputElement;
    const button = screen.getByText(/Search/i);

    await userEvent.type(input, "bulbasaur");
    fireEvent.click(button);

    expect(replaceMock).toHaveBeenCalledWith("/pokemon/bulbasaur");
    expect(replaceMock).toHaveBeenCalledTimes(1);
  });

  it("does not redirect with empty search query", () => {
    const replaceMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: replaceMock });

    render(<PokemonFilters />);
    const button = screen.getByText(/Search/i);

    fireEvent.click(button);

    expect(replaceMock).not.toHaveBeenCalled();
    expect(replaceMock).toHaveBeenCalledTimes(0);
  });
});
