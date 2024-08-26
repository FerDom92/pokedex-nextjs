import { render, screen } from "@testing-library/react";
import { Spinner } from ".";

describe("<Spinner />", () => {
  it("should render <Spinner /> component", () => {
    render(<Spinner />);

    const el = screen.getByTestId("spinner");

    expect(el).toBeInTheDocument();
  });

  it("should render <Spinner /> and show Loading... text", () => {
    render(<Spinner />);

    const text = screen.getByText(/Loading.../i);

    expect(text).toBeInTheDocument();
  });
});
