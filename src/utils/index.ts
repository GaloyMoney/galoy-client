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
  return new Date(timestamp).toLocaleString("en-US", {
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
