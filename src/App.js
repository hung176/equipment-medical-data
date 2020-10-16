import React from "react";
import NavBar from "./component/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import InstallBase from "./pages/InstallBase";
import Password from "./pages/Password";
import Documents from "./pages/Documents";
import Login from "./pages/Login";
import ErrorCodeUnit from "./pages/ErrorCodeUnit";
import ErrorCode from "./pages/ErrorCode";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/documents" render={props => <Documents {...props} />} />
        <Route exact path="/installbase" render={props => <InstallBase {...props} />} />
        <Route exact path="/errorcodes" render={props => <ErrorCode {...props} />} />
        <Route exact path="/errorcodes/:unitName" render={props => <ErrorCodeUnit {...props} />} />
        <Route exact path="/passwords" render={props => <Password {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
      </Switch>
    </>
  );
}

export default App;
