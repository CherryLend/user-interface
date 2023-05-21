export type WalletType = {
  name: string;
  address: string;
  token: TokenType;
};

export type TokenType = {
  amount: number | string;
  symbol?: string | TokenSymbol;
  name?: string;
};

export type TVLDataType = {
  date: string;
  tvl: number;
  price: number;
  volume: number;
};

export type CryptoDataType = {
  name: string;
  apr: number;
  value: number;
};

export enum TokenSymbol {
  "ADA" = "₳",
}
