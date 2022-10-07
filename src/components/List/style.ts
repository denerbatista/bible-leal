import styled from "styled-components";

export const Get = styled.div`
  height: 57.27%;
  margin: 4vh 4vw 0 1.7vw;
  overflow: auto;
  background: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap:3.4vw;
  direction:rtl;
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
