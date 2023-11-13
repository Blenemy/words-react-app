import Marquee from "react-fast-marquee";
import { v4 as uuidv4 } from "uuid";

/**
 * Компонент BenefitsCarousel для отображения карусели с преимуществами.
 *
 * @returns {JSX.Element} Отрисованный компонент карусели преимуществ.
 */

export const wordsToTrackBase = [
  "Why Card Lingo?",
  "Why Card Lingo?",
  "Why Card Lingo?",
  "Why Card Lingo?",
  "Why Card Lingo?",
  "Why Card Lingo?",
];

const wordsToTrack = Array(4).fill(wordsToTrackBase).flat();

export const BenefitsCarousel = (): JSX.Element => {
  return (
    <div className="mb-32">
      <Marquee
        data-testid="marquee"
        pauseOnHover={true}
        style={{ overflowX: "initial" }}
      >
        {wordsToTrack.map((word) => (
          <span data-testid="word" key={uuidv4()} className="text-2xl">
            {word}
          </span>
        ))}
      </Marquee>
    </div>
  );
};
