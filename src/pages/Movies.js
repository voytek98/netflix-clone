import React from 'react';

import Carousel from '../components/Carousel';
import Featured from '../components/Featured';
import Lead from '../components/Lead';

import {trendingMoviesToday, upcomingMovies, newFantasyMovies, newCrimeMovies, randomMovie} from '../api/requests';

class Movies extends React.Component {
  state = {
    trendingMoviesToday: [],
    upcomingMovies: [],
    randomMovie: {},
    newFantasyMovies: [],
    newCrimeMovies: []
  };

  componentDidMount() {
    trendingMoviesToday().then(trendingMoviesToday => this.setState({trendingMoviesToday}))
    upcomingMovies().then(upcomingMovies => this.setState({upcomingMovies}));
    randomMovie().then(randomMovie => this.setState({randomMovie}))
    newFantasyMovies().then(newFantasyMovies => this.setState({newFantasyMovies}));
    newCrimeMovies().then(newCrimeMovies => this.setState({newCrimeMovies}));
  };
  
  render() {
    return (
      <div className="main-content">
        <Lead movie={ this.state.randomMovie } />
        <Carousel
          title="Popular today"
          moviesList={this.state.trendingMoviesToday}
          first={true}
          />
        <Featured title={randomMovie} />
        <Carousel 
          title="Upcoming"
          moviesList={this.state.upcomingMovies}
          />
        <Carousel
          title="Fantasy"
          moviesList={this.state.newFantasyMovies} 
        />
        <Carousel 
          title="Crime"
          moviesList={this.state.newCrimeMovies}
        />
      </div>
    )
  }
}

export default Movies;