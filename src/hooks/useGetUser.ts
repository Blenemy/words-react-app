import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/getUser";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../features/userSlice";
import Cookies from "js-cookie";

export const useGetUser = () => {
  const token = Cookies.get("token");
  const dispatch = useAppDispatch();

  useQuery({
    queryFn: () => getUser(token),
    queryKey: ["user"],
    onSuccess: (payload) => {
      dispatch(setUser(payload));
    },
    enabled: !!token,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
    refetchOnWindowFocus: false,
  });

  return null;
};
