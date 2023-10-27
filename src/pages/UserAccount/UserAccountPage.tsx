import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_AUTHORIZATION } from "../../data/constants";
import { useLogout } from "../../hooks/useLogout";
import { UserAccountReview } from "./UserAccountReview/UserAccountReview";
import { Feedback } from "../../components/Feedback/Feedback";

export type UserAccountFormType = {
  first_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;
  password?: string;
};

export const UserAccountPage = () => {
  const { token } = useLogout();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate(ROUTE_AUTHORIZATION, { state: { from: location.pathname } });
    }
  }, [navigate, token, location.pathname]);

  return (
    <>
      <UserAccountReview />
      <Feedback />
    </>
  );
};
