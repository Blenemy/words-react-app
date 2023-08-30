export const HowDoesItWork = () => {
  return (
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
  )
}