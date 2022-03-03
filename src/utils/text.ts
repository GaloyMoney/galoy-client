export const initialsDisplay = (text: string): string => {
  return text.substring(0, 1).toUpperCase()
}

export const truncatedDisplay = (
  text: string,
  { max = 15 }: { max?: number } = {},
): string => {
  if (text.length > max) {
    return text.substring(0, max) + "..."
  }

  return text
}
