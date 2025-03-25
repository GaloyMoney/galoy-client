import { parsePaymentDestination } from "./parsing/index";

const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Usage: blink-parse <destination> [network] [lnAddressDomains]");
  console.log("Example: blink-parse lnbc1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmwwd5kgetjypeh2ursdae8g6twvus8g6rfwvs8qun0dfjkxaq mainnet blink.sv,wallet.blink.sv");
  process.exit(1);
}

const destination = args[0];
const network = args[1] || "mainnet"; // Default to mainnet if not specified
const lnAddressDomains = args[2] ? args[2].split(',') : []; // Default to empty array if not specified

try {
  const result = parsePaymentDestination({
    destination,
    network: network as "mainnet" | "signet" | "regtest",
    lnAddressDomains,
  });

  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error("Error parsing payment destination:", error);
  process.exit(1);
}
