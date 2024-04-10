/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "./../src/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: 'Welcome to the Largest Sports Platform in the World!',
    });

    expect(heading).toBeInTheDocument();
  });
});
