import { HowDoesItWorkCard } from "./HowDoesItWorkCard"
import arrowWhite from '../../images/arrow-white.svg'

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
      <div>
        <div>
          <img src={arrowWhite} alt="" />
        </div>
      </div>
    </>
  )
}