/* eslint-disable max-lines */
import {
  InvalidIntraledgerReason,
  InvalidLightningDestinationReason,
  OnchainPaymentDestination,
  parsePaymentDestination,
  PaymentType,
} from "."

import type { Network } from "./types"

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
const lnUrlW = `lnurlw://cards.blink.sv/cards?p=ABCABCABCABCABCBACBACB&c=ABCABCABCABC`
const lnUrlP = `lnurlp://testcallback.com/abc`
const lnUrlInvoiceWithFallback = `https://fallback.com?lightning=${lnUrlInvoice}`
const lnUrlInvoiceWithProtocol = `lightning:${lnUrlInvoice}`
const internalLnAddress = "username@blink.sv"
const externalLnAddress = "username@external.com"

const lnInvoice =
  "LNBC6864270N1P05ZVJJPP5FPEHVLV3DD2R76065R9V0L3N8QV9MFWU9RYHVPJ5XSZ3P4HY734QDZHXYSV89EQYVMZQSNFW3PXCMMRDDPX7MMDYPP8YATWVD5ZQMMWYPQH2EM4WD6ZQVESYQ5YYUN4DE3KSGZ0DEK8J2GCQZPGXQRRSS6LQA5JLLVUGLW5TPSUG4S2TMT5C8FNERR95FUH8HTCSYX52CP3WZSWJ32XJ5GEWYFN7MG293V6JLA9CZ8ZNDHWDHCNNKUL2QKF6PJLSPJ2NL3J"

const lntbInvoice =
  "lntb1m1pd2awsppp54q20f42rpuzapqpxl4l5a2vhrm89pth7rj0nv3fyqvkl89hc8myqdqqcqzysms67f23xktazlazsjdwvqv7j59c34q5vqp4gnmddpkmlwqpufecxf9ledyq0ma495wrak26nvq5qcg6lgw7zwfy5yq4w54ux7qay3tsqrg02mh"

const lnbcrtInvoice =
  "lnbcrt1u1psjhly3pp5mxvvnc6aw00vtvx004xrt05vfmy3nthxdd5cmyfxv45y66mfpxxqdqqcqzpgxqyz5vqsp5v399u058lal7u3dzswtntktg93wzdtggr2sqqkzy5t6ffd0n4pgq9qyyssqk204pw6as2599mdrefqx5lrycjax5559xnv2lrp9m4wpqavk6enkmtme09yxdt56552mx6v8eg9gpwxvl9mn0t5dea2gtmajzmukffsph8074z"

const expiredLNInvoice =
  "LNBC11245410N1P05Z2LTPP52W2GX57TZVLM09SWZ8M0CAWGQPVTL3KUWZA836H5LG6HK2N2PRYQDPHXYSV89EQYVMJQSNFW3PXCMMRDDZXJMNWV4EZQST4VA6HXAPQXGU8G6QCQZPGXQRRSSVS7S2WT4GX90MQC9CVMA8UYDSTX5P0FA68V03U96HQDPFCT9DGDQQSENNAAGAXND6664CTKV88GMQ689LS0J7FFAD4DRN6SPLXAXZ0CQYZAU9Q"

const cashappInvoiceQR =
  "bitcoin:BC1Q5J58AAKAJGNZ78W2924WAJKGQLPS5CT6QXGR5E?amount=0.00025177&lightning=LNBC251770N1PJKUCFDDQDGDSHX6PQG9C8QPP5T9ZKQFZW905W3A2VZEL4VCZHQG40Q9FM0VZGCJ3DWC203KT9V4MQSP5DEYZWTU6HSSSLKDEWFH3FYR8K2YD3L7XA8KLNSVC4JP4XFK6LTCS9QRSGQCQPCXQY8AYQRZJQV06K0M23T593PNGL0JT7N9WZNP64FQNGVCTZ7VTS8NQ4TUKVTLJQZG0K5QQT0QQQSQQQQQQQQQQQQQQ9GRZJQTSJY9P55GDCEEVP36FVDMRKXQVZFHY8AK2TGC5ZGTJTRA9XLAZ97Z965UQQTQCQQQQQQQQQQQQQQQQQ9G6LA8G90SULF7X0XAF7XUMATK57KF733X04S8027XKZZJK945DZYKZWTQY63FARFWYSNKDGHHMU74KXVE9KUR3624ETHDKT60CGCJL2SQZ9V7LT"

