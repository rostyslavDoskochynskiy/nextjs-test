import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";
import getBackground from "../../utils/getBackground";

const Container = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: var(--brightgray);
  border: 1px solid transparent;
  transition: all 0.3s linear;

  &:hover {
    border-image: ${({ index }) => `linear-gradient(${getBackground(index)})`} 1;
    transform: scale(1.05);
  }
`;

const ImageBackground = styled.div<{ index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.5rem;
  height: 8.5rem;
  background: ${({ index }) => `linear-gradient(${getBackground(index)})`};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
`;

const Title = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: var(--black);
  align-self: flex-start;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;

const Email = styled.h5`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--carbongray);
  align-self: flex-start;
  word-break: break-word;
`;

export { Container, ImageBackground, ImageWrapper, Title, Email };
