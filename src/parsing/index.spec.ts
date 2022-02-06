import { Network, parsePaymentDestination } from "./index"

beforeAll(() => {
  jest.setSystemTime(1598110996000) // Aug 22 2020 10:43
})

const p2pkh = "1KP2uzAZYoNF6U8BkMBRdivLNujwSjtAQV"
const p2sh = "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"
const bech32 = "bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt"
const bech32Caps = "BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4"
const p2pkhPrefix = "bitcoin:1KP2uzAZYoNF6U8BkMBRdivLNujwSjtAQV"
const p2shPrefix = "bitcoin:3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"
const bech32Prefix = "bitcoin:bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt"
const bech32CapsPrefix = "bitcoin:BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4"

const bech32Regtest = "bcrt1qam64av6cyhjsgdwajjpe0l9z8ju4w7rjryecf3"
const bech32Testnet = "tb1q0g444vcyy53pza03zsel3tcwdejt9z5kq3w385aqgazpfxjhsr0qhds7p5"

const lnUrlInvoice =
  "lnurl1dp68gurn8ghj7mrw9e3xjarrda5kucn9v93kstnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhhxctdv4eqztzfux"

const lnInvoice =
  "LNBC6864270N1P05ZVJJPP5FPEHVLV3DD2R76065R9V0L3N8QV9MFWU9RYHVPJ5XSZ3P4HY734QDZHXYSV89EQYVMZQSNFW3PXCMMRDDPX7MMDYPP8YATWVD5ZQMMWYPQH2EM4WD6ZQVESYQ5YYUN4DE3KSGZ0DEK8J2GCQZPGXQRRSS6LQA5JLLVUGLW5TPSUG4S2TMT5C8FNERR95FUH8HTCSYX52CP3WZSWJ32XJ5GEWYFN7MG293V6JLA9CZ8ZNDHWDHCNNKUL2QKF6PJLSPJ2NL3J"

const checkOnChain = (address: string, network: Network) => {
  const { valid, paymentType } = parsePaymentDestination({
    destination: address,
    network,
    pubKey: "",
  })
  expect(valid).toBeTruthy()
  expect(paymentType).toBe("onchain")
}

const checkOnChainFail = (address: string, network: Network) => {
  const { valid } = parsePaymentDestination({
    destination: address,
    network,
    pubKey: "",
  })
  expect(valid).toBeFalsy()
}

