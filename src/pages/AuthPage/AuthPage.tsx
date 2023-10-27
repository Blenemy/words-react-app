import { AuthLayout } from "./AuthLayout/AuthLayout";
import { GoogleLayoutForm } from "./GoogleLayoutForm/GoogleLayoutForm";

interface AuthPageProps {
  FormComponent: React.ComponentType<any>;
  googleMessage: string;
  route: string;
  link: string;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  FormComponent,
  googleMessage,
  route,
  link,
}) => {
  return (
    <AuthLayout>
      <div>
        <FormComponent />
        <GoogleLayoutForm message={googleMessage} route={route} link={link} />
      </div>
    </AuthLayout>
  );
};
