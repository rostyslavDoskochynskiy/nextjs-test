interface Pagination {
  pageNumber: number;
  hasNextPage: boolean;
  action: (number: number) => void;
}

export default Pagination;
