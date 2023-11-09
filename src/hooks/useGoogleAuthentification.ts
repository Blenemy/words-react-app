import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { useMutation } from "@tanstack/react-query";
import { setUser } from "../features/userSlice";
import { ROUTE_HOME } from "../constants/routes";
import { getGoogleAuthCredentials } from "../api/getGoogleAuthCredentials";

export const useGoogleAuthentification = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate, isLoading } = useMutation({
    mutationFn: getGoogleAuthCredentials,
    onSuccess: (data) => {
      dispatch(setUser(data));
      navigate(ROUTE_HOME);
    },
  });

  return { mutate, isLoading };
};
