import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const sdk = ThirdwebSDK.fromPrivateKey(
  process.env.GOERLI_PRIVATE_KEY,
  "goerli"
);
const contract = sdk.getSignatureDrop(
  "0x9F08c7d4F4A1eB50F04179d61b325C9929CC9b80"
);
const presaleStartTime = new Date();

const preSalesClaimCondition = {
  startTime: presaleStartTime, // start the presale now
  maxQuantity: 2, // limit how many mints for this presale
  price: 0.001, // presale price
  snapshot: [], // limit minting to only certain addresses
};

const publicSalesClaimCondition = {
  startTime: presaleStartTime, // start the presale now
  maxQuantity: 3, // limit how many mints for this presale
  price: 0.002, // presale price
  snapshot: [], // limit minting to only certain addresses
};
await contract.claimConditions.set([
  preSalesClaimCondition,
  publicSalesClaimCondition,
]);
