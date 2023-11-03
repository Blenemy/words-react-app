import { ReviewCard } from "./ReviewCard";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Review.scss";
import { useGetReviews } from "../../../hooks/useGetReviews";

/**
 * Review component for displaying a list of comments/reviews.
 * The component uses transition animations for displaying comments.
 *
 * It shows only 2 comments by default and provides an option
 * to expand and view all comments or collapse back to viewing only two.
 *
 * @returns {React.ReactElement} The rendered Review component.
 */

export const Review = () => {
  const [showAll, setShowAll] = useState(false);

  const { comments } = useGetReviews();

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
            className="text-black underline"
          >
            {showAll ? "See Less" : "See All"}
          </button>
        )}
      </div>
    </div>
  );
};
