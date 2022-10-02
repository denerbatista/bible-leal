import React, { ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

const Routes: React.FC = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/home"
            element={logged ? <Home /> : <Navigate to={"/"} />}
          />
          <Route path="/" element={<Login setLogged={setLogged} />} />
          <Route
            path="*"
            element={<Navigate to={logged ? "/home" : "/"} replace />}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
