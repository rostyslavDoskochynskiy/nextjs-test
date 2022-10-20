import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";
import headerHeight from "../../constants/headerHeight";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - ${headerHeight.desktop});
  padding-bottom: 2.5rem;

  @media (max-width: ${breakpoints.sm}) {
    min-height: calc(100vh - ${headerHeight.mobile});
  }
`;

export { Main };
