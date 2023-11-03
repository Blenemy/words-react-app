import star from "../../../assets/star.png";
import defaultImage from "../../../assets/User.svg";
import { v4 as uuidv4 } from "uuid";

/**
 * ReviewCard component for displaying individual user reviews.
 * Each review card displays the user's avatar, username, review creation date,
 * star rating, and the message/content of the review.
 *
 * @param {ReviewCardProps} props - The component's props.
 * @param {string} props.username - The username of the reviewer.
 * @param {string} props.created_at - The creation date of the review.
 * @param {number} props.rating - The star rating given by the reviewer (out of 5).
 * @param {string} props.message - The content/message of the review.
 * @param {string} props.avatar - The avatar of the reviewer.
 * @returns {React.ReactElement} The rendered ReviewCard component.
 */

type ReviewCardProps = {
  username: string;
  created_at: string;
  rating: number;
  message: string;
  avatar: string;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({
  username,
  created_at,
  rating,
  message,
  avatar,
}) => {
  const date = new Date(created_at);
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="basis-1/2 min-h-[236px]">
      <div className="p-8 flex flex-col gap-4 text-primary">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <img
              className="rounded-full h-[60px] w-[60px]"
              src={avatar || defaultImage}
              alt="user_avatar"
            />

            <div className="flex flex-col">
              <p>{username}</p>
              <p>{formattedDate}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <p>{rating}</p>
            <ul className="flex gap-2">
              {Array.from({ length: rating }).map((_) => (
                <li key={uuidv4()}>
                  <img src={star} alt="star" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
};
