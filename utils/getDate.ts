import getNumberWithOrdinal from "./getNumberWithOrdinal";

export const getDate = () => {
  const date = new Date();
  const day = getNumberWithOrdinal(date.getDate());
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const shortMonth = date.toLocaleDateString("en-US", { month: "short" });

  return { day, month, shortMonth };
};

export default getDate;
