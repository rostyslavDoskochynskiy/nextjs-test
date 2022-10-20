import { useContext } from "react";
import { StyledHeader, Container, Logo, StyledSearch } from "./header.styled";
import Search from "../search";
import CurrentDate from "../current-date";
import UsersContext from "../../context/usersContext";
import { Wrapper } from "../../styles/utils.styled";

const Header = (): JSX.Element => {
  const context = useContext(UsersContext);

  const handleLogoClick = () => {
    context?.resetPageNumber();
    context?.setUsers(context?.users);
  };

  return (
    <StyledHeader>
      <Wrapper>
        <Container>
          <Logo onClick={handleLogoClick}>Users</Logo>
          <Search />
          <CurrentDate />
        </Container>
        <StyledSearch />
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
