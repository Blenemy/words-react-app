import { useQuery } from "@tanstack/react-query";
import { ReviewCard } from "./ReviewCard";
import { getReviews } from "../../../api/getReviews";
import { useState } from "react";
import { CommentType } from "../../../types/Comments";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Review.scss";

export const Review = () => {
  const [comments, setComments] = useState<CommentType[] | []>([]);
  const [showAll, setShowAll] = useState(false);

  useQuery({
    queryFn: () => getReviews(),
    queryKey: ["Reviews"],
    onSuccess: (payload) => {
      setComments(payload.results);
    },
    retry: 1,
  });

  const displayedComments = showAll ? comments : comments.slice(0, 2);

  return (
    <div className="flex flex-col">
      <TransitionGroup className="flex font-['Roboto_flex'] flex-wrap">
        {displayedComments.map((comment) => (
          <CSSTransition
            key={comment.id}
            timeout={300}
            classNames="item"
            unmountOnExit
          >
            <ReviewCard
              username={comment.username}
              created_at={comment.created_at}
              rating={comment.rating}
              message={comment.message}
              avatar={comment.avatar}
              key={comment.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="px-8 self-end">
        {comments.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            type="button"
            className="text-black"
          >
            {showAll ? "See Less" : "See All"}
          </button>
        )}
      </div>
    </div>
  );
};
