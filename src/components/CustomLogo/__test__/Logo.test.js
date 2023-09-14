import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Logo } from "../Logo";
import logoImage from "../../../images/cardLingo.png";

it("should have an image", () => {
  render(<Logo image={logoImage} />);

  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
});

it("should have an alt attribute", () => {
  render(<Logo image={logoImage} />);

  const imageElement = screen.getByRole("img");
  expect(imageElement).toHaveAttribute("alt");
  expect(imageElement.getAttribute("alt")).not.toHaveLength(0);
});

it("should render a proper image", () => {
  render(<Logo image={logoImage} />);

  const imageElement = screen.getByRole("img");
  expect(imageElement).toHaveAttribute("src", logoImage);
});
