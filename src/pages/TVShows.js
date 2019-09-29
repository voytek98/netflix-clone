import React from 'react';

import Carousel from '../components/Carousel';
import Featured from '../components/Featured';
import Lead from '../components/Lead';

import {trendingTvToday, newActionTvShows, upcomingTvShows, newComedyTvShows, randomTvShow} from '../api/requests';

class TVShows extends React.Component {
  state = {
    trendingTvToday: [],
    newActionTvShows: [],
    randomTvShow: {},
    upcomingTvShows: [],
    newComedyTvShows: []
  };

  componentDidMount() {
    trendingTvToday().then(trendingTvToday => this.setState({trendingTvToday}))
    newActionTvShows().then(newActionTvShows => this.setState({newActionTvShows}));
    randomTvShow().then(randomTvShow => this.setState({randomTvShow}))
    upcomingTvShows().then(upcomingTvShows => this.setState({upcomingTvShows}));
    newComedyTvShows().then(newComedyTvShows => this.setState({newComedyTvShows}));
  };
  
  render() {
    return (
      <div className="main-content">
        <Lead movie={this.state.randomTvShow} />
        <Carousel 
          title="Action"
          moviesList={this.state.newActionTvShows}
          first={true}
          />
        <Carousel
          title="Trending Now"
          moviesList={this.state.trendingTvToday}
          />
        <Carousel
          title="Upcoming"
          moviesList={this.state.upcomingTvShows} 
        />
        <Featured title={randomTvShow}/>
        <Carousel 
          title="Comedy"
          moviesList={this.state.newComedyTvShows}
        />
      </div>
    )
  }
}

export default TVShows;