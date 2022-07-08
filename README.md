# Galoy Client

JavaScript client library for the Galoy stack. This is used in front-end applications like the web and mobile wallets.

## Installation

Install the package with:

```bash
yarn add @galoymoney/client
```

## Usage

### parsePaymentDestination

```js
import { parsePaymentDestination } from "@galoymoney/client"

const { valid, paymentType, amount } = parsePaymentDestination({
  destination: "username or invoice or bitcoin address",
  network: "mainnet", // or testnet or regtest
  pubKey: "nodePubKey",
})
```

## Test

Test with Jest framework:

```bash
yarn test
```

## Build

Build production (distribution) files in **dist** folder:

```bash
yarn build
```

## Local development

### using yarn

Run:

```bash
yarn link
```

and in your test project run:

```bash
yarn link @galoymoney/client
```

If you want to remove the symlink, run:

```bash
# in your test project
yarn unlink @galoymoney/client

# in galoymoney/client folder
yarn unlink
```

### using yalc

Run:

```bash
# in galoymoney/client folder
yalc publish
```

in your test project run:

```bash
yalc add @galoymoney/client
```

If you want to remove the symlink, run:

```bash
# in your test project
yalc remove @galoymoney/client
```

to update changes, you have to run <code>yalc publish</code> before run:

```bash
# in your test project
yalc update
```
