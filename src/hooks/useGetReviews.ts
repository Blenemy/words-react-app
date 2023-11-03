import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../api/getReviews";
import { useState } from "react";
import { CommentType } from "../types/Comments";

export const useGetReviews = () => {
  const [comments, setComments] = useState<CommentType[] | []>([]);

  useQuery({
    queryFn: () => getReviews(),
    queryKey: ["Reviews"],
    onSuccess: (payload) => {
      setComments(payload.results);
    },
    retry: 1,
  });

  return { comments };
};
