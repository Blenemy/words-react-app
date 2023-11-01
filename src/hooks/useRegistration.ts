import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import { BASE_URL } from "../data/constants";
import { UserData } from "../types/UserData";
import { useState } from "react";
import { registrationSchema } from "../validationSchemas/registrationSchema";

export const useRegistration = () => {
  const [showAlert, setShowAlert] = useState(false);

  const registerUser = (data: UserData) =>
    axios.post(BASE_URL + "/user/register/", data);

  const { isLoading, mutate } = useMutation({
    mutationFn: registerUser,
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registrationSchema,
    onSubmit: (values, { resetForm }) => {
      mutate(values, {
        onSuccess: () => {
          resetForm();
          setShowAlert(true);
        },
      });
    },
  });

  return { formik, showAlert, isLoading };
};
