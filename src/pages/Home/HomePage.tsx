import './HomePage.scss';
import { Benefits } from './Benefits';
import { HowDoesItWork } from './HowDoesItWork';
import { MainContent } from './MainContent';
import { Header } from '../../components/Header/Header';

export const HomePage = () => {
  return (
    <>
      <section className="homepage-section-one min-h-screen">
        <div className="heart-bg h-full px-12 pt-8">
          <Header />
          <MainContent />
        </div>
      </section>
      <section className="homepage-section-two bg-primary min-h-screen overflow-visible">
        <div className="min-h-screen px-12 py-8 arrow-bg">
          <Benefits />
        </div>
      </section>
      <section className="homepage-section-three bg-white relative">
        <div className="px-12">
          <HowDoesItWork />
        </div>
      </section>
    </>
  )
}
