import Card from "../Card";
import { Get } from "./style";

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
}

function List({ books }: Props) {
  return (
    <>
      <Get>
        {books.map((e: Book) => (
          <Card
            key={e._id}
            picture={e._picture}
            title={e._title}
            author={e._author}
            register={e._register}
          />
        ))}
      </Get>
    </>
  );
}

export default List;
