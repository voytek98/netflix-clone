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
      newComedyMovies: [],
      netflixOriginalsMovies: [],
      randomTitle: {}
    };
  }

  getMoviesGenres = async () => {
    let res = await moviesdb.get("/genre/movie/list", {
      params: { api_key: process.env.REACT_APP_API }
    });

    console.log(res.data.genres)
  }

  getTrending = async () => {
    // Get list of trending movies / tv shows
    let res = await moviesdb.get("/trending/all/week", {
      params: { api_key: process.env.REACT_APP_API }
    });
    
    this.setState({ trendingList: res.data.results.slice(0, 10) });
  }

  getTopRatedMovies = async () => {
    let res = await moviesdb.get("/movie/top_rated", {
      params: { api_key: process.env.REACT_APP_API },
    });
    
    this.setState({ topRatedMovies: res.data.results.slice(0, 10) })
  }

  getNewComedyMovies = async () => {
    let res = await moviesdb.get("/discover/movie", {
      params: { 
        api_key: process.env.REACT_APP_API,
        with_genres: 35,
        sort_by: 'release_date.desc',
        'primary_release_date.lte': Date.now(),
        'vote_count.gte': 30
      }
    })

    this.setState({ newComedyMovies: res.data.results.slice(0, 10) })
  }

  getNetflixOriginals = async () => {
    let res = await moviesdb.get("/discover/tv", {
      params: { 
        api_key: process.env.REACT_APP_API,
        with_networks: 213,
        // sort_by: 'release_date.desc',
        'primary_release_date.lte': Date.now(),
        'vote_count.gte': 30
      }
    })

    let maxNum = res.data.results.length;
    let randomNum = Math.floor(Math.random() * maxNum);

    this.setState({ randomTitle: res.data.results[randomNum] });
    this.setState({ netflixOriginalsMovies: res.data.results.slice(0, 10) })
  }

  getNetflix = async () => {
    let res = await moviesdb.get("/search/company", {
      params: {
        api_key: process.env.REACT_APP_API,
        query: 'netflix'
      }
    })

    console.log(res)
  }

  componentDidMount() {
    this.getMoviesGenres();
    this.getTrending();
    this.getTopRatedMovies();
    this.getNewComedyMovies();
    this.getNetflixOriginals();
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
          title="Netflix Originals"
          moviesList={this.state.netflixOriginalsMovies}
        />
        <Carousel
          title="Top Rated"
          moviesList={this.state.topRatedMovies} 
        />
        <Carousel 
          title="Latest Comedy Movies"
          moviesList={this.state.newComedyMovies}
        />
      </div>
    );
  }
}

export default App;
