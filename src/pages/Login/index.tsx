import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import Background from "../../components/Background";
import BoxLogin from "../../components/BoxLogin";

export interface DatosLogin {
  _email: string | undefined;
  _password: string | undefined;
}

interface Props {
  setLogged: (value: boolean) => void;
}

const Login = (props: Props) => {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const _token = localStorage.getItem("token");

  const handleLogin = async (data: DatosLogin) => {
    await api
      .post("/auth/login", data)
      .then((res) => {
        if (res.data.auth === true) {
          localStorage.setItem("token", res.data._token);
          props.setLogged(true);
          navigate("/home");
          return console.log("logado com sucesso");
        }
        return console.log("Usuário ou senha inválido");
      })
      .catch(() => {
        console.log("Error de login");
        toast.error("Usuário ou senha inválido");
      });
  };


  const checkToken = async () => {
    await api
      .post("/auth/login", { _token })
      .then((res) => {
        if (res.data.auth === true) {
          props.setLogged(true);
          navigate("/home");
          toast.success("Token validado");
          return "Token validado";
        }
        toast.error("Token invalido ou expirado");
        return "Token invalido ou expirado";
      })
      .catch(() => {
        toast.error("Error ao validar Token");
        console.log("Error ao validar Token");
      });
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      <Background />
      <BoxLogin
        setPassword={setpassword}
        setEmail={setEmail}
        handleLogin={handleLogin}
        _email={email}
        _password={password}
      />
    </>
  );
};

export default Login;
