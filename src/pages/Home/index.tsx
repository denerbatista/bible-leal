import { useEffect, useState } from "react";
import { api } from "../../api";
import Background from "../../components/Background";
import Menu from "../../components/Menu";
import { ButtonConfig, ButtonHome } from "../../components/Menu/style";

const Home: React.FC = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await api.get("book/getAll");
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  },[]);
  
  return (
    <>
    {console.log(books)}
      <Background />
      <Menu />
      <ButtonHome />
      <ButtonConfig />
    </>
  );
};

export default Home;
