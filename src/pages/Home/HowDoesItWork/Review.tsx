import reviewImageFirst from "../../../assets/howtiworks-revview-image.png";
import reviewImageSecond from "../../../assets/howtiworks-revview-image2.png";
import { ReviewCard } from "./ReviewCard";

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
