import { Link } from "react-router-dom"
import { ROUTE_HOME, ROUTE_REGISTRATION } from '../../../data/constants';
import { useAppSelector } from '../../../app/hooks';
import { CustomInput } from '../../../components/CustomInput/CustomInput';
import { handleInputChange } from '../../../utils/helpers';
import { useAuth } from '../../../hooks/useAuth';

export const Authorization = () => {
	const { user } = useAppSelector(state => state.user);
	const { formData, setFormData, handleOnSubmit, error } = useAuth();

  return (
    <section className="flex bg-customBg justify-center items-center min-h-screen">
			{user ? (
				<div>You are already singed in. Quit your previous account first</div>
			) : (
				<div className="auth relative w-96 h-[580px] bg-blue-950 rounded-lg overflow-hidden ">
					<form 
						className="auth__form absolute inset-1 px-10 py-12 rounded-lg z-[2] flex flex-col bg-[#010615]"
						onSubmit={handleOnSubmit}
					>
						<h2 className="auth__title text-white font-medium text-center tracking-wide text-3xl mb-5">Login to your Account</h2>
						{error && (
							<p className="text-[12px] text-red-500">{error}</p>
						)}
						<div className="auth__input-box relative w-[300px] mb-4">
							<CustomInput
								placeholder='Username'
								isRequired={true}
								name={'username'}
								type={'text'}
								className='auth__input'
								value={formData.username}
								onChange={(event) => handleInputChange(event, setFormData)}
								autocomplete={'off'}
							/>
						</div>
						<div className="auth__input-box relative w-[300px] mb-4">
							<CustomInput
								placeholder='Password'
								isRequired={true}
								name={'password'}
								type={'password'}
								className='auth__input'
								value={formData.password}
								onChange={(event) => handleInputChange(event, setFormData)}
							/>
						</div>
						<div className="auth__footer mt-auto">
							<div className="auth__links flex justify-between items-center mb-5">
								<Link to={ROUTE_HOME} className="auth__link">Forgot Password?</Link>
								<Link to={ROUTE_REGISTRATION} className="auth__link">Create an account</Link>
							</div>
						<button 
							type="submit" 
							className="auth__button border-none outline-none py-2 px-6 bg-white w-full
							text-black cursor-pointer rounded-md font-semibold active:opacity-80"
						>
							Login
						</button>
					</div>
				</form>
			</div>
			)}

		</section>
  )
}