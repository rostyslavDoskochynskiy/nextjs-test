import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2.5rem;
  column-gap: 1.5rem;

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 2rem 0;
    row-gap: 2rem;
    column-gap: 3rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 1.5rem 0;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }
`;

export { Container };
