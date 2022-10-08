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

  div#edit-status {
    background: none;
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    div#text-status {
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
    div#buttons-status {
      display: flex;
      background: none;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      button {
        border: none;
        padding: 1vh;
        width: 75%;
        border-radius: 10px;
        color: #ffffff;
      }
      button#update-status {
        background-color: #07662a;
      }
    }
    #select-status {
      background: #d9d9d9;
      border-radius: 5px;
      width: 209px;
      height: 29px;
      font-family: "Inter";
      font-weight: 800;
      font-size: 18px;
      color: #000000;
    }
    #userAndDate {
      display: flex;
      background: none;
      align-items: left;
      flex-direction: column;
      justify-content: space-evenly;
      width: 75%;
      height: 100%;
      fieldSet {
        background: none;
        display: flex;
        flex-direction: column;
        border: none;
        label {
          border: none;
          background: none;
          font-weight: 800;
          font-size: 20px;
          color:#672402;
        }
        input {
          border: none;
          background: #d9d9d9;
          border-radius: 5px;
          width: 100%;
          height: 29px;
          font-family: "Inter";
          font-weight: 800;
          font-size: 18px;
          color: #000000;
        }
      }
    }
  }
`;
