export type CommentsPayload = {
  count: number;
  next: null | string;
  previous: null | string;
  results: CommentType[] | [];
};

export type CommentType = {
  avatar: string;
  created_at: string;
  id: number;
  message: string;
  rating: number;
  username: string;
};
