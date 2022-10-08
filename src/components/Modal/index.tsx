import { useState } from "react";
import { Div } from "./style";

interface Props {
  crudBook: boolean;
  setCrudBook: (value: boolean) => void;
  setModal: (value: boolean) => void;
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

function Modal(props: Props) {
  const handleCloseModal = () => {
    props.setCrudBook(false);
    props.setModal(false);
  };
  return (
    <>
      <Div>
        <div id="close">
          <img
            src="https://cdn.discordapp.com/attachments/985645895779508254/1027750447232065628/Rectangle_54.png"
            onClick={handleCloseModal}
          />
        </div>
        {props.crudBook && (
          <div id="crud-book">
            <div id="text">
              <span>Autor: {props.element._title}</span>
              <span>Nº: {props.element._register}</span>
              <span>Editora: {props.element._publishingCompany}</span>
              <span>Autor: {props.element._author}</span>
              <span>Ilustrador: {props.element._ilustrator}</span>
              <span>Status: {props.element._status}</span>
            </div>
            <div id="buttons">
              <button id="update">Atualizar status</button>
              <button id="history">Histórico</button>
              <button id="edit">Editar</button>
              <button id="delete">Deletar</button>
              <button id="add-genre">Adicionar Gênero</button>
              <button id="edit-genre">Editar Gênero</button>
              <button id="delete-genre">Deletar Gênero</button>
            </div>
          </div>
        )}
      </Div>
    </>
  );
}

export default Modal;
