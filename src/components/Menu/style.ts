import styled from "styled-components";

export const Sidebar = styled.div`
  width: 10vw;
  height: 90vh;
  left: 2.5vw;
  top: 5vh;
  background: rgba(180, 153, 93, 0.8);
  border-radius: 75px 22px 22px 75px;

  @media (min-width: 1024px) {
    width: 10vw;
    div {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      height: 70%;
      width: 100%;
      background: none;
    }
  }

  @media (min-width: 800px) and (max-width: 1023px) {
    width: 13vw;
  }

  @media (min-width: 600px) and (max-width: 799px) {
    width: 16vw;
  }

  @media (max-width: 599px) {
  }

  @media (max-height: 600px) {
  }
`;

export const Logo = styled.img`
  /* position: absolute; */
  width: 101px;
  height: 124px;
  /* left: 78px;
  top: 70px; */
  background: none;
`;

export const ButtonHome = styled.button`
  /* position: absolute; */
  width: 48px;
  height: 51px;
  /* left: 105px;
  top: 264px; */
  border: none;
  background: url("https://cdn.discordapp.com/attachments/985645895779508254/1023650978446200882/Rectangle_25.png");
`;

export const ButtonConfig = styled.button`
  /* position: absolute; */
  width: 48px;
  height: 51px;
  /* left: 105px;
  top: 391px; */
  border: none;
  background: url("https://cdn.discordapp.com/attachments/985645895779508254/1023673860559736872/Rectangle_27.png");
`;
