import star from "../../../assets/star.png";

type ReviewCardProps = {
  name: string;
  date: string;
  rating: string;
  comment: string;
  image: string;
};
export const ReviewCard: React.FC<ReviewCardProps> = ({
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
