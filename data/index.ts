import { CryptoDataType, TVLDataType, TokenSymbol, TokenType } from "@/types";

export const token: TokenType = {
  name: "ADA",
  amount: 6460000,
  symbol: TokenSymbol.ADA,
};

export const tvlData: TVLDataType[] = Array(20)
  .fill(0)
  .map((_, i) => ({
    date: "2022-01-" + (i + 1).toString().padStart(2, "0"),
    tvl: 2000000 * Math.random(),
    price: 1.55 * Math.random(),
    volume: 70000 * Math.random(),
  }));

export const cryptoData: CryptoDataType[] = [
  {
    name: "AADA",
    apr: 4.2,
    value: 1500,
  },
  {
    name: "ADA",
    apr: 3.8,
    value: 3000,
  },
  {
    name: "WMT",
    apr: 5.1,
    value: 1200,
  },
  {
    name: "MELD",
    apr: 6.2,
    value: 800,
  },
  {
    name: "iUSD",
    apr: 2.5,
    value: 2000,
  },
  {
    name: "LQ",
    apr: 1.9,
    value: 500,
  },
  {
    name: "JAGIX",
    apr: 4.9,
    value: 1000,
  },
  {
    name: "CNETA",
    apr: 3.5,
    value: 700,
  },
  {
    name: "COPI",
    apr: 4.7,
    value: 900,
  },
  {
    name: "WRT",
    apr: 2.9,
    value: 1800,
  },
  {
    name: "VYFI",
    apr: 8.2,
    value: 600,
  },
  {
    name: "MIN",
    apr: 7.5,
    value: 100,
  },
];
