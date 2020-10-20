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
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path="/documents">
          <Documents />
        </PrivateRoute>

        <PrivateRoute exact path="/installbase">
          <InstallBase />
        </PrivateRoute>

        <PrivateRoute exact path="/errorcodes">
          <ErrorCode />
        </PrivateRoute>

        <PrivateRoute exact path="/errorcodes/:unitName">
          <ErrorCodeUnit />
        </PrivateRoute>

        <PrivateRoute exact path="/passwords">
          <Password />
        </PrivateRoute>

        <Route exact path="/login" render={props => <Login {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
