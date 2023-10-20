export interface CardFromServer {
  id: number;
  deck: number;
  word: string;
  translation: string;
  answers?: string[];
  description?: string | null;
  image: string;
  image_hash: string;
  additional_images?: string[];
}
