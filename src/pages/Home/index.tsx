import { useEffect, useState } from "react";
import { api } from "../../api";
import Background from "../../components/Background";
import Time from "../../components/Date";
import FilterAndCreate from "../../components/FilterAndCreate";
import Menu from "../../components/Menu";
import { Main } from "./style";

interface Props {
  handleLogOut: () => void;
}

const Home = (props: Props) => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await api.get("book/getAll");
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <Background />
      <Main>
        <Menu handleLogOut={props.handleLogOut} />
        <div id="content">
          <Time />
          <FilterAndCreate/>
        </div>
      </Main>
    </>
  );
};

export default Home;
