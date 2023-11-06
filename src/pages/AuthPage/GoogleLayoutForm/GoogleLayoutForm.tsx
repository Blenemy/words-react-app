import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { GlobalLoader } from "../../../components/Loaders/GlobalLoader";
import { useGoogleAuthentification } from "../../../hooks/useGoogleAuthentification";

/**
 * Компонент для рендеринга макета аутентификации через Google, включая кнопку для входа через Google и дополнительную информацию.
 *
 * @component
 * @param {GoogleLayoutFormProps} props - Пропсы для формы макета Google
 * @param {string} props.route - Путь маршрутизации для навигации
 * @param {string} props.message - Сообщение, отображаемое рядом со ссылкой навигации
 * @param {string} props.link - Текст для ссылки навигации
 * @returns {React.ReactElement} Компонент формы макета аутентификации Google
 */

type GoogleLayoutFormProps = {
  route: string;
  message: string;
  link: string;
};

export const GoogleLayoutForm: React.FC<GoogleLayoutFormProps> = ({
  route,
  message,
  link,
}) => {
  const { isLoading, mutate } = useGoogleAuthentification();

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-violetStroke relative before:w-[153px] before:content-[''] before:h-[1px] before:bg-violetStroke before:absolute before:top-[13px] before:left-[-157px] after:top-[13px] after:left-[113px] right-0 after:content-[''] after:h-[1px] after:bg-violetStroke after:absolute after:w-[153px]">
        Or sign up with
      </p>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            mutate(credentialResponse.credential);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          type="icon"
        />
      </GoogleOAuthProvider>
      <div className="flex gap-1 underline">
        <p>{message}</p>
        <Link className="text-violetStroke" to={route}>
          {link}
        </Link>
      </div>
    </div>
  );
};
