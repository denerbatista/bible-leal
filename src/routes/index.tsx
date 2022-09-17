import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Login from "../pages/Login";

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/" element = {<Login/>}/>
      </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;

