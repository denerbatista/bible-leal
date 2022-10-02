import React from "react";
import { AuthProvider } from "./context/Auth";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
