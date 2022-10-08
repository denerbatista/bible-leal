import styled from "styled-components";

export const Div = styled.div`
  background: none;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  span {
    background: none;
    color: #672402;
    font-weight: bolder;
    font-size: 20px;
  }
  button {
    padding: 1vh;
    width: 75%;
    border-radius: 10px;
    color: #ffffff;
  }
  button#update {
    background-color:#07662A;
  }
  button#history {
    background-color:#663A07;
  }
  button#edit {
    background-color:  #665707;
  }
  button#delete {
    background-color:#660707;
  }
  button#add-genre {
    background-color:#376607;
  }
  button#edit-genre {
    background-color:#596607;
  }
  button#delete-genre {
    background-color:#660707;
  }
`;
