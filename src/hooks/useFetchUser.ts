import { useState, useEffect } from "react";
import { getUser } from "../api/getUser";
import Cookies from "js-cookie";
import { setUser } from "../features/userSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export const useFetchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const token = Cookies.get("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      return;
    }

    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const userData = await getUser(token);
        dispatch(setUser(userData));
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchUser();
  }, [token, dispatch, user]);

  return { isLoading };
};
