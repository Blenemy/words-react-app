import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { BASE_URL, ROUTE_HOME } from "../../data/constants";
import Cookies from "js-cookie";
import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../../features/userSlice";

type Props = {
  route: string;
  message: string;
  link: string;
};

export const GoogleLayoutForm: React.FC<Props> = ({ route, message, link }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getGoogleAuthCredential = async (
    googleCrenedtial: string | undefined
  ) => {
    try {
      const dataToSend = {
        token: googleCrenedtial,
      };
      const authResponse = await axios.post(
        BASE_URL + "/user/google_auth/",
        dataToSend
      );
      Cookies.set("token", authResponse.data.token, { expires: 1 });

      const userResponse = await axios.get(BASE_URL + "/user/profile/", {
        headers: {
          Authorization: `Bearer ${authResponse.data.token}`,
        },
      });
      dispatch(setUser(userResponse.data));
      navigate(ROUTE_HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-violetStroke relative before:w-[153px] before:content-[''] before:h-[1px] before:bg-violetStroke before:absolute before:top-[13px] before:left-[-157px] after:top-[13px] after:left-[113px] right-0 after:content-[''] after:h-[1px] after:bg-violetStroke after:absolute after:w-[153px]">
        Or sign up with
      </p>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            getGoogleAuthCredential(credentialResponse.credential);
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
