/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("displays a nice hero section", () => {
  render(<Page />);
  expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("Welcome to the Largest Sports Platform in the World!");
});
