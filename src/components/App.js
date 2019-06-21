import React from "react";
import moviesdb from "../api/moviedb";

import Navigation from './Navigation';
import Trending from './Trending';
import Carousel from './Carousel';

class App extends React.Component {
  state = {
    trendingList: []
  };

  componentDidMount() {
    // Get list of trending movies / tv shows
    (async () => {
      const response = await moviesdb.get("/trending/all/week", {
        params: { api_key: process.env.REACT_APP_API }
      });

      this.setState({ trendingList: response.data.results });
    })();
  }
  
  render() {
    return (
      <div>

        <Navigation />
        {/* <Trending trending={this.state.trendingList} /> */}
        <Carousel />
      </div>
    )
  }
}

export default App;
