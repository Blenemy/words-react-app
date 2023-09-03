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
        <img src={image2} alt="" className='absolute top-[-50px] left-[28%] z-1'/>
        <img src={image4} alt=""className='absolute top-[-75px] right-0 z-1' />
      </div>
      <BenefitsContent />
    </>
  )
}

const BenefitsContent = () => {
  return (
    <div className="font-['Roboto_flex']'">
        <div className="flex gap-6">
          <BenefitsContentBlock
            title='It`s Realistic'
            text='The card-based learning approach mirrors real-life scenarios, ensuring a genuine and practical learning experiance.'
          />
          <BenefitsContentBlock
            title='It`s Simple'
            text='The app interface is simple and intuitive. Just press a few buttons, and you`re done!'
          />
          <BenefitsContentBlock
            title='Saved time'
            text='No need to spend hours finding different variations of cards.Add your card right away!'
          />
        </div>
        <div className='flex relative w-full h-full'>
          <img src={image1} alt="" className='absolute top-[-25px] left-0 z-1'/>
          <img src={image3} alt="" className='absolute top-[-25px] left-[63%] z-1'/>
        </div>
      </div>
  )
}

const BenefitsContentBlock = ({ title, text}: { title: string, text: string }) => {
  return (
    <div className="basis-1/3 z-10 min-h-[200px]">
      <div className="blurs p-6 flex flex-col gap-2 bg-[rgba(255,255,254,0.4)] rounded-3xl min-h-full">
        <h3 className="text-wave text-[32px]">{title}</h3>
        <p className="text-[20px] text-[rgba(255,255,255,0.6)]">{text}</p>
      </div>
    </div>
  )
}