import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap";
import breakpoints from "../../constants/breakpoints";

const Container = styled.div`
  width: 22rem;
  height: 2rem;
  padding: 0 15px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 30px;
  background-color: var(--brightgray);
  transition: all 0.3s linear;

  &:hover,
  &:focus-within {
    transform: scale(1.05);
    border-color: var(--black);
  }

  @media (max-width: ${breakpoints.md}) {
    width: 18rem;
  }
  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const SearchIcon = styled(Search)`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.5rem;
  color: var(--black);
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  background: transparent;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: var(--black);

  &::placeholder {
    color: var(--black);
  }

  &:focus {
    ${Container} {
      transform: scale(0.95);
      border-color: var(--black);
    }
  }
`;

export { Container, SearchIcon, Input };
