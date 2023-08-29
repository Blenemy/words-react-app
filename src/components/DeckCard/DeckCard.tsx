import { CardFromServer } from "../../types/CardFromServer"

export const DeckCard = ({ card }: { card: CardFromServer }) => {
  
  return (
    <div>
      <div className="flex flex-col">
        <div className='h-[250px] w-[180px] bg-slate-600'>
          <img src={card.image} alt="" className="test" />
        </div>
        <h3>{card.word}</h3>
        <h3>{card.translation}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  )
}