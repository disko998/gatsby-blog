const MAX_DESC_LENGTH = 140

export const rem = (px: number) => `${px / 16}rem`

export const isBrowser = () => typeof window !== "undefined"

export const __DEV__ = process.env.GATSBY_ENV === "development"

export const shortDescription = (text: string) => {
  console.log(text.length)
  if (text.length > MAX_DESC_LENGTH) {
    return `${text.substring(0, MAX_DESC_LENGTH)}...`
  }

  return text
}
