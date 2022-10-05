import { useState } from "react";
import { Div } from "./style";

function Selector() {
  const [selectBooks, setSelectBooks] = useState(true);
  const [selectStudents, setSelectStudents] = useState(false);
  const [selectTeachers, setSelectTeachers] = useState(false);
  const headleSelectBooks = () => {
    setSelectBooks(true);
    setSelectStudents(false);
    setSelectTeachers(false);
  };

  const headleSelectStudents = () => {
    setSelectBooks(false);
    setSelectStudents(true);
    setSelectTeachers(false);
  };

  const headleSelectTeachers = () => {
    setSelectBooks(false);
    setSelectStudents(false);
    setSelectTeachers(true);
  };
  return (
    <>
      <Div
        selectBooks={selectBooks}
        selectStudents={selectStudents}
        selectTeachers={selectTeachers}
      >
        <div>
          <button id="button-books" onClick={headleSelectBooks}>
            Livros
          </button>
          <button id="button-students" onClick={headleSelectStudents}>
            Alunos
          </button>
          <button id="button-teachers" onClick={headleSelectTeachers}>
            Professores
          </button>
        </div>
        <hr />
      </Div>
    </>
  );
}

export default Selector;
