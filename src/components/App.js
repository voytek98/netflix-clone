import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "../assets/styles/styles.css";

import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";

class App extends React.Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const top = window.scrollY < 20;
      if (top) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div>
        <Navigation nav={this.state.scrolled} />
        <Router>
          <div className="wrapper">
            <Route exact path='/' component={HomePage} />
            {/* <Route path='/tv-shows' component={TVShows} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
