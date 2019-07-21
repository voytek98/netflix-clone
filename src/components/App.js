import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "../assets/styles/styles.css";

import Navigation from "./Navigation";
import Footer from "./Footer";
import SearchResult from "./SearchResult";
import HomePage from "../pages/HomePage";
import TVShows from "../pages/TVShows";
import Movies from "../pages/Movies";
import RecentlyAdded from "../pages/RecentlyAdded";
import MyList from "../pages/MyList";
import Search from "../pages/Search";

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
      <div className="wrapper">
        <Navigation nav={this.state.scrolled} />
        <Router>
          <Route exact path='/' component={HomePage} />
          <Route path='/search' component={Search} />
          <Route path='/search/:id' />
          <Route path='/tv-shows' component={TVShows} />
          <Route path='/movies' component={Movies} />
          <Route path='/recently-added' component={RecentlyAdded} />
          <Route path='/my-list' component={MyList} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
