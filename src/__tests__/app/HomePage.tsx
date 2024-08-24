import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("Home Page", () => {
  it("should render home page", () => {
    render(<HomePage />);
    expect(screen.getByText("src/app/page.tsx")).toBeInTheDocument();
  });

  it("should render Docs in home page", () => {
    render(<HomePage />);
    expect(screen.getByText("Docs")).toBeInTheDocument();
  });
});
