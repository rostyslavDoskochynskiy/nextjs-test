import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  line-height: 2rem;
  color: var(--carbongray);
`;

const Description = styled.h4`
  margin-top: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: var(--gray);
`;

export { Container, Message, Title, Description };
