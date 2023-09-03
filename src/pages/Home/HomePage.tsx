import './HomePage.scss';
import { Benefits } from './Benefits';
import { HowDoesItWork } from './HowDoesItWork';
import { MainContent } from './MainContent';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const header = document.getElementById('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      setViewportHeight(window.innerHeight - headerHeight);
    };

    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      <section className={`homepage-section-one`} style={{ minHeight: viewportHeight }}>
        <div className="container mx-auto my-0">
          <div className="heart-bg h-full pt-20 pb-14">
            <MainContent />
          </div>
        </div>
      </section>
      <section className="homepage-section-two bg-primary min-h-screen">
        <div className="container mx-auto my-0">
          <div className="min-h-screen px-12 py-14 arrow-bg">
            <Benefits />
          </div>
        </div>
      </section>
      <section className="homepage-section-three bg-white relative">
        <div className="container mx-auto my-0">
          <div className="px-12 pb-36">
            <HowDoesItWork />
          </div>
        </div>
      </section>
    </>
  )
}
