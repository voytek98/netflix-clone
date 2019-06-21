import React from "react";
import moviesdb from "../api/moviedb";

import Navigation from "./Navigation";
import Carousel from "./Carousel";

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
      <div>
        <Navigation />
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
