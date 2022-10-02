import { DatosLogin } from "../../pages/Login";
import { Box, Button, Input, Logo } from "./style";

interface Props {
  setPassword: (e: any) => void;
  setEmail: (e: any) => void;
  handleLogin: (data: DatosLogin) => any;
  _password: string | undefined;
  _email: string | undefined;
}

const BoxLogin = (props: Props) => {
  const data: DatosLogin = {
    _email: props._email,
    _password: props._password,
  };
  return (
    <>
      <Box>
        <Logo src="https://cdn.discordapp.com/attachments/985645895779508254/1021140181459411037/logo.png" />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => props.setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => {
            props.setPassword(e.target.value);
          }}
        />
        <Button onClick={()=>{props.handleLogin(data)}}>Entrar</Button>
      </Box>
    </>
  );
};

export default BoxLogin;
