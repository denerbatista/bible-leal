import ContentModalBook from "../ContentModalBook";
import ContentModalEditStatus from "../ContentModalEditStatus";
import { Div } from "./style";

interface Props {
  crudBook: boolean;
  setCrudBook: (value: boolean) => void;
  editStatus: boolean;
  setEditStatus: (value: boolean) => void;
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
    props.setEditStatus(false);
    props.setCrudBook(false);
    props.setModal(false);
  };
  const handleEditStatus = () => {
    handleCloseModal();
    props.setEditStatus(true);
    props.setModal(true);
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
          <ContentModalBook
            crudBook={props.crudBook}
            setCrudBook={props.setCrudBook}
            setEditStatus={props.setEditStatus}
            setModal={props.setModal}
            handleCloseModal={handleCloseModal}
            element={props.element}
          />
        )}
        {props.editStatus && (
          <ContentModalEditStatus
            crudBook={props.crudBook}
            setCrudBook={props.setCrudBook}
            setEditStatus={props.setEditStatus}
            setModal={props.setModal}
            handleCloseModal={handleCloseModal}
            element={props.element}
          />
        )}
      </Div>
    </>
  );
}

export default Modal;
