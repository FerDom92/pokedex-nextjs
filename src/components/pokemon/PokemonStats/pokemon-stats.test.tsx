import { mockStats } from "@/__mocks__/stats.mock";
import { render, screen } from "@testing-library/react";
import { PokemonStats } from ".";

describe("<PokemonStats />", () => {
  it("should render PokemonStats component", () => {
    render(<PokemonStats stats={mockStats} />);

    expect(screen.getByText("HP")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("Attack")).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();
  });

  it("should update correctly when stats change", () => {
    const { rerender } = render(<PokemonStats stats={mockStats} />);

    expect(screen.getByText("HP")).toBeInTheDocument();
    expect(screen.getByText("Attack")).toBeInTheDocument();

    const newStats = [
      { name: "Defense", value: 70 },
      { name: "Speed", value: 80 },
    ];

    rerender(<PokemonStats stats={newStats} />);

    expect(screen.getByText("Defense")).toBeInTheDocument();
    expect(screen.getByText("Speed")).toBeInTheDocument();
  });
});
