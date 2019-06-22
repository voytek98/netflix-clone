import React from "react";
import moviesdb from "../api/moviedb";

import "../assets/styles/styles.css";

import Carousel from "./Carousel";
import Lead from "./Lead";
import Navigation from "./Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingList: [],
      topRatedMovies: [],
      randomTitle: {}
    };
  }

  getTrending = async () => {
    // Get list of trending movies / tv shows
    let res = await moviesdb.get("/trending/all/week", {
      params: { api_key: process.env.REACT_APP_API }
    });
    
    let maxNum = res.data.results.length;
    let randomNum = Math.floor(Math.random() * maxNum);

    this.setState({ trendingList: res.data.results.slice(0, 10) });
    this.setState({ randomTitle: res.data.results[randomNum] });
  }

  getTopRatedMovies = async () => {
    let res = await moviesdb.get("/movie/top_rated", {
      params: { api_key: process.env.REACT_APP_API },
      with_genres: 18
    });
    
    console.log(res.data.results)
    this.setState({ topRatedMovies: res.data.results.slice(0, 10) })
  }

  componentDidMount() {
    this.getTrending();
    this.getTopRatedMovies();
  }

  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <Lead movie={ this.state.randomTitle } />
        <Carousel
          title="Trending Now"
          moviesList={this.state.trendingList}
          first={true}
        />
        <Carousel
          title="Top Rated"
          moviesList={this.state.topRatedMovies} 
        />
        <Carousel title="Trending Now" moviesList={this.state.trendingList} />
        <Carousel title="Trending Now" moviesList={this.state.trendingList} />
      </div>
    );
  }
}

export default App;
