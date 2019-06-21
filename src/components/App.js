import React from "react";
import moviesdb from "../api/moviedb";

import '../assets/styles/styles.css';

import Carousel from "./Carousel";
import Lead from './Lead';
import Navigation from "./Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingList: []
    };
  }

  componentDidMount() {
    // Get list of trending movies / tv shows
    (async () => {
      const response = await moviesdb.get("/trending/all/week", {
        params: { api_key: process.env.REACT_APP_API }
      });

      this.setState({ trendingList: response.data.results.slice(0, 10) });
      console.log(this.state.trendingList)
    })();
  }

  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <Lead />
        <Carousel 
          title="Trending Now"
          moviesList={this.state.trendingList}
        />
        <Carousel 
          title="Trending Now"
          moviesList={this.state.trendingList}
        />
        <Carousel 
          title="Trending Now"
          moviesList={this.state.trendingList}
        />
        <Carousel 
          title="Trending Now"
          moviesList={this.state.trendingList}
        />
      </div>
    );
  }
}

export default App;
