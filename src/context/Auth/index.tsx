import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import toast from "react-hot-toast";
  import { useNavigate } from "react-router-dom";
import { api } from "../../api";
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  interface AuthProviderData {
    logged: boolean;
    login: (params: LoginParams) => void;
    logout: () => void;
  }
  
  interface LoginParams {
    _token: string;
  }
  
  const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);
  
  export const AuthProvider = ({ children }: AuthProviderProps) => {
    // const navigate = useNavigate();
  
    const [logged, setLogged] = useState<boolean>(false);
  
    const login = (loginParams: LoginParams) => {
      localStorage.setItem("token", loginParams._token);
      setLogged(true);
      // navigate("/home");
      console.log(logged)
      toast.success("Login bem sucedido!");
    };
  
    const logout = () => {
      localStorage.clear();
      setLogged(false);
      // navigate("/");
    };
  
    const checkTokenExpiration = () => {
      const _token = localStorage.getItem("token"); 
      console.log(`checar ${_token}`)  
  
      api
        .post(`/auth/login`, _token)
        .then(() => {
          setLogged(true);
          // navigate("/home");
        })
        .catch(() => {
          logout();
          toast.success("Necessário fazer login novamente");
        });
    };
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token) checkTokenExpiration();
    }, []);
  
    return (
      <AuthContext.Provider value={{ logged, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);