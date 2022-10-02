import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import Background from "../../components/Background";
import BoxLogin from "../../components/BoxLogin";
import { useAuth } from "../../context/Auth";

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
          console.log("logado com sucesso");
          localStorage.setItem("token", res.data._token);
          props.setLogged(true);
          navigate("/home");
        }
        return console.log("Usuário ou senha inválido");
      })
      .catch(() => {
        console.log("Error de login");
        toast.error("Usuário ou senha inválido");
      });
  };

  const checkToken = async () => {
    console.log(_token);
    await api
      .post("/auth/login", {_token})
      .then((res) => {
        console.log(res.data.auth);
        if (res.data.auth === true) {
          props.setLogged(true);
          navigate("/home");
        }
      })
      .catch(() => console.log("token expirado"));
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
