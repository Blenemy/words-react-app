import image1 from '../../images/createAccountImage1.png';
import image2 from '../../images/createAccountImage2.png';
import image3 from '../../images/createAccountImage3.png';
import image4 from '../../images/createAccountImage4.png';
import image5 from '../../images/createAccountImage5.png';
import image6 from '../../images/createAccountImage6.png';
import './AuthLayout.scss';

export const AuthLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <section className="text-primary py-6">
			<div className="container mx-auto my-0">
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
									<img src={image3} alt="" className="h-full w-full rounded-3xl" />
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
								<img src={image4} alt="" className="h-full w-full rounded-3xl" />
							</div>
							<div>
								<img src={image5} alt="" className="h-full w-full rounded-3xl" />
							</div>
							<div className="grow">
								<img src={image6} alt="" className="h-full w-full rounded-3xl" />
							</div>
						</div>
						</div>
						<div className="basis-1/2 flex flex-col items-center justify-center">
							{children}
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}