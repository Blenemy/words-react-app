import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FlipCard } from "../FlipCard";

it("should render a card", () => {
  render(<FlipCard />);

  const cardElement = screen.getByTestId("flip-card");
  expect(cardElement).toBeInTheDocument();
});

it("should flip a card on click", () => {
  render(<FlipCard />);

  const headerElement = screen.getByTestId("flip-card");
  const backSide = screen.getByTestId("back-side");
  fireEvent.click(headerElement);
  expect(backSide).toHaveClass("active-back");
});
