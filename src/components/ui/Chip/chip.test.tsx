import { render, screen } from "@testing-library/react";
import { Chip } from ".";

describe("<Chip />", () => {
  it("should render <Chip /> with props", () => {
    render(<Chip name="value" />);

    const el = screen.getByText("value");

    expect(el).toBeInTheDocument();
  });
});