const btcpayServerQR =
  "bitcoin:BC1QUZ8NQRJ3UX86QEHT4F6QQNC75XMNRGCE06ASCH?amount=0.00025885&pj=https://pay.pavlenex.com/BTC/pj&lightning=LNBC258850N1PJKUC3KSP5DKXUDY39Z3PAG74FGE6LGCWA6UHAN084MUU3SRPLXML4NY8FSLPSPP58JJ3Q9A6C9EQ2CTPRCUNGF5RNPQ6A9TRCLSD6GFSQ0JRWZWAX3PQDRQ2PSKJEPQW3HJQ5RPWEKX2MN90QSYGMMWV96XJMMWYQ5Y7UNYV4EZQJ2Y8GS9V5RTXVCNY7PKVEV8Q6262DPN2DJPD5UNXJEFXQR3J0CQPJRZJQTTFTVQU0F5SNECKEP3LKWDUT7MMHHPCYJMLMNJN4HZE8ED7PQ88XRRTWYQQ9USQQYQQQZNDQQQQQXCQ2Q9QXPQYSGQKYWUNGZ5TNRDXKLRHW968GMW3TUECTSSU4STH3MRWLJDUEG9JNVRNFYMJJZN8J5GAWEURCFRW6477MZTVZQAAQX5678NP8TPGPM6EPCQ9NWAGG"

