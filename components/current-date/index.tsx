import getDate from "../../utils/getDate";
import useMediaQuery from "../../hooks/useMediaQuery";
import { DateText, TodayDate } from "./current-date.styled";

const CurrentDate = (): JSX.Element => {
  const { day, month, shortMonth } = getDate();
  const isTabletScreenSize = useMediaQuery(768);

  return (
    <>
      {isTabletScreenSize ? (
        <DateText>
          {shortMonth} {day}
        </DateText>
      ) : (
        <DateText>
          Today is the{" "}
          <TodayDate>
            {day} of {month}
          </TodayDate>
        </DateText>
      )}
    </>
  );
};

export default CurrentDate;
