import { useState, useEffect } from "react";
import { getUser } from "../api/getUser";
import Cookies from "js-cookie";
import { setUser } from "../features/userSlice";
import { useAppDispatch } from "../app/hooks";

export const useFetchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const token = Cookies.get("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        return;
      }

      setIsLoading(true);
      try {
        const userData = await getUser(token);
        dispatch(setUser(userData));
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    };

    fetchUser();
  }, [token, dispatch]);

  return { isLoading };
};
