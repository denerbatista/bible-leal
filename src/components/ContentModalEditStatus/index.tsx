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

function ContentModalEditStatus(props: Props) {
  return (
    <>
      <Div>
        <div id="text-status">
          <span>Autor: {props.element._title}</span>
          <span>Nº: {props.element._register}</span>
          <span>Editora: {props.element._publishingCompany}</span>
          <span>Autor: {props.element._author}</span>
          <span>Ilustrador: {props.element._ilustrator}</span>
          <span>Gênero: {props.element._genre}</span>
          <span>
            Status:{" "}
            <select name="status" id="select-status">
              <option>Disponível</option>
              <option>Emprestado</option>
              <option value="">Desaparecido</option>
            </select>
          </span>
        </div>
        <div id="userAndDate">
          <fieldset>
            <label htmlFor="">Usuário:</label>
            <input type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="">Data:</label>
            <input type="date" />
          </fieldset>
        </div>
        <div id="buttons-status">
          <button id="update-status">Atualizar</button>
        </div>
      </Div>
    </>
  );
}

export default ContentModalEditStatus;
