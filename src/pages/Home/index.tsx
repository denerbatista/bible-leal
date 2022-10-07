import { useEffect, useState } from "react";
import { api } from "../../api";
import Background from "../../components/Background";
import Time from "../../components/Time";
import FilterAndCreate from "../../components/FilterAndCreate";
import List from "../../components/List";
import Menu from "../../components/Menu";
import Selector from "../../components/Selector";
import { Main } from "./style";
import Modal from "../../components/Modal";

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
          <FilterAndCreate />
          <Selector/>
          <List books={books}/>
        </div>
        <Modal/>
      </Main>
    </>
  );
};

export default Home;
