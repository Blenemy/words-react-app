import reviewImageFirst from '../../images/howtiworks-revview-image.png'
import reviewImageSecond from '../../images/howtiworks-revview-image2.png'
import star from '../../images/star.png';

export const Review = () => {
  return (
    <div className="flex gap-6 font-['Roboto_flex']">
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
            "Card Lingo is an excellent computer service for language learning through flashcards. The user-friendly interface and interactive gameplay make it engaging and enjoyable to practice vocabulary and language skills."
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
  )
}