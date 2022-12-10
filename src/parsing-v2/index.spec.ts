/* eslint-disable max-lines */
import {
  InvalidLightningDestinationReason,
  Network,
  OnchainPaymentDestination,
  parsePaymentDestination,
  PaymentType,
} from "."

beforeAll(() => {
  jest.setSystemTime(1598110996000) // Aug 22 2020 10:43
})

const p2pkh = "1KP2uzAZYoNF6U8BkMBRdivLNujwSjtAQV"
const p2sh = "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"
const bech32 = "bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt"
const bech32Caps = "BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4"
const p2tr = "bc1p7whyata0zqnq7zss8ystshjyneegevjcvd4vcrtgzpzcz5ldvemsnxlatd"
const p2pkhPrefix = "bitcoin:1KP2uzAZYoNF6U8BkMBRdivLNujwSjtAQV"
const p2shPrefix = "bitcoin:3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"
const bech32Prefix = "bitcoin:bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt"
const bech32CapsPrefix = "bitcoin:BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4"

const bech32Regtest = "bcrt1qam64av6cyhjsgdwajjpe0l9z8ju4w7rjryecf3"
const bech32Signet = "tb1q0g444vcyy53pza03zsel3tcwdejt9z5kq3w385aqgazpfxjhsr0qhds7p5"

const lnUrlInvoice =
  "lnurl1dp68gurn8ghj7mrw9e3xjarrda5kucn9v93kstnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhhxctdv4eqztzfux"
const lnUrlInvoiceWithFallback = `https://fallback.com?lightning=${lnUrlInvoice}`
const lnUrlInvoiceWithProtocol = `lightning:${lnUrlInvoice}`
const internalLnAddress = "username@pay.bbw.sv"
const externalLnAddress = "username@external.com"

const lnInvoice =
  "LNBC6864270N1P05ZVJJPP5FPEHVLV3DD2R76065R9V0L3N8QV9MFWU9RYHVPJ5XSZ3P4HY734QDZHXYSV89EQYVMZQSNFW3PXCMMRDDPX7MMDYPP8YATWVD5ZQMMWYPQH2EM4WD6ZQVESYQ5YYUN4DE3KSGZ0DEK8J2GCQZPGXQRRSS6LQA5JLLVUGLW5TPSUG4S2TMT5C8FNERR95FUH8HTCSYX52CP3WZSWJ32XJ5GEWYFN7MG293V6JLA9CZ8ZNDHWDHCNNKUL2QKF6PJLSPJ2NL3J"

const lntbInvoice =
  "lntb1m1pd2awsppp54q20f42rpuzapqpxl4l5a2vhrm89pth7rj0nv3fyqvkl89hc8myqdqqcqzysms67f23xktazlazsjdwvqv7j59c34q5vqp4gnmddpkmlwqpufecxf9ledyq0ma495wrak26nvq5qcg6lgw7zwfy5yq4w54ux7qay3tsqrg02mh"

const lnbcrtInvoice =
  "lnbcrt1u1psjhly3pp5mxvvnc6aw00vtvx004xrt05vfmy3nthxdd5cmyfxv45y66mfpxxqdqqcqzpgxqyz5vqsp5v399u058lal7u3dzswtntktg93wzdtggr2sqqkzy5t6ffd0n4pgq9qyyssqk204pw6as2599mdrefqx5lrycjax5559xnv2lrp9m4wpqavk6enkmtme09yxdt56552mx6v8eg9gpwxvl9mn0t5dea2gtmajzmukffsph8074z"

const expiredLNInvoice =
  "LNBC11245410N1P05Z2LTPP52W2GX57TZVLM09SWZ8M0CAWGQPVTL3KUWZA836H5LG6HK2N2PRYQDPHXYSV89EQYVMJQSNFW3PXCMMRDDZXJMNWV4EZQST4VA6HXAPQXGU8G6QCQZPGXQRRSSVS7S2WT4GX90MQC9CVMA8UYDSTX5P0FA68V03U96HQDPFCT9DGDQQSENNAAGAXND6664CTKV88GMQ689LS0J7FFAD4DRN6SPLXAXZ0CQYZAU9Q"

const checkOnChain = (address: string, network: Network) => {
  const destination = parsePaymentDestination({
    destination: address,
    network,
    pubKey: "",
    lnAddressDomains: [],
  })

  if (destination.paymentType !== PaymentType.Onchain) {
    throw Error("Expected onchain payment")
  }
  if (destination.valid !== true) {
    throw Error("Expected valid payment destination")
  }
}

