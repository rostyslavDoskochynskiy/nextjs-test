import { useState, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import UsersContext from "../context/usersContext";
import Layout from "../components/layout";
import CardsSection from "../components/cards-section";
import scrollToTheTop from "../utils/scrollToTheTop";
import UserList from "../types/UserList";

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch("https://randomuser.me/api/?results=200&seed=nextjs&inc=gender,name,email,login,picture");
  const userList = await result.json();

  if (!userList.results.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userList,
    },
  };
};

interface HomePageProps {
  userList: UserList;
}

const Home: NextPage<HomePageProps> = ({ userList }) => {
  const [users, setUsers] = useState(userList.results);
  const [pageNumber, setPageNumber] = useState(1);

  const usersPerPage = 12;
  const pageCount = Math.ceil(users.length / usersPerPage);
  const pagesVisited = (pageNumber - 1) * usersPerPage;
  const hasNextPage = pageNumber < pageCount;
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage);

  useEffect(() => {
    setTimeout(scrollToTheTop, 200);
  }, [pageNumber]);

  const pagination = { pageNumber, hasNextPage, action: (number: number) => setPageNumber(number) };
  const providerValues = { users: userList.results, setUsers, resetPageNumber: () => setPageNumber(1) };

  return (
    <UsersContext.Provider value={providerValues}>
      <Layout>
        <CardsSection data={displayUsers} pagination={pagination} />
      </Layout>
    </UsersContext.Provider>
  );
};

export default Home;
