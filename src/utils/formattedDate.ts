export const formattedDate = (dateString: string) => {
  const [myDate] = dateString.split(" ,");

  const jsDate = new Date(myDate);

  return jsDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
