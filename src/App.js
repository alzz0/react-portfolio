import React, { Component } from "react";
import Home from "./pages/Home";
import ClientWork from "./pages/ClientWork";
import ServerWork from "./pages/ServerWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/client" component={ClientWork} />
          <Route path="/server" component={ServerWork} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
