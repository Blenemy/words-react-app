import { render, screen } from "@testing-library/react";
import userDefault from "../../../assets/user-acc.svg";
import "@testing-library/jest-dom/extend-expect";
import { HashRouter } from "react-router-dom";
import { UserAvatar } from "../UserAvatar";

it("should contain an alt attribute", () => {
  render(
    <HashRouter>
      <UserAvatar userAvatar={""} />
    </HashRouter>
  );

  const imageElement = screen.getByRole("img");
  expect(imageElement).toHaveAttribute("alt");
  expect(imageElement.getAttribute("alt")).not.toHaveLength(0);
});

it("should render default image if user image does not exist", () => {
  render(
    <HashRouter>
      <UserAvatar userAvatar={""} />
    </HashRouter>
  );

  const imageElement = screen.getByRole("img");
  expect(imageElement).toHaveAttribute("src", userDefault);
});

it("should render user image if it does exist", () => {
  render(
    <HashRouter>
      <UserAvatar userAvatar={"somestring"} />
    </HashRouter>
  );

  const imageElement = screen.getByRole("img");
  expect(imageElement).toHaveAttribute("src", "somestring");
});
