import { render, screen } from "@testing-library/react";
import { ArrowLeftIcon, ArrowRightIcon, NotFoundIcon } from "./";

describe("<Icons />", () => {
  it("should render icons", () => {
    render(<ArrowLeftIcon />);
    render(<ArrowRightIcon />);
    render(<NotFoundIcon />);

    const iconLeft = screen.getByTestId("arrow-left-icon");
    const iconRight = screen.getByTestId("arrow-right-icon");
    const iconNotFound = screen.getByTestId("not-found-icon");

    expect(iconLeft).toBeInTheDocument();
    expect(iconRight).toBeInTheDocument();
    expect(iconNotFound).toBeInTheDocument();
  });
});
