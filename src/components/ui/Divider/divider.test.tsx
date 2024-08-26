import { render, screen } from "@testing-library/react";
import { Divider } from ".";

describe("<Divider />", () => {
  it("Should render <Divider />", () => {
    render(<Divider />);

    const el = screen.getByTestId("divider");

    expect(el).toBeInTheDocument();
  });
});
