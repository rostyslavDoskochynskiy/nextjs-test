import { useContext, useState } from "react";
import { Container, Actions, ActionBlock, Category, Label, Buttons, StyledButton } from "./action-bar.styled";
import UsersContext from "../../context/usersContext";

const ActionBar = (): JSX.Element => {
  const context = useContext(UsersContext);
  const [sortActiveState, setSortActiveState] = useState({ firstName: false, lastName: false, email: false });
  const [filterActiveState, setFilterActiveState] = useState({ male: false, female: false });

  const handleClearClick = () => {
    setSortActiveState({ firstName: false, lastName: false, email: false });
    setFilterActiveState({ male: false, female: false });
    context?.resetPageNumber();
    context?.setUsers(context?.users);
  };

  const handleApplyClick = () => {
    const filteredUsers = context?.users.filter((user) => {
      if (filterActiveState.male) {
        return user.gender.toLowerCase() === "male";
      }
      if (filterActiveState.female) {
        return user.gender.toLowerCase() === "female";
      }
      return user;
    });
    if (filteredUsers) {
      if (sortActiveState.firstName) {
        filteredUsers.sort((a, b) => a.name.first.localeCompare(b.name.first));
      }
      if (sortActiveState.lastName) {
        filteredUsers.sort((a, b) => a.name.last.localeCompare(b.name.last));
      }
      if (sortActiveState.email) {
        filteredUsers.sort((a, b) => a.email.localeCompare(b.email));
      }
      context?.resetPageNumber();
      return context?.setUsers(filteredUsers);
    }
  };

  return (
    <Container>
      <Actions>
        <ActionBlock>
          <Category>Sort by:</Category>
          <Label
            $background="#9ebd13 0%, #008552 100%"
            active={sortActiveState.firstName}
            onClick={() => setSortActiveState({ firstName: !sortActiveState.firstName, lastName: false, email: false })}
          >
            First name
          </Label>
          <Label
            $background="#00d2ff 0%, #3a47d5 100%"
            active={sortActiveState.lastName}
            onClick={() => setSortActiveState({ firstName: false, lastName: !sortActiveState.lastName, email: false })}
          >
            Last name
          </Label>
          <Label
            $background="#FDBB2D 0%, #c67700 100%"
            active={sortActiveState.email}
            onClick={() => setSortActiveState({ firstName: false, lastName: false, email: !sortActiveState.email })}
          >
            Email
          </Label>
        </ActionBlock>
        <ActionBlock>
          <Category>Filter:</Category>
          <Label
            $background="#4b6cb7 0%, #182848 100%"
            active={filterActiveState.male}
            onClick={() => setFilterActiveState({ male: !filterActiveState.male, female: false })}
          >
            Male
          </Label>
          <Label
            $background="#d53369 0%, #daae51 100%"
            active={filterActiveState.female}
            onClick={() => setFilterActiveState({ male: false, female: !filterActiveState.female })}
          >
            Female
          </Label>
        </ActionBlock>
      </Actions>
      <Buttons>
        <StyledButton onClick={handleClearClick}>Clear</StyledButton>
        <StyledButton onClick={handleApplyClick}>Apply</StyledButton>
      </Buttons>
    </Container>
  );
};

export default ActionBar;
