export interface CardFromServer {
  id: number,
  deck: number,
  word: string,
  translation: string,
  answers?: string[],
  image: string,
}