import { render, screen } from "@testing-library/react";
import { SkeletonCard } from ".";

describe("<SkeletonCard />", () => {
  it("Should render <SkeletonCard />", () => {
    render(<SkeletonCard />);

    const el = screen.getByTestId("skeleton-card");

    expect(el).toBeInTheDocument();
  });
});
