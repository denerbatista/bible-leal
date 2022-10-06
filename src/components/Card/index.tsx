
import { BackgroudCard } from "./style";

interface Props{
    picture:string;
    title:string;
    register:number;
    author:string;
}

function Card(props:Props) {
  return (
    <>
      <BackgroudCard>
        <img src={props.picture}/>
        <span>{props.title}</span>
        <span>Autor: {props.author}</span>
        <span>Registro: {props.register}</span>
      </BackgroudCard>
    </>
  );
}

export default Card;
