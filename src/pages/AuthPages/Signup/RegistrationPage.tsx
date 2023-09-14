import { ROUTE_AUTHORIZATION } from "../../../data/constants";
import { AuthLayout } from "../AuthLayout/AuthLayout";
import { GoogleLayoutForm } from "../GoogleLayoutForm";
import { RegistrationForm } from "./RegistrationForm";

export const Registration = () => {
  return (
    <AuthLayout>
      <div>
        <RegistrationForm />
        <GoogleLayoutForm
          message="Already Have an account?"
          route={ROUTE_AUTHORIZATION}
          link="Sign in"
        />
      </div>
    </AuthLayout>
  );
};
