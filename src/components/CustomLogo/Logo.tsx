import {ReactComponent as LogoPink} from '../../images/pink-logo-animated-rectangle.svg'
import {ReactComponent as LogoViolet} from '../../images/violet-logo-animated-rectangle.svg'
import {ReactComponent as LogoYellow} from '../../images/yellow-logo-animated-rectangle.svg'

export const Logo = ({ image }: { image: string }) => {
  return (
    <div className='relative h-6'>
      <div>
        <img src={image} alt="HomePageLogo" className='relative z-10' />
      </div>
      <div className='changing-colors'>
        <div className="svg-container-one">
          <LogoPink className='absolute right-[-10px] top-[-5px] red'/>
        </div>
        <div className="svg-container-two">
          <LogoViolet className='absolute top-[-5px] left-0 z-[1]' />
        </div>
        <div className="svg-container-three">
          <LogoYellow className='absolute bottom-[-10px] left-[25%]' />
        </div>
      </div>
    </div>
  )
}