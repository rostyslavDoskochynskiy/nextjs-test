import styled from "styled-components";

const DateText = styled.p`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 500;
  color: var(--carbongray);
`;

const TodayDate = styled.span`
  border-bottom: 1px solid var(--lightgray);
`;

export { DateText, TodayDate };
