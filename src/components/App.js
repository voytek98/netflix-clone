import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import moviesdb from "../api/moviedb";

import "../assets/styles/styles.css";

import Carousel from "./Carousel";
import Lead from "./Lead";
import Navigation from "./Navigation";

class App extends React.Component {
  state = {
    scrolled: false,
    trendingList: [],
    topRatedMovies: [],
    newComedyMovies: [],
    popularOnNetflix: [],
    randomTitle: {}
  };

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
    
    this.setState({ trendingList: res.data.results.slice(0, 5) });
  }

  getTopRatedMovies = async () => {
    let res = await moviesdb.get("/movie/top_rated", {
      params: { api_key: process.env.REACT_APP_API },
    });
    
    this.setState({ topRatedMovies: res.data.results.slice(0, 5) })
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

    this.setState({ newComedyMovies: res.data.results.slice(0, 5) })
  }

  getPopularOnNetflix = async () => {
    let res = await moviesdb.get("/discover/tv", {
      params: { 
        api_key: process.env.REACT_APP_API,
        with_networks: 213,
        'primary_release_date.lte': Date.now(),
        'vote_count.gte': 60
      }
    })

    let maxNum = res.data.results.length;
    let randomNum = Math.floor(Math.random() * maxNum);

    this.setState({ randomTitle: res.data.results[randomNum] });
    this.setState({ popularOnNetflix: res.data.results.slice(0, 5) })
  }

  componentDidMount() {
    this.getMoviesGenres();
    this.getTrending();
    this.getTopRatedMovies();
    this.getNewComedyMovies();
    this.getPopularOnNetflix();
    window.addEventListener("scroll", () => {
      const top = window.scrollY < 20;
      if (top) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  

  render() {
    return (
      <div className="wrapper">
        <Navigation nav={this.state.scrolled} />
        <Lead movie={ this.state.randomTitle } />
        <Carousel
          title="Trending Now"
          moviesList={this.state.trendingList}
          first={true}
        />
        <Carousel 
          title="Popular on Netflix"
          moviesList={this.state.popularOnNetflix}
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
