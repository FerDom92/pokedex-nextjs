import { fireEvent, render, screen } from "@testing-library/react";
import { Paginator } from ".";

describe("<Paginator />", () => {
  const setCurrentPage = jest.fn();

  it("should render correctly with initial props", () => {
    render(<Paginator page={1} setCurrentPage={setCurrentPage} />);
    expect(screen.getByText("1")).toHaveClass("btn-active");
    expect(screen.queryByText("...")).not.toBeInTheDocument();
  });

  it("should render back 5 pages button and '...' when page > 5", () => {
    render(<Paginator page={6} setCurrentPage={setCurrentPage} />);
    expect(screen.getByText("1")).toBeInTheDocument();

    const elements = screen.getAllByText("...") as HTMLButtonElement[];

    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
      expect(element.innerHTML).toBe("...");
    });
  });

  it("should not render button to back 5 pages when page <= 5", () => {
    render(<Paginator page={3} setCurrentPage={setCurrentPage} />);
    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("...")).not.toBeInTheDocument();
  });

  it("should call setCurrentPage with correct value when buttons are clicked", () => {
    render(<Paginator page={6} setCurrentPage={setCurrentPage} />);

    fireEvent.click(screen.getByText("5"));
    expect(setCurrentPage).toHaveBeenCalledWith(5);

    fireEvent.click(screen.getByText("7"));
    expect(setCurrentPage).toHaveBeenCalledWith(7);

    fireEvent.click(screen.getByText("11"));
    expect(setCurrentPage).toHaveBeenCalledWith(11);
  });
});
