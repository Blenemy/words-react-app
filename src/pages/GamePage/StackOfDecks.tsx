import './StackOfDecks.scss';
import titleDecorator from '../../images/gamePageDecksDecorator.png';

type Props = {
  frontImage: string | undefined,
  onDeckClick: () => void,
  deckTitle: string,
}

export const StackOfDecks: React.FC<Props> = ({ frontImage, onDeckClick, deckTitle }) => {
  if (!frontImage) {
    return
  }

  return (
  <div onClick={onDeckClick}>
    <div className='relative flex items-center justify-center'>
      <h3 className="text-primary mb-20 title-decorator text-center w-[182px]">{deckTitle}</h3>
      <img src={titleDecorator} alt="" className='absolute left-1/2 top-[-20px] -translate-x-1/2'/>
    </div>
    <div className="stack relative">
      <div className="card w-full h-[329px] absolute rounded-3xl bg-primary" />
      <div className="card w-full h-[329px] absolute rounded-3xl bg-secondary" />
      <img src={frontImage} alt="Description" className="card w-full h-[329px] absolute rounded-3xl" />
    </div>

  </div>
)
};

{/* <div>
  <h4 className="mb-5 text-center text-primary">Hard Deck</h4>
  <div 
    className="stack flex gap-8 relative items-center justify-center mb-14"
    onClick={onDeckClick}
  >
    {images?.map((image, index) => (
      <div key={`${image}-${index}`} className='stack__card h-[425px] w-[351px] bg-slate-600'>
        <img src={image} alt="" className="_img" />
      </div>
    ))}
  </div>
</div> */}
