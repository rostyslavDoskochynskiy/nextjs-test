import styled from "styled-components";
import headerHeight from "../../constants/headerHeight";
import Search from "../search";
import breakpoints from "../../constants/breakpoints";

const StyledHeader = styled.header`
  height: ${headerHeight.desktop};
  padding: 1rem 0;
  border-bottom: 1px solid var(--gainsboro);

  @media (max-width: ${breakpoints.sm}) {
    height: ${headerHeight.mobile};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.p`
  color: var(--black);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-decoration: none;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const StyledSearch = styled(Search)`
  display: none;

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    margin-top: 1rem;
  }
`;

export { StyledHeader, Container, Logo, StyledSearch };
