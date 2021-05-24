export const rem = (px: number) => `${px / 16}rem`

export const isBrowser = () => typeof window !== "undefined"

export const __DEV__ = process.env.GATSBY_ENV === "development"
