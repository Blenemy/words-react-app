import { useAppDispatch } from "../app/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ROUTE_HOME } from "../data/constants";
import { setUser } from "../features/userSlice";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../api/loginUser";
import { getUser } from "../api/getUser";

export const useAuth = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: async ({ token }) => {
      Cookies.set("token", token, { expires: 1 });
      const userData = await queryClient.fetchQuery(
        ["userProfile", token],
        () => getUser(token)
      );
      dispatch(setUser(userData));
      setFormData({ username: "", password: "" });
      setError(null);
      const { from } = location.state || { from: { pathname: ROUTE_HOME } };
      navigate(from);
    },
    onError: (error: any) => {
      if (error.response) {
        setError(error.response.data.error);
      }
    },
  });

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const { username, password } = formData;
    mutate({ username, password });
  };

  return { handleOnSubmit, formData, setFormData, error, isLoading };
};
