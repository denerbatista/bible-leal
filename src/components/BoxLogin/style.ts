import styled from "styled-components";

export const Box = styled.div`
  background: #672402;
  position: absolute;
  height: 60vh;
  box-shadow: 18px 18px 18px 10px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  top: 20vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 30vw;
    left: 35.5vw;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    width: 60vw;
    left: 22vw;
  }

  @media (max-width: 599px) {
    width: 75vw;
    left: 13vw;
  }

  @media (max-height: 600px) {
    width: 45vw;
    left: 28vw;
  }
`;

export const Logo = styled.img`
  @media (min-width: 1024px) {
    width: 20vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 40vw;
  }

  @media (max-width: 599px) {
    width: 60vw;
  }

  @media (max-height: 600px) {
    width: 22vw;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 3rem;
  background-color: #b4995d;
  border-radius: 7px;
  border: none;
  padding: 0.5rem;
  color: #672402;
  font-size: 1rem;

  @media (min-width: 1024px) {
    width: 20vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 40vw;
  }

  @media (max-width: 599px) {
    width: 60vw;
  }

  @media (max-height: 600px) {
    width: 19vw;
    height: 3vh;
    padding: 3vh;
  }

  &::placeholder {
    color: #672402;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #07662a;
  border-radius: 7px;
  border: none;
  padding: 3vw;
  color: #ffffff;
  font-size: 1rem;
  height: 3.5rem;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 21vw;
    padding: 1.75vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 42vw;
  }

  @media (max-width: 599px) {
    width: 64vw;
  }

  @media (max-height: 600px) {
    width: 23vw;
    height: 1vh;
    padding: 4vh;
  }

  &:hover {
    background-color: #ffffff;
    color: #07662a;
    border: solid 3px #07662a;
  }
`;
