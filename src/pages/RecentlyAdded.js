import React from 'react';

import Carousel from '../components/Carousel';
import Featured from '../components/Featured';
import Lead from '../components/Lead';

import {newScifiMovies, newAnimationMovies, newHorrorTvShows, newComedyTvShows, randomTrending, randomTvShow} from '../api/requests';

class RecentlyAdded extends React.Component {
  state = {
    newScifiMovies: [],
    newAnimationMovies: [],
    randomTrending: {},
    newHorrorTvShows: [],
    newComedyTvShows: []
  };

  componentDidMount() {
    newScifiMovies().then(newScifiMovies => this.setState({newScifiMovies}))
    newAnimationMovies().then(newAnimationMovies => this.setState({newAnimationMovies}));
    randomTrending().then(randomTrending => this.setState({randomTrending}))
    newHorrorTvShows().then(newHorrorTvShows => this.setState({newHorrorTvShows}));
    newComedyTvShows().then(newComedyTvShows => this.setState({newComedyTvShows}));
  };
  
  render() {
    return (
      <div className="main-content">
        <Lead movie={ this.state.randomTrending } />
        <Carousel
          title="Sci-Fi movies"
          moviesList={this.state.newScifiMovies}
          first={true}
          />
        <Carousel 
          title="Animation movies"
          moviesList={this.state.newAnimationMovies}
          />
        <Featured title={randomTvShow} />
        <Carousel
          title="Horror TV Shows"
          moviesList={this.state.newHorrorTvShows} 
        />
        <Carousel 
          title="Comedy TV Shows"
          moviesList={this.state.newComedyTvShows}
        />
      </div>
    )
  }
}

export default RecentlyAdded;