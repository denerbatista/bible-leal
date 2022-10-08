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
import CrudBook from "../../components/CrudBook";

interface Props {
  handleLogOut: () => void;
}

const Home = (props: Props) => {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [crudBook, setCrudBook] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [element, setElement] = useState<any>();
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
          <Selector />
          <List
            books={books}
            setCrudBook={setCrudBook}
            setModal={setModal}
            setElement={setElement}
          />
        </div>
        {modal && (
          <Modal
            crudBook={crudBook}
            setCrudBook={setCrudBook}
            setModal={setModal}
            editStatus={editStatus}
            setEditStatus={setEditStatus}
            element={element}
          />
        )}
      </Main>
    </>
  );
};

export default Home;
