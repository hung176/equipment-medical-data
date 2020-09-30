import React from "react";
import NavBar from "./component/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import InstallBase from "./pages/InstallBase";
import ErrorCode from "./pages/ErrorCode";
import Password from "./pages/Password";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/installbase" render={props => <InstallBase {...props} />} />
        <Route exact path="/errorcode" render={props => <ErrorCode {...props} />} />
        <Route exact path="/password" render={props => <Password {...props} />} />
      </Switch>
    </>
  );
};

export default App;
