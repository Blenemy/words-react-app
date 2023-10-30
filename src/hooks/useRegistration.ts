import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BASE_URL } from "../data/constants";
import { UserData } from "../types/UserData";
import { useState } from "react";

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
    validationSchema: Yup.object({
      username: Yup.string()
        .required("required field")
        .min(4, "Username must be at least 4 characters"),
      email: Yup.string()
        .test("domain", "Корабель там 🖕", (value) => {
          return !value?.endsWith(".ru") && !value?.endsWith(".by");
        })
        .matches(
          /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "enter valid email"
        )
        .required("required field"),
      password: Yup.string()
        .required("required field")
        .min(4, "Password must be at least 4 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null as any], "Passwords don't match")
        .required("required field"),
    }),
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
