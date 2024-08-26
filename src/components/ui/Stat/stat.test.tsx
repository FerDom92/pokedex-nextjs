import { mockStat } from "@/__mocks__/stat.mock";
import { render, screen } from "@testing-library/react";
import { Stat } from ".";

describe("<Stat />", () => {
  it("Should render <Stat /> component", () => {
    render(<Stat name={mockStat.name} value={mockStat.value} />);
  });

  it("Should render <Stat /> component and show the name of the stat", () => {
    render(<Stat name={mockStat.name} value={mockStat.value} />);

    const statName = screen.getByText(mockStat.name);

    expect(statName).toBeInTheDocument();
  });
});
