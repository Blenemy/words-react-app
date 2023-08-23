export interface AddCardType {
  deck: number | undefined,
  word: string | undefined,
  translation: string | undefined,
  image: string | ArrayBuffer | null,
}