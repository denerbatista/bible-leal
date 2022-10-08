import styled from "styled-components";

export const Div = styled.div`
  width: 43vw;
  height: 90vh;
  background: rgba(180, 153, 93, 0.8);
  border-radius: 22px 75px 75px 22px;
  div#close {
    height: 3.23%;
    padding: 3vh;
    background: none;
    img {
      background: none;
    }
  }
  div#crud-book {
    background: none;
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    div#text {
      display: flex;
      background: none;
      align-items: left;
      flex-direction: column;
      justify-content: space-evenly;
      width: 75%;
      height: 100%;
      span {
        background: none;
        color: #672402;
        font-weight: bolder;
        font-size: 20px;
      }
    }
    div#buttons {
      display: flex;
      background: none;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
      button {
        border: none;
        padding: 1vh;
        width: 75%;
        border-radius: 10px;
        color: #ffffff;
      }
      button#update {
        background-color: #07662a;
      }
      button#history {
        background-color: #663a07;
      }
      button#edit {
        background-color: #665707;
      }
      button#delete {
        background-color: #660707;
      }
      button#add-genre {
        background-color: #376607;
      }
      button#edit-genre {
        background-color: #596607;
      }
      button#delete-genre {
        background-color: #660707;
      }
    }
  }
`;
