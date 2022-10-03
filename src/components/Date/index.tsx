import { useState } from "react";
import { Span } from "./style";

function Time() {
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mesNumber = dataAtual.getMonth();
  const mes = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const dayWeekNumber = dataAtual.getDay();
  const dayWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const ano = dataAtual.getFullYear();
  const [dateView] = useState(
    `${dayWeek[dayWeekNumber]}, ${dia} de ${mes[mesNumber]} de ${ano}`
  );

  return (
    <>
      <Span>
        <span id="title">Bible - Leal</span>
        <span id="date">{dateView}</span>
      </Span>
    </>
  );
}

export default Time;
