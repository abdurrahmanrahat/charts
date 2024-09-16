export type TDayData = {
  [key: string]: number;
};

export type TMonthData = {
  [key: string]: TDayData[];
};

export type TYearData = {
  [key: string]: TMonthData[];
};
