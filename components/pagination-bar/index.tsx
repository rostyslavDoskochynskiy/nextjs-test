import {
  Container,
  PaginationContainer,
  ArrowLeft,
  ArrowRight,
  Chevron,
  StyledButton,
  PageNumber,
} from "./pagination-bar.styled";
import scrollToTheTop from "../../utils/scrollToTheTop";
import Pagination from "../../types/Pagination";

interface PaginationProps {
  pagination: Pagination;
}

const PaginationBar = ({ pagination }: PaginationProps): JSX.Element => {
  const { pageNumber, hasNextPage, action } = pagination;

  return (
    <Container>
      <PaginationContainer>
        <StyledButton
          disabled={pageNumber === 1}
          onClick={() => action(pageNumber - 1)}
          aria-label="Previous page button"
        >
          <ArrowLeft />
        </StyledButton>
        <PageNumber>{pageNumber}</PageNumber>
        <StyledButton disabled={!hasNextPage} onClick={() => action(pageNumber + 1)} aria-label="Next page button">
          <ArrowRight />
        </StyledButton>
      </PaginationContainer>
      <StyledButton onClick={scrollToTheTop} aria-label="Scroll to the top button">
        <Chevron />
      </StyledButton>
    </Container>
  );
};

export default PaginationBar;
