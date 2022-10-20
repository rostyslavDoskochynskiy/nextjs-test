import styled, { css } from "styled-components";
import { Button } from "../../styles/utils.styled";
import breakpoints from "../../constants/breakpoints";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: var(--brightgray);

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ActionBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Category = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--black);
`;

const Label = styled.p<{ $background?: string; active?: boolean }>`
  ${({ $background, active }) => css`
    font-size: 1rem;
    line-height: 1.25rem;
    color: var(--ashgray);
    transition: all 0.3s linear;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }

    ${active &&
    css`
      background: ${`-webkit-linear-gradient(90deg, ${$background})`};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `};
  `}
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${breakpoints.md}) {
    align-self: flex-end;
  }
`;

const StyledButton = styled(Button)`
  width: 3.5rem;
  height: 2.25rem;
  font-size: 1rem;
  line-height: 1.25rem;
`;

export { Container, Actions, ActionBlock, Category, Label, Buttons, StyledButton };
