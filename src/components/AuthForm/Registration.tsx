import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './AuthForm.css';
import { UserData } from '../../types/UserData';
import { CustomInput } from '../CustomInput/CustomInput';
import { ROUTE_AUTHORIZATION, ROUTE_HOME } from '../../constants/constants';

export const Registration = () => {
	const [formData, setFormData] = useState<UserData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
	});

	const handleInputChange = (event: any) => {
		const { name, value } = event.target;
		setFormData(prevData => ({
				...prevData,
				[name]: value
		}));
	};

	const handleOnSubmit = async (event: any) => {
		event?.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			return;
		}

		const dataToSend = {
			username: formData.username,
			password: formData.password,
			email: formData.email,
	};

		try {
			const response = await axios.post('http://159.65.119.170:8000/user/register/', dataToSend);
			setFormData({
					username: '',
					email: '',
					password: '',
					confirmPassword: ''
			});
			console.log(response);
			
		} catch (error) {
				console.error('Error:', error);
		}
	}

  return (
		<section className="flex bg-customBg justify-center items-center h-full">
			<div className="auth relative w-96 h-[580px] bg-blue-950 rounded-lg overflow-hidden ">
				<form 
					className="auth__form absolute inset-1 px-10 py-12 rounded-lg z-[2] flex flex-col bg-[#010615]"
					onSubmit={handleOnSubmit}
				>
					<h2 className="auth__title text-white font-medium text-center tracking-wide text-3xl mb-5">Sign up</h2>
					<div className="auth__input-box relative w-[300px] mb-4">
						<CustomInput
							placeholder='Username'
							isRequired={true}
							name={'username'}
							type={'text'}
							className='auth__input'
							value={formData.username}
							onChange={handleInputChange}
							autocomplete={'off'}
						/>
					</div>
					<div className="auth__input-box relative w-[300px] mb-4">
						<CustomInput
							placeholder='Email'
							isRequired={true}
							name={'email'}
							type={'email'}
							className='auth__input'
							value={formData.email}
							onChange={handleInputChange}
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
							onChange={handleInputChange}
						/>
					</div>
					<div className="auth__input-box relative w-[300px] mb-4">
						<CustomInput
							placeholder='Confirim password'
							isRequired={true}
							name={'confirmPassword'}
							type={'password'}
							className='auth__input'
							value={formData.confirmPassword}
							onChange={handleInputChange}
						/>
					</div>
					<div className="auth__footer mt-auto">
						<div className="auth__links flex justify-between items-center mb-5">
							<Link to={ROUTE_HOME} className="auth__link">Forgot Password?</Link>
							<Link to={ROUTE_AUTHORIZATION} className="auth__link">Login to your Account</Link>
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
		</section>
  )
}