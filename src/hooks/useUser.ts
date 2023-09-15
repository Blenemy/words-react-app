import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Cookies from "js-cookie";
import { setUser } from "../features/userSlice";
import { ROUTE_AUTHORIZATION } from "../data/constants";

export const useUser = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const handleLogOut = () => {
    Cookies.remove("token");
    dispatch(setUser(null));
    navigate(ROUTE_AUTHORIZATION);
  };

  return { user, token, handleLogOut };
};
