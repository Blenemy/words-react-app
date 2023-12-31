export interface UserFromServer {
  username: string;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  progress: Progress;
}

type Progress = {
  [date: string]: number;
};
