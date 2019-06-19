import React from "react";
import moviesdb from "../api/moviedb";

import Trending from './Trending';

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
      <Trending trending={this.state.trendingList} />
    )
  }
}

export default App;
