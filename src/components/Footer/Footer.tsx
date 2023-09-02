import { Logo } from "../../components/CustomLogo/Logo";
import cardLingoWhite from '../../images/cardLingoWhite.png';
import copyright from '../../images/copyright.svg'

export const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className='container mx-auto my-0'>
        <div className='px-14 py-10'>
          <div className="flex justify-between">
            <Logo image={cardLingoWhite} />
            <ul>
              <li className="hover:text-wave duration-300">
                <a href="/">About Us</a>
              </li>
              <li className="hover:text-wave duration-300">
                <a href="/">Review</a>
              </li>
              <li className="hover:text-wave duration-300">
                <a href="/">FAQs</a>
              </li>
            </ul>
            <div className="flex gap-3 self-end">
              <img src={copyright} alt="" />
              <p>2023</p>
              <p>CardLingo.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}