const checkOnChainFail = (address: string, network: Network) => {
  const destination = parsePaymentDestination({
    destination: address,
    network,
    pubKey: "",
    lnAddressDomains: [],
  })
  if (destination.paymentType !== PaymentType.Onchain) {
    throw Error("Expected onchain payment")
  }
  if (destination.valid !== false) {
    throw Error("Expected invalid payment destination")
  }
}

describe("parsePaymentDestination validations", () => {
  it("classifies empty input as unknown", () => {
    const result = parsePaymentDestination({
      destination: "",
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })
    expect(result.paymentType).toBe(PaymentType.Unknown)
  })

  it("validates an lnurl destination", () => {
    const result = parsePaymentDestination({
      destination: lnUrlInvoice,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })
    expect(result).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Lnurl,
        valid: true,
        lnurl: lnUrlInvoice,
      }),
    )
  })

  it("validates an lnurl destination with fallback url", () => {
    const result = parsePaymentDestination({
      destination: lnUrlInvoiceWithFallback,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })
    expect(result).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Lnurl,
        valid: true,
        lnurl: lnUrlInvoice,
      }),
    )
  })

  it("validates an lnurl destination with a protocol", () => {
    const result = parsePaymentDestination({
      destination: lnUrlInvoiceWithProtocol,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })
    expect(result).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Lnurl,
        valid: true,
        lnurl: lnUrlInvoice,
      }),
    )
  })

  it("validates an internal lightning address", () => {
    const result = parsePaymentDestination({
      destination: internalLnAddress,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: ["pay.bbw.sv"],
    })
    expect(result).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Intraledger,
        handle: "username",
      }),
    )
  })

  it("validates an external lightning address", () => {
    const result = parsePaymentDestination({
      destination: externalLnAddress,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: ["pay.bbw.sv"],
    })
    expect(result).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Lnurl,
        valid: true,
        lnurl: externalLnAddress,
      }),
    )
  })

  it("validates a lightning address with protocol", () => {
    const result = parsePaymentDestination({
      destination: `lightning:${externalLnAddress}`,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: ["pay.bbw.sv"],
    })
    expect(result).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Lnurl,
        valid: true,
        lnurl: externalLnAddress,
      }),
    )
  })
})

describe("parsePaymentDestination OnChain", () => {
  it("validates bitcoin address mainnet", () => {
    checkOnChain(p2pkh, "mainnet")
    checkOnChain(p2sh, "mainnet")
    checkOnChain(bech32, "mainnet")
    checkOnChain(bech32Caps, "mainnet")
    checkOnChain(p2pkhPrefix, "mainnet")
    checkOnChain(p2shPrefix, "mainnet")
    checkOnChain(bech32Prefix, "mainnet")
    checkOnChain(bech32CapsPrefix, "mainnet")
    checkOnChain(p2tr, "mainnet")

    checkOnChainFail(bech32Regtest, "mainnet")
    checkOnChainFail(bech32Signet, "mainnet")
  })

  it("validates bitcoin address signet", () => {
    checkOnChain(bech32Signet, "signet")

    checkOnChainFail(bech32Regtest, "signet")
    checkOnChainFail(bech32, "signet")
  })

  it("validates bitcoin address regtest", () => {
    checkOnChain(bech32Regtest, "regtest")

    checkOnChainFail(p2pkh, "regtest")
    checkOnChainFail(bech32Signet, "regtest")
  })

  it("validates an onchain destination with amount ", () => {
    const addressAmount = "bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt?amount=0.00122"

    const paymentDestination = parsePaymentDestination({
      destination: addressAmount,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Onchain,
        valid: true,
        amount: 122000,
      }),
    )
  })

  it("validates an onchain destination without amount", () => {
    const addressNoAmount = "bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt"

    const paymentDestination = parsePaymentDestination({
      destination: addressNoAmount,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Onchain,
        valid: true,
        amount: undefined,
      }),
    )
  })

  it("validates an onchain destination with a label", () => {
    const addressLabel = "bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt?label=test%20label"

    const paymentDestination = parsePaymentDestination({
      destination: addressLabel,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Onchain,
        valid: true,
        memo: "test label",
      }),
    )
  })

  it("validates an onchain destination with a message", () => {
    const addressMessage =
      "bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt?message=test%20message"

    const paymentDestination = parsePaymentDestination({
      destination: addressMessage,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Onchain,
        valid: true,
        memo: "test message",
      }),
    )
  })

  it("returns the label as the memo when label and message are both present", () => {
    const addressLabelAndMessage =
      "bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt?label=test%20label&message=test%20message"

    const paymentDestination = parsePaymentDestination({
      destination: addressLabelAndMessage,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Onchain,
        valid: true,
        memo: "test label",
      }),
    )
  })

  it("validates an onchain destination with a prefix", () => {
    const prefixAddress =
      "bitcoin:bc1qdx09anw82zhujxzzsn56mruv8qvd33czzy9apt?amount=0.00122"

    const paymentDestination = parsePaymentDestination({
      destination: prefixAddress,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Onchain,
        valid: true,
        amount: 122000,
      }),
    )
  })
})

