import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { ROUTE_HOME } from "../../data/constants";
import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../../features/userSlice";
import { useMutation } from "@tanstack/react-query";
import { getGoogleAuthCredentials } from "../../api/getGoogleAuthCredentials";

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const googleAuthMutation = useMutation({
    mutationFn: (googleCredential: string | undefined) =>
      getGoogleAuthCredentials(googleCredential),
    onSuccess: (data) => {
      dispatch(setUser(data));
      navigate(ROUTE_HOME);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-violetStroke relative before:w-[153px] before:content-[''] before:h-[1px] before:bg-violetStroke before:absolute before:top-[13px] before:left-[-157px] after:top-[13px] after:left-[113px] right-0 after:content-[''] after:h-[1px] after:bg-violetStroke after:absolute after:w-[153px]">
        Or sign up with
      </p>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            googleAuthMutation.mutate(credentialResponse.credential);
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
