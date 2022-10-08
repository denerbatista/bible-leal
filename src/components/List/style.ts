import styled from "styled-components";

interface Props {
  emprestado: boolean;
  disponivel: boolean;
  todos: boolean;
}

export const Rank = styled.div`
  display: flex;
  align-items: center;
  background: none;
  justify-content: left;
  height: 3vh;
  padding: 1vh;
  gap: 3vw;
  margin-left: 4vw;
  button {
    background: #660707;
    border: none;
    color: #ffffff;
    border-radius: 5px;
    padding: 1vh;
  }
  button#button-status-emprestado{
    background: ${(props:Props)=>props.emprestado? "#07662A" : "#660707"};

  }
  button#button-status-disponivel{
    background: ${(props:Props)=>props.disponivel? "#07662A" : "#660707"};
  }
  button#button-status-todos{
    background: ${(props:Props)=>props.todos? "#07662A" : "#660707"};
  }
  select {
    border: none;
    background: #b4995dcc;
    padding: 1vh ;
    border-radius: 5px;
  }
`;

export const Get = styled.div`
  height: 57.27%;
  margin: 0 4vw 0 1.7vw;
  overflow: auto;
  background: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3.4vw;
  direction: rtl;
  ::-webkit-scrollbar-track {
    background: rgba(103, 36, 2, 0.5);
    border-radius: 22px;
  }
  ::-webkit-scrollbar {
    background-color: #b4995dcc;
    border-radius: 22px;
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #672402;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-corner {
    border-radius: 10px;
    width: 10px;
  }
`;