describe("parsePaymentDestination Lightning", () => {
  it("invalidates a mainnet invoice on signet", () => {
    const paymentDestination = parsePaymentDestination({
      // lnInovice is a mainnet invoice
      destination: lnInvoice,
      network: "signet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: false,
        paymentType: PaymentType.Lightning,
        invalidReason: InvalidLightningDestinationReason.WrongNetwork,
      }),
    )
  })

  it("invalidates a regtest invoice on signet", () => {
    const paymentDestination = parsePaymentDestination({
      // lnInovice is a regtest invoice
      destination: lnbcrtInvoice,
      network: "signet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: false,
        paymentType: PaymentType.Lightning,
        invalidReason: InvalidLightningDestinationReason.WrongNetwork,
      }),
    )
  })

  it("invalidates a signet invoice on mainnet", () => {
    // lntbInovice is a signet invoice
    const paymentDestination = parsePaymentDestination({
      destination: lntbInvoice,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: false,
        paymentType: PaymentType.Lightning,
        invalidReason: InvalidLightningDestinationReason.WrongNetwork,
      }),
    )
  })

  it("invalidates a regtest invoice on mainnet", () => {
    // lntbInovice is a regtest invoice
    const paymentDestination = parsePaymentDestination({
      destination: lnbcrtInvoice,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: false,
        paymentType: PaymentType.Lightning,
        invalidReason: InvalidLightningDestinationReason.WrongNetwork,
      }),
    )
  })

  it("invalidates a signet invoice on regtest", () => {
    // lntbInovice is a signet invoice
    const paymentDestination = parsePaymentDestination({
      destination: lntbInvoice,
      network: "regtest",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: false,
        paymentType: PaymentType.Lightning,
        invalidReason: InvalidLightningDestinationReason.WrongNetwork,
      }),
    )
  })

  it("invalidates a mainnet invoice on regtest", () => {
    // lntbInovice is a mainnet invoice
    const paymentDestination = parsePaymentDestination({
      destination: lnInvoice,
      network: "regtest",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: false,
        paymentType: PaymentType.Lightning,
        invalidReason: InvalidLightningDestinationReason.WrongNetwork,
      }),
    )
  })

  it("detects a lightning param in an onchain address", () => {
    const address =
      "bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6"
    const paymentDestination = parsePaymentDestination({
      destination: address,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: true,
        paymentRequest:
          "lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6",
        paymentType: PaymentType.Lightning,
      }),
    )
  })

  it("fallbacks to on chain address if the lightning param has expired", () => {
    const address = `bitcoin:${bech32}?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=${expiredLNInvoice}`
    const paymentDestination = parsePaymentDestination({
      destination: address,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual<OnchainPaymentDestination>(
      expect.objectContaining<OnchainPaymentDestination>({
        valid: true,
        paymentType: PaymentType.Onchain,
        address: bech32,
      }),
    )
  })

  it("validates an opennode invoice", () => {
    const paymentDestination = parsePaymentDestination({
      destination: lnInvoice,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentRequest: lnInvoice.toLowerCase(),
        valid: true,
        paymentType: PaymentType.Lightning,
      }),
    )
  })

  it("invalidates an expired opennode invoice", () => {
    const paymentDestination = parsePaymentDestination({
      destination: expiredLNInvoice,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: false,
        paymentType: PaymentType.Lightning,
      }),
    )
  })

  it("validates a lightning invoice with prefix", () => {
    const address = `LIGHTNING:${lnInvoice}`

    const paymentDestination = parsePaymentDestination({
      destination: address,
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: true,
        paymentType: PaymentType.Lightning,
      }),
    )
  })
})

describe("parsePaymentDestination IntraLedger handles", () => {
  it("validates a regular handle", () => {
    const paymentDestination = parsePaymentDestination({
      destination: "Nakamoto",
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })
    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Intraledger,
        handle: "Nakamoto",
      }),
    )
  })

  it("validates an http handle", () => {
    const paymentDestination = parsePaymentDestination({
      destination: "https://some.where/userName",
      network: "mainnet",
      pubKey: "",
      lnAddressDomains: [],
    })
    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Intraledger,
        handle: "userName",
      }),
    )
  })
})
