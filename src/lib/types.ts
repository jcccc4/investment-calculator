export type Inputs = {
  startingAmount: number;
  after: number;
  returnRate: number;
  compound: string;
  addOn: number;
  type: string;
  each: string;
};

export type Data = {
  year: number;
  deposit: number;
  interest: number;
  endingBalance: number;
};

export const initialData: Inputs = {
  startingAmount: 20000,
  after: 10,
  returnRate: 6,
  compound: "Annually",
  addOn: 1000,
  type: "End",
  each: "Month",
};

export type PieData = {
  endingBalance: number;
  startingAmount: number;
  totalContributions: number;
  totalInterest: number;
};
