import React from 'react';

import Carousel from '../components/Carousel';
import Lead from '../components/Lead';
import Featured from "../components/Featured";

import {trending, popularNetflix, topRatedMovies, newComedyMovies, randomNetflixTitle} from '../api/requests';

class HomePage extends React.Component {
  state = {
    trending: [],
    popularNetflix: [],
    randomNetflixTitle: {},
    topRatedMovies: [],
    newComedyMovies: []
  };

  componentDidMount() {
    trending().then(trending => this.setState({trending}))
    popularNetflix().then(popularNetflix => this.setState({popularNetflix}));
    randomNetflixTitle().then(randomNetflixTitle => this.setState({randomNetflixTitle}))
    topRatedMovies().then(topRatedMovies => this.setState({topRatedMovies}));
    newComedyMovies().then(newComedyMovies => this.setState({newComedyMovies}));
  };
  
  render() {
    return (
      <div className="main-content">
        <Lead movie={ this.state.randomNetflixTitle } />
        <Carousel
          title="Trending Now"
          moviesList={this.state.trending}
          first={true}
        />
        <Carousel 
          title="Popular on Netflix"
          moviesList={this.state.popularNetflix}
          noMargin={true}
        />
        <Featured
          title={randomNetflixTitle}
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
    )
  }
}

export default HomePage;