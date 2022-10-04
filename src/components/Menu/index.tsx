import { ButtonConfig, ButtonHome, ButtonLogOut, Logo, Sidebar } from "./style";

interface Props {
  handleLogOut: () => void;
}

function Menu(props:Props) {
  return (
    <>
      <Sidebar>
        <div>
          <Logo src="https://cdn.discordapp.com/attachments/985645895779508254/1023649229073297489/logo.png" />
          <ButtonHome />
          <ButtonConfig />
          <ButtonLogOut
            onClick={props.handleLogOut}
            src="https://cdn.discordapp.com/attachments/985645895779508254/1026652429753782332/logout.png"
          />
        </div>
      </Sidebar>
    </>
  );
}

export default Menu;
