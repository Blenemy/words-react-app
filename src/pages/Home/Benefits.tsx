export const Benefits = () => {
  return (
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
  )
}