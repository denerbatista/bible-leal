import styled from "styled-components";

export const BackgroudCard = styled.div`
  cursor: pointer;
  width: 10vw;
  height: 35vh;
  background: #672402;
  border-radius: 1.2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  img {
    width: 80%;
    height: 60%;
    background-color: #ffffff;
    margin-top: 5%;
  }
  span {
    color: #ffffff;
    font-weight: bolder;
  }
  transition: 2s;

  &:hover {
    box-shadow: #07662A 0px 0px 20px 10px
  }
`;
