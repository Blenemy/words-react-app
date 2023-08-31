import { BenefitsCard } from "./BenefitsCard"

export const HowDoesItWork = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 circle-border w-[420px] p-2 pt-4 mb-12 text-primary">
        <h2 className="text-7xl">How?</h2>
        <p className="w-[392px] h-[52px] bg-wave rounded-3xl flex justify-center items-center border-2 border-primary text-3xl font-semibold -rotate-6 mb-5">Does it Work?</p>
        <p>It works by presenting language concepts on interactive to your learning pace.</p>
      </div>
      <div className="text-primary flex gap-3">
        <BenefitsCard text="awa" number="01."/>
        <BenefitsCard text="awa" number="02."/>
        <BenefitsCard text="awa" number="03."/>
        <BenefitsCard text="awa" number="04."/>
      </div>
    </>
  )
}