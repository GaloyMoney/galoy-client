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

export const formatForLocale = (locale: string) => {
  const formatRelativeTime = (timestamp: number) => {
    formatter =
      formatter ??
      new Intl.RelativeTimeFormat(locale, {
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

  const formatTime = (timestamp: number) => {
    return new Date(1000 * timestamp).toLocaleString(locale, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
  }

  return {
    formatRelativeTime,
    formatTime,
  }
}

const samePastDay = (d1: number, d2: number | Date): boolean => {
  const parsedD1 = new Date(1000 * d1)
  const parsedD2 = typeof d2 === "number" ? new Date(1000 * d2) : d2

  return (
    parsedD1 <= parsedD2 &&
    parsedD1.getFullYear() === parsedD2.getFullYear() &&
    parsedD1.getMonth() === parsedD2.getMonth() &&
    parsedD1.getDate() === parsedD2.getDate()
  )
}

const samePastMonth = (d1: number, d2: number | Date): boolean => {
  const parsedD1 = new Date(1000 * d1)
  const parsedD2 = typeof d2 === "number" ? new Date(1000 * d2) : d2

  return (
    parsedD1 <= parsedD2 &&
    parsedD1.getFullYear() === parsedD2.getFullYear() &&
    parsedD1.getMonth() === parsedD2.getMonth()
  )
}

export const isToday = (timestamp: number) => samePastDay(timestamp, new Date())

export const isYesterday = (timestamp: number) =>
  samePastDay(timestamp, new Date(Date.now() - 24 * 3600 * 1000))

export const isThisMonth = (timestamp: number) => samePastMonth(timestamp, new Date())