describe("parsePaymentDestination", () => {
  it("invalidates empty input", () => {
    const result = parsePaymentDestination({
      destination: "",
      network: "mainnet",
      pubKey: "",
    })
    expect(result.valid).toBeFalsy()
  })

  it("validates an lnurl destination", () => {
    const result = parsePaymentDestination({
      destination: lnUrlInvoice,
      network: "mainnet",
      pubKey: "",
    })
    expect(result.valid).toBeTruthy()
    expect(result.paymentType).toBe("lnurl")
    expect(result.lnurl).toBe(lnUrlInvoice)
  })

  it("invalidates a network mismatch", () => {
    const result = parsePaymentDestination({
      // lnInovice is a mainnet invoice
      destination: lnInvoice,
      network: "testnet",
      pubKey: "",
    })
    expect(result.valid).toBeFalsy()
    expect(result.paymentType).toBe("lightning")
    expect(result.errorMessage).toBe("Invalid lightning invoice for testnet network")
  })

  describe("OnChain", () => {
    it("validates bitcoin address mainnet", () => {
      checkOnChain(p2pkh, "mainnet")
      checkOnChain(p2sh, "mainnet")
      checkOnChain(bech32, "mainnet")
      checkOnChain(bech32Caps, "mainnet")
      checkOnChain(p2pkhPrefix, "mainnet")
      checkOnChain(p2shPrefix, "mainnet")
      checkOnChain(bech32Prefix, "mainnet")
      checkOnChain(bech32CapsPrefix, "mainnet")

      checkOnChainFail(bech32Regtest, "mainnet")
      checkOnChainFail(bech32Testnet, "mainnet")
    })

    it("validates bitcoin address testnet", () => {
      checkOnChain(bech32Testnet, "testnet")

      checkOnChainFail(bech32Regtest, "testnet")
      checkOnChainFail(bech32, "testnet")
    })

    it("validates bitcoin address regtest", () => {
      checkOnChain(bech32Regtest, "regtest")

      checkOnChainFail(p2pkh, "regtest")
      checkOnChainFail(bech32Testnet, "regtest")
    })

    it("validates an onchain destination with amount ", () => {
      const addressAmount = "bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt?amount=0.00122"

      const { valid, paymentType, amount } = parsePaymentDestination({
        destination: addressAmount,
        network: "mainnet",
        pubKey: "",
      })
      expect(valid).toBeTruthy()
      expect(paymentType).toBe("onchain")
      expect(amount).toBe(122000)
    })

    it("validates an onchain destination without amount", () => {
      const addressNoAmount = "bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt"

      const { valid, paymentType, amount } = parsePaymentDestination({
        destination: addressNoAmount,
        network: "mainnet",
        pubKey: "",
      })
      expect(valid).toBeTruthy()
      expect(paymentType).toBe("onchain")
      expect(amount).toBeUndefined()
    })

    it("validates an onchain destination with a prefix", () => {
      const prefixAddress =
        "bitcoin:bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt?amount=0.00122"

      const { valid, paymentType, amount } = parsePaymentDestination({
        destination: prefixAddress,
        network: "mainnet",
        pubKey: "",
      })
      expect(valid).toBeTruthy()
      expect(paymentType).toBe("onchain")
      expect(amount).toBe(122000)
    })
  })

  describe("Lightning", () => {
    it("validates an opennode invoice", () => {
      const address =
        "LNBC6864270N1P05ZVJJPP5FPEHVLV3DD2R76065R9V0L3N8QV9MFWU9RYHVPJ5XSZ3P4HY734QDZHXYSV89EQYVMZQSNFW3PXCMMRDDPX7MMDYPP8YATWVD5ZQMMWYPQH2EM4WD6ZQVESYQ5YYUN4DE3KSGZ0DEK8J2GCQZPGXQRRSS6LQA5JLLVUGLW5TPSUG4S2TMT5C8FNERR95FUH8HTCSYX52CP3WZSWJ32XJ5GEWYFN7MG293V6JLA9CZ8ZNDHWDHCNNKUL2QKF6PJLSPJ2NL3J"

      const { valid, paymentType, errorMessage } = parsePaymentDestination({
        destination: address,
        network: "mainnet",
        pubKey: "",
      })
      expect(valid).toBeTruthy()
      expect(paymentType).toBe("lightning")
      expect(errorMessage).not.toBe("invoice has expired")
    })

    it("invalidates an expired opennode invoice", () => {
      const address =
        "LNBC11245410N1P05Z2LTPP52W2GX57TZVLM09SWZ8M0CAWGQPVTL3KUWZA836H5LG6HK2N2PRYQDPHXYSV89EQYVMJQSNFW3PXCMMRDDZXJMNWV4EZQST4VA6HXAPQXGU8G6QCQZPGXQRRSSVS7S2WT4GX90MQC9CVMA8UYDSTX5P0FA68V03U96HQDPFCT9DGDQQSENNAAGAXND6664CTKV88GMQ689LS0J7FFAD4DRN6SPLXAXZ0CQYZAU9Q"

      const { valid, paymentType, errorMessage } = parsePaymentDestination({
        destination: address,
        network: "mainnet",
        pubKey: "",
      })
      expect(valid).toBeFalsy()
      expect(paymentType).toBe("lightning")
      expect(errorMessage).toBe("invoice has expired")
    })

    it("validates a lightning invoice with prefix", () => {
      const address =
        "LIGHTNING:LNBC6864270N1P05ZVJJPP5FPEHVLV3DD2R76065R9V0L3N8QV9MFWU9RYHVPJ5XSZ3P4HY734QDZHXYSV89EQYVMZQSNFW3PXCMMRDDPX7MMDYPP8YATWVD5ZQMMWYPQH2EM4WD6ZQVESYQ5YYUN4DE3KSGZ0DEK8J2GCQZPGXQRRSS6LQA5JLLVUGLW5TPSUG4S2TMT5C8FNERR95FUH8HTCSYX52CP3WZSWJ32XJ5GEWYFN7MG293V6JLA9CZ8ZNDHWDHCNNKUL2QKF6PJLSPJ2NL3J"

      const { valid, paymentType, errorMessage } = parsePaymentDestination({
        destination: address,
        network: "mainnet",
        pubKey: "",
      })

      expect(valid).toBeTruthy()
      expect(paymentType).toBe("lightning")
      expect(errorMessage).not.toBe("invoice has expired")
    })
  })

  describe("IntraLedger handles", () => {
    it("validates a regular handle", () => {
      const { valid, paymentType, handle } = parsePaymentDestination({
        destination: "Nakamoto",
        network: "mainnet",
        pubKey: "",
      })
      expect(valid).toBeTruthy()
      expect(paymentType).toBe("intraledger")
      expect(handle).toBe("Nakamoto")
    })

    it("validates an http handle", () => {
      const { valid, paymentType, handle } = parsePaymentDestination({
        destination: "https://some.where/userName",
        network: "mainnet",
        pubKey: "",
      })
      expect(valid).toBeTruthy()
      expect(paymentType).toBe("intraledger")
      expect(handle).toBe("userName")
    })
  })
})
