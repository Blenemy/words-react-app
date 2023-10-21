import Cookies from "js-cookie";
import { useAppDispatch } from "../../app/hooks";
import "./Header.scss";
import { HeaderLeftPiece } from "./HeaderLeftPiece";
import { HeaderRightPiece } from "./HeaderRightPiece";
import { useQuery } from "@tanstack/react-query";
import { setUser } from "../../features/userSlice";
import { getUser } from "../../api/getUser";
import { Loader } from "../Loader/Loader";

export const Header = () => {
  const dispatch = useAppDispatch();

  const token = Cookies.get("token");
  const { isLoading } = useQuery({
    queryFn: () => getUser(token),
    queryKey: ["user"],
    onSuccess: (payload) => {
      dispatch(setUser(payload));
    },
    enabled: !!token,
  });

  return (
    <header id="header" className="header font-semibold">
      <div className="container mx-auto my-0">
        <div className="header__content flex items-center justify-between h-[71px]">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <HeaderLeftPiece />
              <HeaderRightPiece />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
