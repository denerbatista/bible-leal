import { useState } from "react";
import Card from "../Card";
import { Get, Rank } from "./style";

interface Book {
  _id: string;
  _register: number;
  _title: string;
  _author: string;
  _publishingCompany: string;
  _ilustrator: string;
  _picture: string;
  _registrationDate: Date;
  _genre: string;
  _status: string;
  _historic?: [
    {
      _id: string;
      _user: {
        _name: string;
        _gang: string;
        _teacher: Boolean;
      };
      _loanDate: Date;
      _returnDate: Date | string;
    }
  ];
}

interface Props {
  books: Book[];
  filterTitles: string;
  setElement: (e: any) => void;
  setCrudBook: (value: boolean) => void;
  setModal: (value: boolean) => void;
}

function List({
  books,
  setCrudBook,
  setModal,
  setElement,
  filterTitles,
}: Props) {
  const [filterGenre, setFilterGenre] = useState<any>("");
  const [filterStatus, setFilterStatus] = useState<any>("");
  const [selectEmprestado, setSelctEmprestado] = useState(false);
  const [selectDisponivel, setSelectDisponivel] = useState(false);
  const [selectTodos, setSelectTodos] = useState(true);
  console.log(filterGenre);
  const handleSelectDisponivel = () => {
    setFilterStatus("Disponível");
    setSelectDisponivel(true);
    setSelectTodos(false);
    setSelctEmprestado(false);
  };
  const handleSelectEmprestado = () => {
    setFilterStatus("Emprestado");
    setSelectDisponivel(false);
    setSelectTodos(false);
    setSelctEmprestado(true);
  };

  const handleSelectTodos = () => {
    setFilterStatus("");
    setSelectDisponivel(false);
    setSelectTodos(true);
    setSelctEmprestado(false);
  };

  return (
    <>
      <Rank
        emprestado={selectEmprestado}
        disponivel={selectDisponivel}
        todos={selectTodos}
      >
        <select onChange={(e) => setFilterGenre(e.target.value)}>
          <option value="">Todos</option>
          <option value="Comédia">Comédia</option>
          <option value="Drama">Drama</option>
        </select>
        <button id="button-status-emprestado" onClick={handleSelectEmprestado}>
          Emprestados
        </button>
        <button id="button-status-disponivel" onClick={handleSelectDisponivel}>
          Disponíveis
        </button>
        <button id="button-status-todos" onClick={handleSelectTodos}>
          Todos
        </button>
      </Rank>
      <Get>
        {books
          .filter((e) => e._title.toLowerCase().includes(filterTitles.toLowerCase()))
          .filter((e) => e._genre.includes(filterGenre))
          .filter((e) => e._status.includes(filterStatus))
          .map((e: Book) => (
            <Card
              key={e._id}
              element={e}
              setCrudBook={setCrudBook}
              setModal={setModal}
              setElement={setElement}
            />
          ))}
      </Get>
    </>
  );
}

export default List;
