import { isThisMonth } from ".."
import {
  formatForLocale,
  formatUsd,
  initialsDisplay,
  isToday,
  isYesterday,
  satsToBTC,
  truncatedDisplay,
} from "./index"

const { formatRelativeTime, formatTime } = formatForLocale("en")

describe("formatUsd", () => {
  it("works", () => {
    expect(formatUsd(420_000)).toEqual("$420,000.00")
  })
})

describe("satsToBTC", () => {
  it("works", () => {
    expect(satsToBTC(198_786_543)).toEqual(1.98786543)
  })
})

describe("initialsDisplay", () => {
  it("works", () => {
    expect(initialsDisplay("Satoshi")).toEqual("S")
  })
})

describe("truncatedDisplay", () => {
  it("defaults to 15 max", () => {
    expect(truncatedDisplay("Satoshi Nakamoto")).toEqual("Satoshi Nakamot...")
  })
  it("works with a custom max", () => {
    expect(truncatedDisplay("Satoshi Nakamoto", { max: 9 })).toEqual("Satoshi N...")
  })
})

describe("datetime utils", () => {
  const mockedUnixTime = 1598110996 // Sat, Aug 22, 2020, 15:43:16 GMT

  beforeAll(() => {
    jest.setSystemTime(1000 * mockedUnixTime)
  })

  describe("formatRelativeTime", () => {
    it("works for past dates", () => {
      expect(formatRelativeTime(mockedUnixTime - 5)).toEqual("5 seconds ago")
    })
    it("works for future dates", () => {
      expect(formatRelativeTime(mockedUnixTime + 60 * 60)).toEqual("in 1 hour")
    })
  })

  describe("formatTime", () => {
    it("works", () => {
      expect(formatTime(mockedUnixTime - 60)).toMatch(/Sat, Aug 22, 2020, 3:42 PM/u)
    })
  })

  describe("isToday", () => {
    it("works", () => {
      expect(isToday(mockedUnixTime - 3600)).toBeTruthy()

      expect(isToday(mockedUnixTime - 25 * 3600)).toBeFalsy()
      expect(isToday(mockedUnixTime + 3600)).toBeFalsy()
      expect(isToday(mockedUnixTime + 25 * 3600)).toBeFalsy()
    })
  })

  describe("isYesterday", () => {
    it("works", () => {
      expect(isYesterday(mockedUnixTime - 25 * 3600)).toBeTruthy()

      expect(isYesterday(mockedUnixTime - 21 * 3600)).toBeFalsy()
      expect(isYesterday(mockedUnixTime - 50 * 3600)).toBeFalsy()
      expect(isYesterday(mockedUnixTime + 25 * 3600)).toBeFalsy()
    })
  })

  describe("isThisMonth", () => {
    it("works", () => {
      expect(isThisMonth(mockedUnixTime - 50 * 3600)).toBeTruthy()

      expect(isThisMonth(mockedUnixTime - 32 * 24 * 3600)).toBeFalsy()
      expect(isThisMonth(mockedUnixTime + 50 * 3600)).toBeFalsy()
    })
  })
})
