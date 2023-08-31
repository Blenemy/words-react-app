import image1 from '../../images/benefits-image1.png'
import image2 from '../../images/benefits-image2.png'
import image3 from '../../images/benefits-image3.png'
import image4 from '../../images/benefits-image4.png'
import { TextCarousel } from './TextCarousel'

export const Benefits = () => {
  return (
    <>
      <TextCarousel />
      <div className='relative'>
        <div className="flex gap-6">
          <div className="basis-1/3 z-10">
            <div className="blurs p-6 flex flex-col gap-2 bg-[rgba(255,255,254,0.4)] rounded-3xl min-h-full">
              <h3 className="text-wave text-2xl">Saved time</h3>
              <p className="text-xl text-[rgba(255,255,255,0.6)]">No need to spend hours finding different variations of cards.Add your card right away!</p>
            </div>
          </div>
          <div className="basis-1/3 z-10">
            <div className="blurs p-6 bg-[rgba(255,255,254,0.4)] rounded-3xl min-h-full">
              <div className="flex flex-col gap-2">
                <h3 className="text-wave text-2xl">It`s Realistic</h3>
                <p className="text-xl text-[rgba(255,255,255,0.6)]">The card-based learning approach mirrors real-life scenarios, ensuring a genuine and practical learning experiance.</p>
              </div>
            </div>
          </div>
          <div className="basis-1/3 z-10">
            <div className="blurs p-6 flex flex-col gap-2 bg-[rgba(255,255,254,0.4)] rounded-3xl min-h-full">
              <h3 className="text-wave text-2xl">It`s Simple</h3>
              <p className="text-xl text-[rgba(255,255,255,0.6)]">The app interface is simple and intuitive. Just press a few buttons, and you`re done!</p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <img src={image1} alt="" className='absolute top-[175px] left-0 z-1'/>
          <img src={image2} alt="" className='absolute top-[-45px] left-[325px] z-1'/>
          <img src={image3} alt="" className='absolute top-[175px] left-[775px] z-1'/>
          <img src={image4} alt=""className='absolute top-[-65px] right-0 z-1' />
        </div>
      </div>
    </>
  )
}