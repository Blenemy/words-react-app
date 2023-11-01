import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";
import { BASE_URL } from "../data/constants";
import { UserData } from "../types/UserData";
import { useState } from "react";
import { registrationSchema } from "../validationSchemas/registrationSchema";

type ServerError = {
  email: string[];
};

export const useRegistration = () => {
  const [showAlert, setShowAlert] = useState(false);

  const registerUser = (data: UserData) =>
    axios.post(BASE_URL + "/user/register/", data);

  const { isLoading, mutate, error } = useMutation<
    any,
    AxiosError<ServerError>,
    UserData
  >(registerUser, {
    onSuccess: () => {
      setShowAlert(true);
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return { formik, showAlert, isLoading, error };
};
