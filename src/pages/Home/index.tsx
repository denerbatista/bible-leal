import { useEffect, useState } from "react";
import { api } from "../../api";
import Background from "../../components/Background";
import Time from "../../components/Date";
import Menu from "../../components/Menu";
import { Main } from "./style";

const Home: React.FC = () => {
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
        <Menu />
        <div id="content">
          <Time />
        </div>
      </Main>
    </>
  );
};

export default Home;
