import React from "react";
import moviesdb from "../api/moviedb";

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

      this.setState({ trendingList: response.data });
    })();
  }

  render() {
    return <h1>Hello world!</h1>;
  }
}

export default App;
