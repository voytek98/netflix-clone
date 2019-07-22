import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "../assets/styles/styles.css";

import Navigation from "./Navigation";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import TVShows from "../pages/TVShows";
import Movies from "../pages/Movies";
import RecentlyAdded from "../pages/RecentlyAdded";
import MyList from "../pages/MyList";
import Search from "../pages/Search";
import SearchTitle from "../pages/SearchTitle";

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
      <Router>
        <div className="wrapper">
          <Navigation nav={this.state.scrolled} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/search' component={Search} />
              <Route path='/search/tv/:id' component={SearchTitle} />
              <Route path='/search/movie/:id' component={SearchTitle} />
              <Route path='/tv-shows' component={TVShows} />
              <Route path='/movies' component={Movies} />
              <Route path='/recently-added' component={RecentlyAdded} />
              <Route path='/my-list' component={MyList} />
            </Switch>            
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
