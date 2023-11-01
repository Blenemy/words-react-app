import { useAppDispatch } from "../app/hooks";
import Cookies from "js-cookie";
import { setUser } from "../features/userSlice";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/loginUser";
import { getUser } from "../api/getUser";
import { useFormik } from "formik";
import { authentificationSchema } from "../validationSchemas/authentificationSchema";
import { AxiosError } from "axios";

type LoginInput = {
  username: string;
  password: string;
};

type LoginOutput = {
  token: string;
};

type ServerError = {
  error: string[];
};

export const useAuth = () => {
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useAppDispatch();

  const { isLoading, mutate, error } = useMutation<
    LoginOutput,
    AxiosError<ServerError>,
    LoginInput
  >(loginUser, {
    onSuccess: async ({ token }) => {
      Cookies.set("token", token, { expires: 1 });
      const userData = await getUser(token);
      dispatch(setUser(userData));
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: authentificationSchema,
    onSubmit: (values, { resetForm }) => {
      mutate(values, {
        onSuccess: () => {
          resetForm();
          setShowAlert(true);
        },
      });
    },
  });

  return { isLoading, formik, showAlert, error };
};