const checkOnChain = (address: string, network: Network) => {
  const destination = parsePaymentDestination({
    destination: address,
    network,
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
      lnAddressDomains: [],
    })
    expect(result.paymentType).toBe(PaymentType.NullInput)
  })

  it("validates an lnurl destination", () => {
    const result = parsePaymentDestination({
      destination: lnUrlInvoice,
      network: "mainnet",
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

  it("validates an lnurlw destination", () => {
    const result = parsePaymentDestination({
      destination: lnUrlW,
      network: "mainnet",
      lnAddressDomains: [],
    })
    expect(result).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Lnurl,
        valid: true,
        lnurl: lnUrlW,
      }),
    )
  })

  it("validates an lnUrlP destination", () => {
    const result = parsePaymentDestination({
      destination: lnUrlP,
      network: "mainnet",
      lnAddressDomains: [],
    })
    expect(result).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Lnurl,
        valid: true,
        lnurl: lnUrlP,
      }),
    )
  })

  it("validates an lnurl destination with fallback url", () => {
    const result = parsePaymentDestination({
      destination: lnUrlInvoiceWithFallback,
      network: "mainnet",
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
      lnAddressDomains: ["blink.sv"],
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
      lnAddressDomains: ["blink.sv"],
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
      lnAddressDomains: ["blink.sv"],
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
      // lnInvoice is a mainnet invoice
      destination: lnInvoice,
      network: "signet",
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
      // lnInvoice is a regtest invoice
      destination: lnbcrtInvoice,
      network: "signet",
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
    // lntbInvoice is a signet invoice
    const paymentDestination = parsePaymentDestination({
      destination: lntbInvoice,
      network: "mainnet",
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
    // lntbInvoice is a regtest invoice
    const paymentDestination = parsePaymentDestination({
      destination: lnbcrtInvoice,
      network: "mainnet",
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
    // lntbInvoice is a signet invoice
    const paymentDestination = parsePaymentDestination({
      destination: lntbInvoice,
      network: "regtest",
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
    // lntbInvoice is a mainnet invoice
    const paymentDestination = parsePaymentDestination({
      destination: lnInvoice,
      network: "regtest",
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

  it("detects a lightning param in an onchain address 1", () => {
    jest.setSystemTime(1598110996000) // Aug 22 2020 10:43

    const address =
      "bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6"
    const paymentDestination = parsePaymentDestination({
      destination: address,
      network: "mainnet",
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

  it("detects a lightning param in an onchain address 2", () => {
    jest.setSystemTime(1701753935000) // 2023-12-04 23:25:35 UTC

    const address = cashappInvoiceQR
    const paymentDestination = parsePaymentDestination({
      destination: address,
      network: "mainnet",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: true,
        paymentRequest:
          "lnbc251770n1pjkucfddqdgdshx6pqg9c8qpp5t9zkqfzw905w3a2vzel4vczhqg40q9fm0vzgcj3dwc203kt9v4mqsp5deyzwtu6hssslkdewfh3fyr8k2yd3l7xa8klnsvc4jp4xfk6ltcs9qrsgqcqpcxqy8ayqrzjqv06k0m23t593pngl0jt7n9wznp64fqngvctz7vts8nq4tukvtljqzg0k5qqt0qqqsqqqqqqqqqqqqqq9grzjqtsjy9p55gdceevp36fvdmrkxqvzfhy8ak2tgc5zgtjtra9xlaz97z965uqqtqcqqqqqqqqqqqqqqqqq9g6la8g90sulf7x0xaf7xumatk57kf733x04s8027xkzzjk945dzykzwtqy63farfwysnkdghhmu74kxve9kur3624ethdkt60cgcjl2sqz9v7lt",
        paymentType: PaymentType.Lightning,
      }),
    )
  })

  it("detects a lightning param in an onchain address 3", () => {
    jest.setSystemTime(1701750135000)

    const address = btcpayServerQR
    const paymentDestination = parsePaymentDestination({
      destination: address,
      network: "mainnet",
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: true,
        paymentRequest:
          "lnbc258850n1pjkuc3ksp5dkxudy39z3pag74fge6lgcwa6uhan084muu3srplxml4ny8fslpspp58jj3q9a6c9eq2ctprcungf5rnpq6a9trclsd6gfsq0jrwzwax3pqdrq2pskjepqw3hjq5rpwekx2mn90qsygmmwv96xjmmwyq5y7unyv4ezqj2y8gs9v5rtxvcny7pkvev8q6262dpn2djpd5unxjefxqr3j0cqpjrzjqttftvqu0f5sneckep3lkwdut7mmhhpcyjmlmnjn4hze8ed7pq88xrrtwyqq9usqqyqqqzndqqqqqxcq2q9qxpqysgqkywungz5tnrdxklrhw968gmw3tuectssu4sth3mrwljdueg9jnvrnfymjjzn8j5gaweurcfrw6477mztvzqaaqx5678np8tpgpm6epcq9nwagg",
        paymentType: PaymentType.Lightning,
      }),
    )
  })

  it("fallbacks to on chain address if the lightning param has expired", () => {
    const address = `bitcoin:${bech32}?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=${expiredLNInvoice}`
    const paymentDestination = parsePaymentDestination({
      destination: address,
      network: "mainnet",
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
    jest.setSystemTime(1598110996000) // Aug 22 2020 10:43

    const paymentDestination = parsePaymentDestination({
      destination: lnInvoice,
      network: "mainnet",
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
    jest.setSystemTime(1598110996000) // Aug 22 2020 10:43

    const address = `LIGHTNING:${lnInvoice}`

    const paymentDestination = parsePaymentDestination({
      destination: address,
      network: "mainnet",
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
      lnAddressDomains: [],
    })
    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Intraledger,
        handle: "Nakamoto",
      }),
    )
  })

  it("validates a handle with flag", () => {
    const paymentDestination = parsePaymentDestination({
      destination: "Nakamoto+usd",
      network: "mainnet",
      lnAddressDomains: [],
    })
    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.IntraledgerWithFlag,
        handle: "Nakamoto",
        flag: "usd",
      }),
    )
  })

  it("validates a handle with invalid flag", () => {
    const paymentDestination = parsePaymentDestination({
      destination: "Nakamoto+btc",
      network: "mainnet",
      lnAddressDomains: [],
    })
    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Unknown,
        valid: false,
      }),
    )
  })

  it("validates a handle with flag and bad username", () => {
    const paymentDestination = parsePaymentDestination({
      destination: "me+usd",
      network: "mainnet",
      lnAddressDomains: [],
    })
    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Unknown,
        valid: false,
      }),
    )
  })

  it("validates an http handle", () => {
    const paymentDestination = parsePaymentDestination({
      destination: "https://some.where/userName",
      network: "mainnet",
      lnAddressDomains: ["some.where"],
    })
    expect(paymentDestination).toEqual(
      expect.objectContaining({
        handle: "userName",
        paymentType: PaymentType.Intraledger,
      }),
    )
  })

  it("validates an http handle with invalid domain", () => {
    const paymentDestination = parsePaymentDestination({
      destination: "https://some.where/userName",
      network: "mainnet",
      lnAddressDomains: [],
    })
    expect(paymentDestination).toEqual(
      expect.objectContaining({
        valid: false,
        paymentType: PaymentType.Intraledger,
        invalidReason: InvalidIntraledgerReason.WrongDomain,
      }),
    )
  })

  it("validates an http handle with flag", () => {
    const paymentDestination = parsePaymentDestination({
      destination: "https://some.where/userName+usd",
      network: "mainnet",
      lnAddressDomains: ["some.where"],
    })
    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.IntraledgerWithFlag,
        handle: "userName",
        flag: "usd",
      }),
    )
  })
})

describe("parsePaymentDestination - Phone Number as IntraLedger Payment", () => {
  const networks: Network[] = ["mainnet", "signet", "regtest"]

  test.each(
    networks.flatMap((network) => [
      {
        description: `validates a phone number as an intraledger payment on ${network}`,
        destination: "+50370123456",
        network,
        expected: {
          paymentType: PaymentType.Intraledger,
          handle: "+50370123456",
          valid: true,
        },
      },
      {
        description: `validates a phone number without plus symbol as an intraledger payment on ${network}`,
        destination: "50370123456",
        network,
        expected: {
          paymentType: PaymentType.Intraledger,
          handle: "50370123456",
          valid: true,
        },
      },
      {
        description: `validates a phone number with max length as an intraledger payment on ${network}`,
        destination: "+12025550123",
        network,
        expected: {
          paymentType: PaymentType.Intraledger,
          handle: "+12025550123",
          valid: true,
        },
      },
      {
        description: `invalidates a phone number without country code or plus symbol on ${network}`,
        destination: "70123456",
        network,
        expected: {
          paymentType: PaymentType.Unknown,
          valid: false,
        },
      },
      {
        description: `invalidates a phone number that is too short on ${network}`,
        destination: "+5037012",
        network,
        expected: {
          paymentType: PaymentType.Unknown,
          valid: false,
        },
      },
      {
        description: `invalidates a phone number that is too long on ${network}`,
        destination: "+50370123456574898",
        network,
        expected: {
          paymentType: PaymentType.Unknown,
          valid: false,
        },
      },
      {
        description: `invalidates a phone number with an unassigned country code on ${network}`,
        destination: "+99912345678",
        network,
        expected: {
          paymentType: PaymentType.Unknown,
          valid: false,
        },
      },
    ]),
  )("$description", ({ destination, network, expected }) => {
    const paymentDestination = parsePaymentDestination({
      destination,
      network,
      lnAddressDomains: [],
    })

    expect(paymentDestination).toEqual(expect.objectContaining(expected))
  })
})

describe("parsePaymentDestination Merchant QR", () => {
  it("validates a merchant QR code on mainnet", () => {
    const merchantQR =
      "00020129530023za.co.electrum.picknpay.za.co.ecentric0122RD2HAK3KTI53EC/confirm520458125303710540115802ZA5916cryptoqrtestscan6002CT63049BE2"

    const paymentDestination = parsePaymentDestination({
      destination: merchantQR,
      network: "mainnet",
      lnAddressDomains: ["blink.sv"],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Lnurl,
        valid: true,
        lnurl:
          "00020129530023za.co.electrum.picknpay.za.co.ecentric0122RD2HAK3KTI53EC%2Fconfirm520458125303710540115802ZA5916cryptoqrtestscan6002CT63049BE2@cryptoqr.net",
      }),
    )
  })

  it("validates a merchant QR code on signet", () => {
    const merchantQR =
      "00020129530023za.co.electrum.picknpay.za.co.ecentric0122RD2HAK3KTI53EC/confirm520458125303710540115802ZA5916cryptoqrtestscan6002CT63049BE2"

    const paymentDestination = parsePaymentDestination({
      destination: merchantQR,
      network: "signet",
      lnAddressDomains: ["blink.sv"],
    })

    expect(paymentDestination).toEqual(
      expect.objectContaining({
        paymentType: PaymentType.Lnurl,
        valid: true,
        lnurl:
          "00020129530023za.co.electrum.picknpay.za.co.ecentric0122RD2HAK3KTI53EC%2Fconfirm520458125303710540115802ZA5916cryptoqrtestscan6002CT63049BE2@staging.cryptoqr.net",
      }),
    )
  })
})
