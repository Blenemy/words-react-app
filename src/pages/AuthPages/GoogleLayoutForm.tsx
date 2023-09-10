import { Link } from "react-router-dom"
import { GoogleOAuthProvider, GoogleLogin  } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

type Props = {
  route: string,
  message: string,
  link: string,
}

const clientID = '703320406780-1mk3ggp07s153psc8dddaoq95vhkqsin.apps.googleusercontent.com';

export const GoogleLayoutForm: React.FC<Props> = ({ route, message, link }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-violetStroke relative before:w-[153px] before:content-[''] before:h-[1px] before:bg-violetStroke before:absolute before:top-[13px] before:left-[-157px] after:top-[13px] after:left-[113px] right-0 after:content-[''] after:h-[1px] after:bg-violetStroke after:absolute after:w-[153px]">Or sign up with</p>
      {/* <div>
        <img src={google} alt="" />
      </div> */}
      <GoogleOAuthProvider clientId={clientID}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            const userData = jwt_decode(credentialResponse.credential!);
            console.log(userData);
            console.log(credentialResponse);
          }}
          onError={() => {
          console.log('Login Failed');
        }}
        />
      </GoogleOAuthProvider>
      <div className="flex gap-1 underline">
        <p>{message}</p>
        <Link className="text-violetStroke" to={route}>{link}</Link>
      </div>
    </div>
  )
}