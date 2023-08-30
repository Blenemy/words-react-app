import './HomePage.scss';
import { Benefits } from './Benefits';
import { HowDoesItWork } from './HowDoesItWork';
import { MainContent } from './MainContent';

export const HomePage = () => {
  return (
    <>
      <section className="homepage font-['Inter var'] text-[#e5e7ff]">
        <div className="homepage__content h-full">
          <MainContent />
          {/* <Benefits />
          <HowDoesItWork /> */}
        </div>
      </section>
    </>
  )
}
