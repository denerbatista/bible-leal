import { Div } from "./style";

interface Props {
  crudBook: boolean;
  setCrudBook: (value: boolean) => void;
  setEditStatus: (value: boolean) => void;
  setModal: (value: boolean) => void;
  handleCloseModal: () => void;
  element: {
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
  };
}

function ContentModalBook(props: Props) {
  const handleEditStatus = () => {
    props.handleCloseModal();
    props.setEditStatus(true);
    props.setModal(true);
  };
  return (
    <>
      <Div>
        <div id="text-contentModalBook" >
          <span>Autor: {props.element._title}</span>
          <span>Nº: {props.element._register}</span>
          <span>Editora: {props.element._publishingCompany}</span>
          <span>Autor: {props.element._author}</span>
          <span>Ilustrador: {props.element._ilustrator}</span>
          <span>Status: {props.element._status}</span>
        </div>
        <div id="buttons-contentModalBook" >
          <button id="update" onClick={handleEditStatus}>
            Atualizar status
          </button>
          <button id="history">Histórico</button>
          <button id="edit">Editar</button>
          <button id="delete">Deletar</button>
        </div>
      </Div>
    </>
  );
}

export default ContentModalBook;
