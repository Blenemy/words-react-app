import { AuthLayout } from "./AuthLayout/AuthLayout";
import { GoogleLayoutForm } from "./GoogleLayoutForm/GoogleLayoutForm";

/**
 * AuthPage component for rendering an authentication page.
 *
 * @param {AuthPageProps} props - The component's props.
 * @param {React.ComponentType<any>} props.FormComponent - The form component to render.
 * @param {string} props.googleMessage - The message for the Google layout form.
 * @param {string} props.route - The route for the Google layout form.
 * @param {string} props.link - The link for the Google layout form.
 * @returns {React.ReactElement} The rendered authentication page component.
 */

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
}): React.ReactElement => {
  return (
    <AuthLayout>
      <FormComponent />
      <GoogleLayoutForm message={googleMessage} route={route} link={link} />
    </AuthLayout>
  );
};
