/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Portfolio: undefined;
  Send: undefined;
};

export type PortfolioParamList = {
  PortfolioScreen: undefined;
};

export type SendParamList = {
  SendScreen: undefined;
};

export type Category = "CRYPTO" | "REWARDS" | "GIFT_CARD";

export type Denomination = "MILES" | "POINTS" | "STARS";

export type Holding = {
  id?: number;
  name: string;
  category: Category;
  symbol?: string;
  amount: number;
  value_usd?: number;
  icon_url: string;
  denomination: Denomination;
  number?: string;
  pin?: string;
};

export type DefinedType = any;
