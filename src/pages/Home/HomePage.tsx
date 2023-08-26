import { ROUTE_CARD_GAME } from '../../data/constants';
import mainImage from '../../assets/main-bg.jpg';
import './HomePage.scss';
import { Link } from 'react-router-dom';


export const HomePage = () => {
  return (
    <>
      <section className="homepage font-['Inter var'] text-[#e5e7ff]">
        <div className="homepage__content px-24 py-10 h-full flex flex-col">
          <div className="homepage__header flex gap-20 justify-center items-center mb-24">
            <div className="flex flex-col basis-3/5 gap-12">
              <h1 className="homepage__title text-[48px] tracking-[-1px] font-bold"><span className='whitespace-nowrap'>Learn Ensligh Language </span><br /> <span className='color-effect'>With Fun!</span></h1>
              <p className="homepage__subtitle text-[24px]">Guess the word based on the image and description. Improve your vocabulary and knowledge of the English language every day.</p>
              <div className='flex gap-4'>
                <Link to={ROUTE_CARD_GAME} className='bg-[#6832ae] px-8 py-4 rounded-md text-[18px]'>Get Started</Link>
                <button className='bg-[#180919] px-8 py-4 rounded-md text-[18px]'>How does it work?</button>
              </div>
            </div>
            <div className="basis-2/5">
              <div className='relative pb-[73%]'>
                <img src={mainImage} alt="homePageImage" className='absolute w-full h-full top-0 left-0 object-cover'/>
              </div>
            </div>
          </div>
          <div className='mb-20'>
            <h2 className='font-bold text-[32px] tracking-[-2px] text-center mb-6'>Why Live-Learns?</h2>
            <div className='flex gap-10 items-stretch'>
              <div className='basis-1/3 p-12 flex flex-col items-center relative bg-[#0D0E1B] flex-auto justify-between'>
                <svg width="117" height="117" viewBox="0 0 117 117" fill="none" style={{ zIndex: 5 }} className="part1-card-img">
                  <circle cx="58.5" cy="58.5" r="58.5" fill="#060714"></circle>
                  <path fillRule="evenodd" clipRule="evenodd" d="M89.4669 8.85912L58.0465 63.9419L2.44746 41.7023C9.66585 17.5806 32.0298 0 58.5 0C69.872 0 80.4861 3.24483 89.4669 8.85912Z" fill="#ae36b6" fillOpacity="0.6"></path>
                  <path d="M81.5 22.5L57.1395 64.8489L32 53.5" stroke="#e5e7ff" strokeWidth="7.25581"></path>
                </svg>
                <p className='text-[24px]'>Saves time</p>
                <p className='text-[18px]'>No need to spend hours finding different variations of cards.! Add your card right away.</p>
              </div>
              <div className='basis-1/3 p-12 flex flex-col items-center relative bg-[#0D0E1B] min-h-[440px] justify-between'>
                <svg width="112" height="114" viewBox="0 0 112 114" fill="none" style={{ zIndex: 5 }} className="part1-card-img">
                  <rect width="58" height="58" fill="#060714"></rect>
                  <rect x="69" y="25" width="33" height="33" fill="#ae36b6" fillOpacity="0.6"></rect>
                  <rect x="69" y="71" width="43" height="43" fill="#e5e7ff" fillOpacity="0.2"></rect>
                  <rect x="20" y="70" width="38" height="39" fill="#e5e7ff"></rect>
                </svg>
                <p className='text-[24px]'>It’s Realistic</p>
                <p className='text-[18px]'>The card-based learning approach mirrors real-life scenarios, ensuring a genuine and practical learning experience.</p>
              </div>
              <div className='basis-1/3 p-12 flex flex-col items-center relative bg-[#0D0E1B] min-h-[440px] justify-between'>
                <svg width="179" height="89" viewBox="0 0 179 89" fill="none" style={{ zIndex: 5 }} className="part1-card-img">
                  <rect y="26" width="154" height="63" fill="#ae36b6" fillOpacity="0.6"></rect>
                  <path d="M142 15.5V0" stroke="#e5e7ff" strokeWidth="8"></path>
                  <path d="M163 34L178.5 34" stroke="#e5e7ff" strokeWidth="8"></path>
                  <path d="M158 19.5L170.5 7" stroke="#e5e7ff" strokeWidth="8"></path>
                  <path d="M63 54L74.5 65L95.5 44" stroke="#e5e7ff" strokeWidth="8"></path>
                </svg>
                <p className='text-[24px]'>It’s Simple</p>
                <p className='text-[18px]'>The app interface is simple and intuitive. Just press a few buttons, and you're done!</p>
              </div>
            </div>
          </div>
          {/* <div className='flex gap-20 justify-center mb-12'>
            <div className='flex flex-col basis-1/2 items-center'>
              <h2 className='mb-6'>Vivid image on each card</h2>
              <p className='mb-6'>Providing visuals simplifies the memorization process and helps users learn the material faster. Each card is adorned with a matching image to enrich the learning experience.</p>
              <div 
                  className="stack flex gap-8 relative items-center justify-center" 
                >
                  {cards.map((imageSrc, index) => (
                    <div key={index} className='stack__card h-[250px] w-[180px] bg-slate-600'>
                        <img src={imageSrc} alt="" className="test" />
                    </div>
                  ))}
              </div>
            </div>
            <div className='flex flex-col basis-1/2 items-center'>
              <h2 className='mb-6'>Brief description for detail</h2>
              <p className='mb-6'>Complementing the image, a short description gives users context and helps to understand the essence of each presented word deeper. This provides a more complete understanding and better retention of information.</p>
              <div 
                  className="stack flex gap-8 relative items-center justify-center" 
                >
                  {cards.map((imageSrc, index) => (
                    <div key={index} className='stack__card h-[250px] w-[180px] bg-slate-600'>
                        <img src={imageSrc} alt="" className="test" />
                    </div>
                  ))}
              </div>
            </div>
          </div> */}
          <div>
            <div className='px-20 py-12 flex gap-24 justify-between rounded-md bg-[#180919]'>
              <div className='w-[30%]'>
                <h2 className='text-[32px] font-bold tracking-[2px] mb-5'>How Does It Work?</h2>
                <p className='text-[16px]'>It works by presenting language concepts on interactive cards that adapt to your learning pace.</p>
              </div>
              <div className='w-[70%] flex flex-wrap gap-20'>
                <div className='basis-[30%] flex-grow before:content-["1"] before:text-[#ae36b6] before:text-[24px] before:font-bold before:absolute before:translate-x-[-1em]'>Start by selecting a language or topic you want to study</div>
                <div className='basis-[30%] flex-grow before:content-["2"] before:text-[#ae36b6] before:text-[24px] before:font-bold before:absolute before:translate-x-[-1em]'>Review interactive cards that introduce new words, phrases, and concepts.</div>
                <div className='basis-[30%] flex-grow before:content-["3"] before:text-[#ae36b6] before:text-[24px] before:font-bold before:absolute before:translate-x-[-1em]'>Test your knowledge through quizzes and repetition to reinforce memory.</div>
                <div className='basis-[30%] flex-grow before:content-["4"] before:text-[#ae36b6] before:text-[24px] before:font-bold before:absolute before:translate-x-[-1em]'>The app adapts, presenting cards based on your performance, ensuring you focus on areas that need improvement.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
