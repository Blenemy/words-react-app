import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_NOT_AVAILABLE } from "../../data/constants";
import { useLogout } from "../../hooks/useLogout";
import { UserAccountReview } from "./UserAccountReview/UserAccountReview";
import { Feedback } from "../../components/Feedback/Feedback";
import { useUserProfile } from "../../hooks/useUserProfile";
import { useAppSelector } from "../../app/hooks";

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
    if (!user) {
      navigate(ROUTE_NOT_AVAILABLE, { replace: true });
    }
  }, [user, navigate]);

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
