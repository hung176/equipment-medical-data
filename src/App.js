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
    <div className='App'>
      <Switch>
        <PrivateRoute exact path="/" layout={NavBar}>
          <Home />
        </PrivateRoute>

        <PrivateRoute exact path="/documents" layout={NavBar}>
          <Documents />
        </PrivateRoute>

        <PrivateRoute exact path="/installbase" layout={NavBar}>
          <InstallBase />
        </PrivateRoute>

        <PrivateRoute exact path="/errorcodes" layout={NavBar}>
          <ErrorCode />
        </PrivateRoute>

        <PrivateRoute exact path="/errorcodes/:unitName" layout={NavBar}>
          <ErrorCodeUnit />
        </PrivateRoute>

        <PrivateRoute exact path="/passwords" layout={NavBar}>
          <Password />
        </PrivateRoute>

        <Route exact path="/login" render={props => <Login {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
