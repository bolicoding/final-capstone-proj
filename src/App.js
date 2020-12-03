import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as BR, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import SignUp from "./components/pages/sign-up";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BR>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </BR>
    </div>
  );
}

export default App;
