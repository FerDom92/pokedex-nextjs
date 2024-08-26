import { fireEvent, render, screen } from "@testing-library/react";
import { ChangeTheme } from ".";

describe("<ChangeTheme />", () => {
  const mockToggleTheme = jest.fn();

  it("should render ChangeTheme component with correct props", () => {
    render(<ChangeTheme theme="light" toggleTheme={mockToggleTheme} />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("should icon be checked", () => {
    render(<ChangeTheme theme="dracula" toggleTheme={mockToggleTheme} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("should call toggleTheme function when icon is clicked", () => {
    render(<ChangeTheme theme="light" toggleTheme={mockToggleTheme} />);

    const label = screen.getByRole("checkbox");
    fireEvent.click(label);

    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
