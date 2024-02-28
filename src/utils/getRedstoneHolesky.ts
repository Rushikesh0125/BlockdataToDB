import { defineChain } from "viem";

export const rsHolesky = defineChain({
  id: 17001,
  name: "rsHolesky",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.holesky.redstone.xyz"],
      webSocket: ["wss://rpc.holesky.redstone.xyz/ws"],
      indexer: ["https://indexer.holesky.redstone.xyz/trpc"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.holesky.redstone.xyz" },
  },
});
