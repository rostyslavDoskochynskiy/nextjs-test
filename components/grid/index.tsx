import { ReactNode } from "react";
import { Container } from "./grid.styled";

interface GridProps {
  children: ReactNode;
}

const Grid = ({ children }: GridProps): JSX.Element => <Container>{children}</Container>;

export default Grid;
