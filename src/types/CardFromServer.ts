export interface CardFromServer {
  id: number,
  deck: number,
  word: string,
  translation: string,
  answers?: string[],
  description?: string | null,
  image: string,
}