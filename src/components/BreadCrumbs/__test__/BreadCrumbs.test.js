import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HashRouter } from "react-router-dom";
import { BreadCrumbs } from "../Breadcrumbs";
import { ROUTE_HOME } from "../../../constants/routes";

it("should contain a link", () => {
  render(
    <HashRouter>
      <BreadCrumbs route="" title="" />
    </HashRouter>
  );

  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
});

it("should navigate to a proper link", () => {
  render(
    <HashRouter>
      <BreadCrumbs route={ROUTE_HOME} text="" />
    </HashRouter>
  );

  const linkElement = screen.getByRole("link");
  expect(linkElement).toHaveAttribute("href", `#${ROUTE_HOME}`);
});

it("should render the passed text", () => {
  render(
    <HashRouter>
      <BreadCrumbs route="" text="Go Home" />
    </HashRouter>
  );

  const spanElement = screen.getByTestId("BreadCrumbsSpan");
  expect(spanElement).toHaveTextContent("Go Home");
});
