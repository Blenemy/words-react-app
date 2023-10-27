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
    </div>
  );
};
