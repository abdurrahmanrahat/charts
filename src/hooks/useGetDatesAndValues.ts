import { TYearData } from "../types/barChartType";
import { formattedDate } from "../utils/formattedDate";

export const useGetDatesAndValues = (data: TYearData[]) => {
  const dates: string[] = [];
  const values: number[] = [];

  const processChartData = (chartData: TYearData[]) => {
    chartData.forEach((yearData) => {
      const years = Object.keys(yearData);

      years.forEach((year) => {
        yearData[year].forEach((monthData) => {
          Object.keys(monthData).forEach((month) => {
            monthData[month].forEach((dayData) => {
              const dayDataArr = Object.entries(dayData)[0];

              const [dateString, value] = dayDataArr;

              const formatDate = formattedDate(dateString);

              dates.push(formatDate);
              values.push(value);
            });
          });
        });
      });
    });
  };

  processChartData(data);

  return {
    dates,
    values,
  };
};
