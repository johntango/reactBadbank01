import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import Users from "./components/users";

import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/users" component={Users} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
        </Switch>
      </div>
    </Router>
  );
}
const home = () => {
  return (
    <div>
      <h1>Bank has been Initialized</h1>
    </div>
  );
};

export default App;
