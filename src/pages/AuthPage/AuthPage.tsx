import { AuthLayout } from "./AuthLayout/AuthLayout";
import { GoogleLayoutForm } from "./GoogleLayoutForm/GoogleLayoutForm";

/**
 * Компонент AuthPage для отрисовки страницы аутентификации.
 *
 * @param {AuthPageProps} props - Пропсы компонента.
 * @param {React.ComponentType<any>} props.FormComponent - Компонент формы для рендера.
 * @param {string} props.googleMessage - Сообщение для формы аутентификации через Google.
 * @param {string} props.route - Маршрут для формы аутентификации через Google.
 * @param {string} props.link - Ссылка для формы аутентификации через Google.
 * @returns {React.ReactElement} Отрендеренный компонент страницы аутентификации.
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
