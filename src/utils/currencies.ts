const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
})

export const formatUsd = (value: number) => {
  return usdFormatter.format(value)
}

const satsFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
})

export const formatSats = (value: number) => {
  return satsFormatter.format(value) + (value === 1 ? " sat" : " sats")
}

export const formatCurrencyAmount = ({
  currency,
  amount,
}: {
  currency: "BTC" | "USD"
  amount: number
}) => {
  if (currency === "BTC") {
    return formatSats(amount)
  }

  if (currency === "USD") {
    return formatUsd(amount)
  }
}

export const satsToBTC = (satsAmount: number): number => satsAmount / 10 ** 8
