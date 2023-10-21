import "./HomePage.scss";
import { Benefits } from "./Benefits/Benefits";
import { MainContent } from "./MainContent/MainContent";
import { useLayoutEffect, useState } from "react";
import { HowDoesItWork } from "./HowDoesItWork/HowDoesItWork";

export const HomePage = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const header = document.getElementById("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      setViewportHeight(window.innerHeight - headerHeight);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <section
        className={`homepage-section-one`}
        style={{ minHeight: viewportHeight }}
      >
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
  );
};
