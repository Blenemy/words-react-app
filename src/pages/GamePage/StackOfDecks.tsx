
export const StackOfDecks = ({ images }: { images: string[] | undefined }) => {
   return (
    <div className="stack flex gap-8 relative items-center justify-center mb-14">
      {images?.map((image, index) => (
        <div key={`${image}-${index}`} className='stack__card h-[250px] w-[180px] bg-slate-600'>
          <img src={image} alt="" className="test" />
        </div>
      ))}
    </div>
  )
};
