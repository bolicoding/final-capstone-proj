import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as BR, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";

function App() {
  return (
    <div className="App">
      <BR>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BR>
    </div>
  );
}

export default App;
