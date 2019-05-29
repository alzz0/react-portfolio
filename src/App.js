import React, { Component } from "react";
import Home from "./pages/Home";
import ClientWork from "./pages/ClientWork";
import ServerWork from "./pages/ServerWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Alert } from "reactstrap";
import upload from "./images/upload.png";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";

class App extends Component {
  state = {
    showInstallMessage: false,
    showPwaMessage: false,
    visible: false
  };

  componentDidMount() {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.setState({ showInstallMessage: true });
      setTimeout(() => this.setState({ visible: true }), 50);
    } else {
        setTimeout(()=>this.setState({showPwaMessage:true}),6800)
      
    }
  }
  onDismiss = () => {
    this.setState({ visible: false });
  };

  onDismissDesk = () => {
    this.setState({ showPwaMessage: false });
  };

  render() {
    return (
      <Router>
        <div>
          {this.state.showPwaMessage && window.innerWidth > 450 && (
            <Alert
              id="pwaDesktopAlert"
              color="info"
              isOpen={this.state.showPwaMessage}
              toggle={this.onDismissDesk}
            >
              <span style={{ paddingTop: "32px" }}>
                {" "}
                Hey! Ali here... Bet you'd like to see a magic trick. Open me on
                your phone for the next step
              </span>
              !
            </Alert>
          )}

          {this.state.showInstallMessage && (
            <div id="pwaAlert">
              <Alert
                id="alertText"
                style={{ margin: "0", textAlign: "center" }}
                color="info"
                isOpen={this.state.visible}
                toggle={this.onDismiss}
              >
                {" "}
                <h1>Install me </h1>
                <p>
                  Install this application on your home screen for quick and
                  easy access when you're on the go.
                </p>
                <span>
                  Just tap{" "}
                  <img
                    style={{ marginLeft: "3px", marginRight: "3px" }}
                    width="25px"
                    src={upload}
                    alt="install pwa"
                  />
                  then "Add to Home Screen
                </span>
              </Alert>
            </div>
          )}

          <Navbar />

          <Route
            exact
            path="/"
            render={props => <Home pwaAlert={this.state.visible} />}
          />
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
