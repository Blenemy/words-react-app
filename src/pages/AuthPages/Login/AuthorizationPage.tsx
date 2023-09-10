// import { useAppSelector } from '../../../app/hooks';
import { ROUTE_REGISTRATION } from "../../../data/constants";
import { AuthLayout } from "../AuthLayout";
import { AuthorizationForm } from "./AuthorizationForm";
import { GoogleLayoutForm } from "../GoogleLayoutForm";

export const Authorization = () => {
	// const { user } = useAppSelector(state => state.user);
  return (
   <AuthLayout>
		<div>
			<AuthorizationForm />
			<GoogleLayoutForm message="Don`t have an account?" route={ROUTE_REGISTRATION} link='Create account'/>
		</div>
	 </AuthLayout>
  )
}
