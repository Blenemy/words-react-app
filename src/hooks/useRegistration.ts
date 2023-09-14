import { useState } from "react";
import axios from "axios";
import { BASE_URL, ROUTE_HOME } from "../data/constants";
import { useNavigate } from "react-router-dom";
import { UserData } from "../types/UserData";
import { useMutation } from "@tanstack/react-query";

type FieldsErrors = {
  username?: string;
  email?: string;
  password?: string;
  message?: string;
};

export const useRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldsErrors>({});

  const registerUser = (data: UserData) =>
    axios.post(BASE_URL + "/user/register/", data);

  const mutation = useMutation(registerUser, {
    onSuccess: () => {
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate(ROUTE_HOME);
    },
    onError: (error: any) => {
      const emailError = error.response.data.email[0];
      setFieldErrors((prev) => ({
        ...prev,
        email: emailError,
        message: emailError,
      }));
    },
  });

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFieldErrors({
      username: "",
      email: "",
      password: "",
    });
    let errors: FieldsErrors = {};

    if (formData.password !== formData.confirmPassword) {
      errors.password = "Passwords don't match";
      errors.message = "Passwords don't match";
    }

    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValidEmail = emailPattern.test(formData.email!);

    if (!isValidEmail) {
      errors.email = "Please enter a valid email";
      errors.message = "Please enter a valid email";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const dataToSend = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    mutation.mutate(dataToSend);
  };

  return { handleOnSubmit, formData, setFormData, fieldErrors };
};
