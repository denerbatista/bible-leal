import { BackgroudCard } from "./style";

interface Props {
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
  setElement: (e:any) => void;
  setCrudBook: (e: boolean) => void;
  setModal: (value: boolean) => void;
}

function Card({ element, setCrudBook, setModal, setElement }: Props) {
  const headleCrudBook = () => {
    setCrudBook(true);
    setModal(true);
    setElement(element);
  };
  return (
    <>
      <BackgroudCard onClick={headleCrudBook}>
        <img src={element._picture} />
        <span>{element._title}</span>
        <span>Autor: {element._author}</span>
        <span>Registro: {element._register}</span>
      </BackgroudCard>
    </>
  );
}

export default Card;
