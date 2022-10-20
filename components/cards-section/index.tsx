import { Container, Message, Title, Description } from "./cards-section.styled";
import Grid from "../grid";
import Card from "../card";
import ActionBar from "../action-bar";
import PaginationBar from "../pagination-bar";
import useMediaQuery from "../../hooks/useMediaQuery";
import { User } from "../../types/UserList";
import Pagination from "../../types/Pagination";

interface CardsSectionProps {
  data: User[];
  pagination: Pagination;
}

const CardsSection = ({ data, pagination }: CardsSectionProps) => {
  const isMobileScreenSize = useMediaQuery(480);

  return (
    <>
      <Container>
        <ActionBar />
        {!!data.length ? (
          <Grid>
            {data.map((user, index) => {
              const priority = isMobileScreenSize ? index === 0 : true;
              return <Card key={user.login.uuid} data={user} priority={priority} index={index} />;
            })}
          </Grid>
        ) : (
          <Message>
            <Title>Sorry! No result found :(</Title>
            <Description>We&apos;re sorry what you were looking for. Please try another way</Description>
          </Message>
        )}
      </Container>
      <PaginationBar pagination={pagination} />
    </>
  );
};

export default CardsSection;
