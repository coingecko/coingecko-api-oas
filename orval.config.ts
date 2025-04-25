import { defineConfig } from "orval";

const config: ReturnType<typeof defineConfig> = defineConfig({
  "coingecko-public-api": {
    output: {
      client: "fetch",
      baseUrl: "https://api.coingecko.com/api/v3",
      target: "./src/coingecko-public-api.ts",
      biome: true,
      override: {
        mutator: {
          path: "./src/fetch.ts",
          name: "request",
        },
      },
    },
    input: {
      target: "./coingecko-public-api-v3.json",
    },
  },
  "coingecko-pro-api": {
    output: {
      client: "fetch",
      baseUrl: "https://pro-api.coingecko.com/api/v3",
      target: "./src/coingecko-pro-api.ts",
      biome: true,
      override: {
        mutator: {
          path: "./src/fetch.ts",
          name: "request",
        },
      },
    },
    input: {
      target: "./coingecko-pro-api-v3.json",
    },
  },
  "coingecko-onchain-api": {
    output: {
      client: "fetch",
      baseUrl: "https://pro-api.coingecko.com/api/v3/onchain",
      target: "./src/coingecko-onchain-api.ts",
      biome: true,
      override: {
        mutator: {
          path: "./src/fetch.ts",
          name: "request",
        },
      },
    },
    input: {
      target: "./on-chain-dex-api-beta.json",
    },
  },
});

export default config;
