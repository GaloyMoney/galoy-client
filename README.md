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
import { parsePaymentDestination } from "@blinkbitcoin/client"

const { valid, paymentType, amount } = parsePaymentDestination({
  destination: "username or invoice or bitcoin address",
  network: "mainnet", // or signet or regtest
})
```

## Test

Test with Jest framework:

```bash
pnpm test
```

## Build

Build production (distribution) files in **dist** folder:

```bash
pnpm build
```

## Local development


<details>
<summary>using pnpm</summary>

Run:

```bash
pnpm link --global
```

and in your test project run:

```bash
pnpm link --global @blinkbitcoin/client
```

If you want to remove the link, run:

```bash
# in your test project
pnpm unlink @blinkbitcoin/client

# in blinkbitcoin/client folder
pnpm unlink --global
```
</details>

<details>
<summary>using yarn</summary>

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
</details>

<details>
<summary>using yalc</summary>

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
</details>
