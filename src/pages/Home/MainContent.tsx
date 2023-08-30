import { Link } from "react-router-dom"
import { ROUTE_CARD_GAME } from "../../data/constants";
import image1 from '../../images/frontpage-list-image1.png'
import image2 from '../../images/frontpage-list-image2.png'
import image3 from '../../images/frontpage-list-image3.png'
import image4 from '../../images/frontpage-list-image4.png'

export const MainContent = () => {
  return (
    <div className="homepage__header flex gap-20 mb-24">
      <div className="flex flex-col basis-1/2 gap-12">
        <h1 className="homepage__title text-[48px] tracking-wide font-bold leading-tight"><span className='text-primary text-[96px]'>Learn Ensligh Language </span><br /> <span className='color-effect'>With Fun!</span></h1>
        <p className="homepage__subtitle text-[24px] text-primary">Guess the word based on the image and description. Improve your vocabulary and knowledge of the English language every day.</p>
        <div className='flex gap-4'>
          <Link to={ROUTE_CARD_GAME} className='bg-lilackButton px-8 py-4 rounded-3xl text-[18px] w-[312px] h-[38px] flex items-center justify-center text-black border-black border-2 hover:bg-wave duration-300'>Get Started</Link>
          {/* <button className='bg-[#180919] px-8 py-4 rounded-md text-[18px]'>How does it work?</button> */}
        </div>
      </div>
      <div className="flex flex-col basis-1/2 gap-12">
        <div className="flex self-end">
          <ul className="flex text-primary animation-words">
            <li>
              <p className="text-violetStroke flex justify-center items-center w-[95px] h-[32px] border-2 border-wave rounded-3xl">Learn</p>
            </li>
            <li>
              <p className="text-violetStroke flex justify-center items-center w-[95px] h-[32px] border-2 border-wave rounded-3xl ml-[-13px]">Words</p>
            </li>
            <li>
              <p className="text-violetStroke flex justify-center items-center w-[95px] h-[32px] border-2 border-wave rounded-3xl ml-[-13px]">Online</p>
            </li>
            <li>
              <p className="text-violetStroke flex justify-center items-center w-[95px] h-[32px] border-2 border-wave rounded-3xl ml-[-13px]">Using</p>
            </li>
            <li>
              <p className="text-violetStroke flex justify-center items-center w-[95px] h-[32px] border-2 border-wave rounded-3xl ml-[-13px]">Cards</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-8">
          <ul className="flex px-4 py-2 bg-[rgba(255,255,254,0.24)] w-fit rounded-3xl">
            <li className="">
              <img src={image1} alt="" />
            </li>
            <li className="ml-[-10px]">
              <img src={image2} alt="" />
            </li>
            <li className="ml-[-10px]">
              <img src={image3} alt="" />
            </li>
            <li className="ml-[-10px]">
              <img src={image4} alt="" />
            </li>
          </ul>
          <div className="flex flex-col gap-2 text-primary">
            <p>+ 10,43,100</p>
            <p>PEOPLE CONNECT</p>
          </div>
        </div>
      </div>
    </div>
  )
}