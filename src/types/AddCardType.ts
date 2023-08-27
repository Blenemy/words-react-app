export interface AddCardType {
  deck: number | undefined,
  word: string | undefined,
  translation: string | undefined,
  description?: string,
  image: string | ArrayBuffer | null,
}