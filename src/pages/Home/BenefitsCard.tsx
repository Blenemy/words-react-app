type Props = {
  text: string,
  number: string,
}

export const BenefitsCard: React.FC<Props> = ({ text, number }) => {
  return (
    <div>
      <div>
        <p>{number}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}