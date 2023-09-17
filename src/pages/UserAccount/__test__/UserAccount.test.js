import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HashRouter } from "react-router-dom";
import { UserAccountForm } from "../UserAccountForm";

const mockFormData = {
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  password: "password123",
};

const mockSetFormData = jest.fn();
const mockHandleOnSubmit = jest.fn();
const mockHandleOnCancel = jest.fn();

it("should use form tag", () => {
  render(
    <HashRouter>
      <UserAccountForm
        formData={mockFormData}
        setFormData={mockSetFormData}
        handleOnSubmit={mockHandleOnSubmit}
        handleOnCancel={mockHandleOnCancel}
      />
    </HashRouter>
  );

  const formElement = screen.getByTestId("form");
  expect(formElement).toBeInTheDocument();
});

it("should have buttons for submit and cancel", () => {
  render(
    <HashRouter>
      <UserAccountForm
        formData={mockFormData}
        setFormData={mockSetFormData}
        handleOnSubmit={mockHandleOnSubmit}
        handleOnCancel={mockHandleOnCancel}
      />
    </HashRouter>
  );

  const submitButton = screen.getByRole("button", { name: /save/i });
  const cancelButton = screen.getByRole("button", { name: /cancel/i });
  expect(submitButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});

it("should update data on submitting", () => {
  render(
    <HashRouter>
      <UserAccountForm
        formData={mockFormData}
        setFormData={mockSetFormData}
        handleOnSubmit={mockHandleOnSubmit}
        handleOnCancel={mockHandleOnCancel}
      />
    </HashRouter>
  );

  const submitButton = screen.getByRole("button", { name: /save/i });
  const firstInput = screen.getByPlaceholderText("First Name");
  fireEvent.change(firstInput, { target: { value: "Clown" } });
  fireEvent.click(submitButton);

  expect(mockSetFormData).toHaveBeenCalled();
  expect(mockHandleOnSubmit).toHaveBeenCalled();
});

it("should reset changes on clicking the cancel button", () => {
  render(
    <HashRouter>
      <UserAccountForm
        formData={mockFormData}
        setFormData={mockSetFormData}
        handleOnSubmit={mockHandleOnSubmit}
        handleOnCancel={mockHandleOnCancel}
      />
    </HashRouter>
  );

  const calceButton = screen.getByRole("button", { name: /cancel/i });
  const firstInput = screen.getByPlaceholderText("First Name");
  const originalValue = firstInput.value;
  fireEvent.change(firstInput, { target: { value: "Kate" } });
  fireEvent.click(calceButton);

  expect(mockSetFormData).toHaveBeenCalled();
  expect(mockHandleOnCancel).toHaveBeenCalled();
  expect(firstInput.value).toBe(originalValue);
});
