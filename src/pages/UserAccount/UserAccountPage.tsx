import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_NOT_AVAILABLE } from "../../data/constants";
import { useLogout } from "../../hooks/useLogout";
import { UserAccountReview } from "./UserAccountReview/UserAccountReview";
import { Feedback } from "../../components/Feedback/Feedback";
import { useUserProfile } from "../../hooks/useUserProfile";
import { useAppSelector } from "../../app/hooks";

/**
 * UserAccountPage component that renders the user's account page.
 *
 * @component
 * @returns {JSX.Element | null} The UserAccountPage component, which provides an interface
 * for a user to review and update their account details, or redirects to a not available route if no user is authenticated.
 */

export type UserAccountFormType = {
  first_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;
  password?: string;
};

export const UserAccountPage = () => {
  const { token } = useLogout();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!token && !user) {
      navigate(ROUTE_NOT_AVAILABLE, { replace: true });
    }
  }, [user, navigate, token]);

  const {
    formData,
    setFormData,
    handleOnSubmit,
    handleFileChange,
    isUserUpdated,
    handleOnCancel,
    isLoading,
  } = useUserProfile(token, user);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <UserAccountReview
        handleFileChange={handleFileChange}
        formData={formData}
        setFormData={setFormData}
        handleOnSubmit={handleOnSubmit}
        isUserUpdated={isUserUpdated}
        handleOnCancel={handleOnCancel}
      />
      <Feedback />
    </>
  );
};
