import reviewImageFirst from "../../../images/howtiworks-revview-image.png";
import reviewImageSecond from "../../../images/howtiworks-revview-image2.png";
import star from "../../../images/star.png";

export const Review = () => {
  return (
    <div className="flex gap-6 font-['Roboto_flex']">
      <ReviewCard
        name={"Marry"}
        date="September 2023"
        rating="5.0"
        comment='"Card Lingo is an excellent computer service for language learning through flashcards. The user-friendly interface and interactive gameplay make it engaging and enjoyable to practice vocabulary and language skills."'
        image={reviewImageFirst}
      />
      <ReviewCard
        name={"Pavlo"}
        date="October 2023"
        rating="5.0"
        comment="I highly recommend Card Lingo for anyone looking to improve their language proficiency. The wide range of pre-made card decks and the ability to create custom ones allow you to tailor your learning experience to your specific needs."
        image={reviewImageSecond}
      />
    </div>
  );
};

type ReviewCardProps = {
  name: string;
  date: string;
  rating: string;
  comment: string;
  image: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  date,
  rating,
  comment,
  image,
}) => {
  return (
    <div className="basis-1/2">
      <div className="p-8 flex flex-col gap-4 text-primary">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <img src={image} alt="" />
            <div className="flex flex-col">
              <p>{name}</p>
              <p>{date}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <p>{rating}</p>
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
        <div>{comment}</div>
      </div>
    </div>
  );
};
