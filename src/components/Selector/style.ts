import styled from "styled-components";

interface Props {
  selectBooks: boolean;
  selectStudents: boolean;
  selectTeachers: boolean;
}

export const Div = styled.div`
  padding: 0 4vw 0 4vw;
  background: none;
  height:8.17%;
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background: none;
  }
  hr {
    height: 1vh;
    border: none;
  }
  button {
    padding: 0.7vw 3vw;
    border-radius: 7px 7px 0 0;
    border: none;
    background: none;
    font-weight: bolder;
    font-size: 20px;
    cursor:pointer;
  }
  button#button-books {
    color: ${(props: Props) => (props.selectBooks ? "#ffffff" : "#672402")};
    background: ${(props: Props) => (props.selectBooks ? "#07662a" : "none")};
  }
  button#button-students {
    color: ${(props: Props) => (props.selectStudents ? "#ffffff" : "#672402")};
    background: ${(props: Props) => (props.selectStudents ? "#07662a" : "none")};
  }
  button#button-teachers {
    color: ${(props: Props) => (props.selectTeachers ? "#ffffff" : "#672402")};
    background: ${(props: Props) => (props.selectTeachers ? "#07662a" : "none")};
  }
`;
