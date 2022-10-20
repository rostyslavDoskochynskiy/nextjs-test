import { useContext, ChangeEvent } from "react";
import { Container, SearchIcon, Input } from "./search.styled";
import UsersContext from "../../context/usersContext";
import debounce from "../../utils/debounce";

const Search = ({ className }: { className?: string }): JSX.Element => {
  const context = useContext(UsersContext);

  const filterUsers = (value: string) => {
    const filteredUsers = context?.users.filter((user) => {
      if (value === "") {
        return user;
      } else {
        return (
          user.name.first.toLowerCase().includes(value.toLowerCase()) ||
          user.name.last.toLowerCase().includes(value.toLowerCase()) ||
          user.email.toLowerCase().includes(value.toLowerCase())
        );
      }
    });
    if (filteredUsers) {
      context?.resetPageNumber();
      return context?.setUsers(filteredUsers);
    }
  };

  const handleInputChange = debounce((e: ChangeEvent<HTMLInputElement>) => filterUsers(e.target.value), 600);

  return (
    <Container className={className}>
      <SearchIcon />
      <Input type="text" placeholder="Search..." onChange={handleInputChange} />
    </Container>
  );
};

export default Search;
