import React from "react";
import { Box, Button, Input, Logo } from "./style";

const BoxLogin: React.FC = () => {
  return (
    <>
      <Box>
        <Logo src="https://cdn.discordapp.com/attachments/985645895779508254/1021140181459411037/logo.png" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button>Entrar</Button>
      </Box>
    </>
  );
};

export default BoxLogin;
