import { Link } from "react-router-dom";
import '../AuthForm.scss';
import { CustomInput } from '../../../components/CustomInput/CustomInput';
import { ROUTE_AUTHORIZATION, ROUTE_HOME } from '../../../data/constants';
import { handleInputChange } from '../../../utils/helpers';
import { useRegistration } from '../../../hooks/useRegistration';
import image1 from '../../../images/createAccountImage1.png';
import image2 from '../../../images/createAccountImage2.png';
import image3 from '../../../images/createAccountImage3.png';
import image4 from '../../../images/createAccountImage4.png';
import image5 from '../../../images/createAccountImage5.png';
import image6 from '../../../images/createAccountImage6.png';
import google from '../../../images/googleSvg.svg';

export const Registration = () => {
	const { formData, setFormData, handleOnSubmit, error } = useRegistration();

  return (
		<section className="text-primary py-6">
			<div className="container">
				<div className="px-10">
					<div className="flex gap-4">
						<div className="basis-1/2 flex flex-col">
							<div className="angry-grid mb-5">
								<div id="item-0" className="">
									<img src={image1} alt="" className="rounded-3xl h-full w-full" />
								</div>
								<div id="item-1">
									<img src={image2} alt="" className="rounded-3xl h-full w-full" />
								</div>
								<div id="item-2" className="h-full">
									<img src={image3} alt="" className="h-full w-full" />
								</div>
								<div id="item-3" className="bg-violetStroke border-2 border-primary rounded-3xl">
									<div className="py-16 px-8 flex flex-col items-center justify-center font-['Roboto_flex']">
										<h4 className="mb-8 text-3xl text-white">Welcome to <span className="text-[#FFDE59]">Card Lingo!</span></h4>
										<p className="text-[#CFCBD5] text-center">The user-friendly interface and interactive gameplay make it engaging and enjoyable to practice vocabulary and language skills.</p>
									</div>
								</div>
							</div>
						<div className="flex gap-5">
							<div>
								<img src={image4} alt="" className="_img" />
							</div>
							<div>
								<img src={image5} alt="" className="_img" />
							</div>
							<div className="grow">
								<img src={image6} alt="" className="_img" />
							</div>
						</div>
						</div>
						<div className="basis-1/2 flex flex-col items-center justify-center">
							<div className="">
								<form action="" className="flex flex-col font-['Roboto_flex'] mb-8">
									<h3 className="mb-[52px] text-3xl text-center font-medium">Create an account</h3>
									<div className="flex flex-col gap-8 mb-[52px]">
										<input
											placeholder='Username'
											name={'username'}
											type={'text'}
											className='border-b border-violetStroke focus:outline-none px-4 py-2 w-[424px]'
											required
											value={formData.username}
											onChange={(event) => handleInputChange(event, setFormData)}
											autoComplete="off"
										/>
										<input
											placeholder='Email'
											name={'email'}
											type={'email'}
											className='border-b border-violetStroke focus:outline-none px-4 py-2 w-[424px]'
											required
											value={formData.email}
											onChange={(event) => handleInputChange(event, setFormData)}
											autoComplete="off"
										/>
										<input
											placeholder='Password'
											name={'password'}
											type={'password'}
											className='border-b border-violetStroke focus:outline-none px-4 py-2 w-[424px]'
											required
											value={formData.password}
											onChange={(event) => handleInputChange(event, setFormData)}
											autoComplete="off"
										/>
										<input
											placeholder='Confirm password'
											name={'confirmPassword'}
											required
											type={'password'}
											className='border-b border-violetStroke focus:outline-none px-4 py-2 w-[424px]'
											value={formData.confirmPassword}
											onChange={(event) => handleInputChange(event, setFormData)}
											autoComplete="off"
										/>
									</div>
									<button 
										type="submit" 
										className="bg-lilackButton rounded-3xl w-full py-2 text-primary font-semibold border-2 border-primary"
									>
										Sign up
									</button>
								</form>
								<div className="flex flex-col items-center justify-center gap-8">
									<p className="text-violetStroke relative before:w-[153px] before:content-[''] before:h-[1px] before:bg-violetStroke before:absolute before:top-[13px] before:left-[-157px] after:top-[13px] after:left-[113px] right-0 after:content-[''] after:h-[1px] after:bg-violetStroke after:absolute after:w-[153px]">Or sign up with</p>
									<div>
										<img src={google} alt="" />
									</div>
									<p className="underline">Already Have an account?
										<Link className="text-violetStroke" to={ROUTE_AUTHORIZATION}> Sign in</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

{/* <section className="flex justify-center items-center min-h-screen">
			<div className="auth relative w-96 h-[580px]rounded-lg overflow-hidden ">
				<form 
					className="auth__form absolute inset-1 px-10 py-12 rounded-lg z-[2] flex flex-col text-primary"
					onSubmit={handleOnSubmit}
				>
					<h2 className="auth__title text-white font-medium text-center tracking-wide text-3xl mb-5">Sign up</h2>
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
							placeholder='Email'
							isRequired={true}
							name={'email'}
							type={'email'}
							className='auth__input'
							value={formData.email}
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
					<div className="auth__input-box relative w-[300px] mb-4">
						<CustomInput
							placeholder='Confirim password'
							isRequired={true}
							name={'confirmPassword'}
							type={'password'}
							className='auth__input'
							value={formData.confirmPassword}
							onChange={(event) => handleInputChange(event, setFormData)}
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
							Sign up
						</button>
					</div>
					
				</form>
			</div>
</section> */}