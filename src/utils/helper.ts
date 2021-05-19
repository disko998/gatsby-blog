export const rem = (px: number) => `${px / 16}rem`

export const isBrowser = () => typeof window !== "undefined"
