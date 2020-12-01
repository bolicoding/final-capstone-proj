import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as BR, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import Services from "./components/pages/services";
import Contact from "./components/pages/contact";
import SignUp from "./components/pages/sign-up";

function App() {
  return (
    <div className="App">
      <BR>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </BR>
    </div>
  );
}

export default App;
