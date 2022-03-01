import i18n from "i18n-js"

const DIVISIONS: Array<{ amount: number; name: Intl.RelativeTimeFormatUnit }> = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
]

let formatter: Intl.RelativeTimeFormat | undefined = undefined

export const formatRelativeTime = (timestamp: number) => {
  formatter =
    formatter ??
    new Intl.RelativeTimeFormat(i18n.locale, {
      numeric: "auto",
    })
  let duration = (1000 * timestamp - new Date().getTime()) / 1000

  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }
}

export const formatTime = (timestamp: number) => {
  return new Date(1000 * timestamp).toLocaleString(i18n.locale, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
}

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
})

export const formatUsd = (value: number) => {
  return usdFormatter.format(value)
}

export const satsToBTC = (satsAmount: number): number => satsAmount / 10 ** 8

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

export const sameDay = (d1: number, d2: number | Date): boolean => {
  const parsedD1 = new Date(1000 * d1)
  const parsedD2 = typeof d2 === "number" ? new Date(d2) : d2

  return (
    parsedD1.getFullYear() === parsedD2.getFullYear() &&
    parsedD1.getMonth() === parsedD2.getMonth() &&
    parsedD1.getDate() === parsedD2.getDate()
  )
}

export const sameMonth = (d1: number, d2: number | Date): boolean => {
  const parsedD1 = new Date(1000 * d1)
  const parsedD2 = typeof d2 === "number" ? new Date(d2) : d2

  return (
    parsedD1.getFullYear() === parsedD2.getFullYear() &&
    parsedD1.getMonth() === parsedD2.getMonth()
  )
}

export const unixTime = (): number => Math.floor(Date.now() / 1000)

export const isToday = (timestamp: number) => sameDay(timestamp, new Date())

export const isYesterday = (timestamp: number) =>
  sameDay(timestamp, new Date().setDate(new Date().getDate() - 1))

export const isThisMonth = (timestamp: number) => sameMonth(timestamp, new Date())
