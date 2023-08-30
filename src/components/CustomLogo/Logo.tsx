import { useEffect, useState } from 'react';
import cardLogo from '../../images/cardLingo.png';
import {ReactComponent as LogoPink} from '../../images/pink-logo-animated-rectangle.svg'
import {ReactComponent as LogoViolet} from '../../images/violet-logo-animated-rectangle.svg'
import {ReactComponent as LogoYellow} from '../../images/yellow-logo-animated-rectangle.svg'

export const Logo = () => {
  const [pinkColor, setPinkColor] = useState('#D8BFFF');
  const [violetColor, setVioletColor] = useState('#8560BF');
  const [yellowColor, setYellowColor] = useState('#FFDE59');

  useEffect(() => {
    const pinkColors = ['#D8BFFF', '#FFDE59', '#8560BF'];
    const violetColors = ['#8560BF', '#D8BFFF', '#FFDE59'];
    const yellowColors = ['#FFDE59', '#8560BF', '#D8BFFF'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % 3;
      setPinkColor(pinkColors[i]);
      setVioletColor(violetColors[i]);
      setYellowColor(yellowColors[i]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='relative'>
      <div>
        <img src={cardLogo} alt="HomePageLogo" className='relative z-10' />
      </div>
      <div className='changing-colors'>
          <LogoPink fill={pinkColor} className='absolute right-[-10px] top-[-5px] red'/>
          <LogoViolet fill={violetColor} className='absolute top-[-5px] left-0 z-[1]' />
          <LogoYellow fill={yellowColor} className='absolute bottom-[-10px] left-[25%]' />
      </div>
    </div>
  )
}