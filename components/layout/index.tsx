import { ReactNode } from "react";
import Header from "../header";
import { Main } from "./layout.styled";
import { Wrapper } from "../../styles/utils.styled";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Header />
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  </>
);

export default Layout;
