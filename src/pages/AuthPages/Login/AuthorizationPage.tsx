import { ROUTE_REGISTRATION } from "../../../data/constants";
import { AuthLayout } from "../AuthLayout/AuthLayout";
import { AuthorizationForm } from "./AuthorizationForm";
import { GoogleLayoutForm } from "../GoogleLayoutForm";

export const Authorization = () => {
  return (
    <AuthLayout>
      <div>
        <AuthorizationForm />
        <GoogleLayoutForm
          message="Don`t have an account?"
          route={ROUTE_REGISTRATION}
          link="Create the account"
        />
      </div>
    </AuthLayout>
  );
};
