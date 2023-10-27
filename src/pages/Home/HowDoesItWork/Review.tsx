import { useQuery } from "@tanstack/react-query";
import { ReviewCard } from "./ReviewCard";
import { getReviews } from "../../../api/getReviews";
import { useState } from "react";
import { CommentType } from "../../../types/Comments";

export const Review = () => {
  const [comments, setComments] = useState<CommentType[] | []>([]);

  useQuery({
    queryFn: () => getReviews(),
    queryKey: ["Reviews"],
    onSuccess: (payload) => {
      setComments(payload.results);
    },
    retry: 1,
  });

  return (
    <div className="flex gap-6 font-['Roboto_flex']">
      {comments.map((comment) => (
        <ReviewCard
          username={comment.username}
          created_at={comment.created_at}
          rating={comment.rating}
          message={comment.message}
          avatar={comment.avatar}
          key={comment.id}
        />
      ))}
      {/* <ReviewCard
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
      /> */}
    </div>
  );
};

// {
//   "count": 7,
//   "next": "http://127.0.0.1:8001/social/comments/?limit=3&offset=5",
//   "previous": "http://127.0.0.1:8001/social/comments/?limit=3",
//   "results": [
//       {
//           "id": 6,
//           "username": "Denys+Topchyi",
//           "message": "123",
//           "rating": 5,
//           "created_at": "2023-10-27T15:17:41.748297+03:00",
//           "avatar": "http://127.0.0.1:8001/media/avatars/clown_Tmgo7le.jpg"
//       },
