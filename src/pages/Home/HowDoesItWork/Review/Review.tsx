import { ReviewCard } from "./ReviewCard/ReviewCard";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Review.scss";
import { useGetReviews } from "../../../../hooks/useGetReviews";

/**
 * Компонент Review для отображения списка комментариев/отзывов.
 * Компонент использует анимацию перехода для отображения комментариев.
 *
 * По умолчанию отображает только 2 комментария и предоставляет возможность
 * развернуть и просмотреть все комментарии или свернуть обратно, чтобы видеть только два.
 *
 * @returns {React.ReactElement} Отрисованный компонент Review.
 */

export const Review = () => {
  const [showAll, setShowAll] = useState(false);

  const { comments } = useGetReviews();

  const displayedComments = showAll ? comments : comments?.slice(0, 2);

  return (
    <div className="flex flex-col">
      <TransitionGroup className="flex font-['Roboto_flex'] flex-wrap">
        {displayedComments?.map((comment) => (
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
        {comments && comments.length && (
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
