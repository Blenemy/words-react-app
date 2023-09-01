import { HowDoesItWorkCard } from "./HowDoesItWorkCard"
import arrowWhite from '../../images/arrow-white.svg';
import yellowReact from '../../images/howitworks-react-yellow.svg'
import pinkRect from '../../images/howitworks-react-pink.svg'
import waveRect from '../../images/howitworks-react-wave.svg'
import reviewImageFirst from '../../images/howtiworks-revview-image.png'
import reviewImageSecond from '../../images/howtiworks-revview-image2.png'
import star from '../../images/star.png';

export const HowDoesItWork = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 circle-border w-[420px] p-2 pt-4 mb-12 text-primary">
        <h2 className="text-7xl">How?</h2>
        <p className="w-[392px] h-[52px] bg-wave rounded-3xl flex justify-center items-center border-2 border-primary text-3xl font-semibold -rotate-6 mb-5">Does it Work?</p>
        <p>It works by presenting language concepts on interactive to your learning pace.</p>
      </div>
      <div className="text-primary flex gap-3 mb-8">
        <HowDoesItWorkCard text="Start by selecting a language or topic you want to study." number="01."/>
        <HowDoesItWorkCard text="Review interactive cards that introduce new words, phrases and concepts." number="02."/>
        <HowDoesItWorkCard text="Test your knowledge through quizzes and repetition to reinforce memory." number="03."/>
        <HowDoesItWorkCard text="aThe app adapts, presenting cards based on your performance, ensuring you facus on areas that need improvement." number="04."/>
      </div>
      <div className="mb-10">
        <div>
          <img src={arrowWhite} alt="" />
          <div className="flex justify-between w-1/2">
            <img src={yellowReact} alt="" />
            <img src={pinkRect} alt="" />
            <img src={waveRect} alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="basis-1/2">
          <div className="p-8 flex flex-col gap-4 text-primary">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <img src={reviewImageFirst} alt="" />
                <div className="flex flex-col">
                  <p>Mary</p>
                  <p>September 2023</p>
                </div>
              </div>
              <div className="flex gap-4">
                <p>5.0</p>
                <ul className="flex gap-2">
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              "Card Lingo is an excellent computer service for language learning through flashcards.The user-friendly interface and interactive gameplay make it engaging and enjoyable to practice vocabulary and language skills."
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="p-8 flex flex-col gap-4 text-primary">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <img src={reviewImageSecond} alt="" />
                <div className="flex flex-col">
                  <p>Pavlo</p>
                  <p>October 2023</p>
                </div>
              </div>
              <div className="flex gap-4">
                <p>5.0</p>
                <ul className="flex gap-2">
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              "I highly recommend Card Lingo for anyone looking to improve their language proficiency. The wide range of pre-made card decks and the ability to create custom ones allow you to tailor your learning experience to your specific needs."
            </div>
          </div>
        </div>
      </div>
  </>
  )
}