import { ButtonConfig, ButtonHome, Logo, Sidebar } from "./style";

function Menu() {
  return (
    <>
      <Sidebar>
        <div>
          <Logo src="https://cdn.discordapp.com/attachments/985645895779508254/1023649229073297489/logo.png" />
          <ButtonHome />
          <ButtonConfig />
        </div>
      </Sidebar>
    </>
  );
}

export default Menu;
