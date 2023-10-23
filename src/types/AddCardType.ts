export interface AddCardType {
  word: string | undefined;
  translation: string | undefined;
  description?: string;
  image: string | ArrayBuffer | null;
}
