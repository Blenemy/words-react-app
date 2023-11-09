import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import Cookies from "js-cookie";
import { setUser } from "../features/userSlice";
import { ROUTE_AUTHORIZATION } from "../constants/routes";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const handleLogOut = () => {
    Cookies.remove("token");
    dispatch(setUser(null));
    navigate(ROUTE_AUTHORIZATION);
  };

  return { token, handleLogOut };
};
