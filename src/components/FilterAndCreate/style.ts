import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  gap: 15px;
  div {
    background: #b4995d;
    display: flex;
    align-items: center;
    width: 522px;
    height: 47px;
    border-radius: 17px;
    img {
      background: #b4995d;
      margin-left: 17px;
    }
  }
`;

export const InputFilter = styled.input`
  height: 47px;
  width: 463px;
  color: #672402;
  border-radius: 0 17px 17px 0;
  box-sizing: border-box;
  background: #b4995d;
  border: none;
  &::placeholder {
    color: #672402;
  }
`;

export const Create = styled.img`
  width: 61px;
  height: 64px;
  margin-top: 17px;
  filter: drop-shadow(12px 11px 18px #000000);
  background: none;
`;
