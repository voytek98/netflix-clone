import moviesdb from "../api/moviedb";

// Trending movies and tv show in last week
export const trending = async () => {
  // Get list of trending movies / tv shows
  let res = await moviesdb.get("/trending/all/week", {
    params: { api_key: process.env.REACT_APP_API }
  });
  
  let trendingList =  res.data.results.slice(0, 5);
  return trendingList
}

// Trending TV shows in last day
export const trendingTvToday = async () => {
  let res = await moviesdb.get("/trending/tv/day", {
    params: { api_key: process.env.REACT_APP_API }
  });
  
  let trendingList =  res.data.results.slice(0, 5);
  return trendingList
}

// Trending movies in last day
export const trendingMoviesToday = async () => {
  let res = await moviesdb.get("/trending/movie/day", {
    params: { api_key: process.env.REACT_APP_API }
  });
  
  let trendingList =  res.data.results.slice(0, 5);
  return trendingList
}

// Popular on netflix
export const popularNetflix = async () => {
  let res = await moviesdb.get("/discover/tv", {
    params: { 
      api_key: process.env.REACT_APP_API,
      with_networks: 213,
      'primary_release_date.lte': Date.now(),
      'vote_count.gte': 60
    }
  })

  let popularNetflixList = res.data.results.slice(0, 5);
  return popularNetflixList;
}

// Random Netflix title
export const randomNetflixTitle = async () => {
  let res = await moviesdb.get("/discover/tv", {
    params: { 
      api_key: process.env.REACT_APP_API,
      with_networks: 213,
      'primary_release_date.lte': Date.now()
    }
  }) 

  let maxNum = res.data.results.length;
  let randomNum = Math.floor(Math.random() * maxNum);

  return res.data.results[randomNum];
}

// Random TV show
export const randomTvShow = async () => {
  let res = await moviesdb.get("/discover/tv", {
    params: { 
      api_key: process.env.REACT_APP_API,
      'primary_release_date.lte': Date.now()
    }
  }) 

  let maxNum = res.data.results.length;
  let randomNum = Math.floor(Math.random() * maxNum);

  return res.data.results[randomNum];
}

// Random movie
export const randomMovie = async () => {
  let res = await moviesdb.get("/discover/movie", {
    params: { 
      api_key: process.env.REACT_APP_API,
      'primary_release_date.lte': Date.now()
    }
  }) 

  let maxNum = res.data.results.length;
  let randomNum = Math.floor(Math.random() * maxNum);

  return res.data.results[randomNum];
}

// Random trending movie/tv show
export const randomTrending = async () => {
  let res = await moviesdb.get("/trending/all/week", {
    params: { api_key: process.env.REACT_APP_API }
  });

  let maxNum = res.data.results.length;
  let randomNum = Math.floor(Math.random() * maxNum);
  
  return res.data.results[randomNum];
}


// Top rated movies
export const topRatedMovies = async () => {
  let res = await moviesdb.get("/movie/top_rated", {
    params: { api_key: process.env.REACT_APP_API },
  });

  let topRatedMovies = res.data.results.slice(0, 5);
  return topRatedMovies;
}

// New Comedy movies
export const newComedyMovies = async () => {
  let res = await moviesdb.get("/discover/movie", {
    params: {
      api_key: process.env.REACT_APP_API,
      with_genres: 35,
      sort_by: 'release_date.desc',
      'primary_release_date.lte': Date.now(),
      'vote_count.gte': 30
    }
  })

  let newComedyMovies = res.data.results.slice(0, 5);
  return newComedyMovies;
}

// New Fantasy movies
export const newFantasyMovies = async () => {
  let res = await moviesdb.get("/discover/movie", {
    params: {
      api_key: process.env.REACT_APP_API,
      with_genres: 14,
      sort_by: 'release_date.desc',
      'primary_release_date.lte': Date.now(),
      'vote_count.gte': 30
    }
  })

  let newFantasyMovies = res.data.results.slice(0, 5);
  return newFantasyMovies;
}

// New Crime movies
export const newCrimeMovies = async () => {
  let res = await moviesdb.get("/discover/movie", {
    params: {
      api_key: process.env.REACT_APP_API,
      with_genres: 80,
      sort_by: 'release_date.desc',
      'primary_release_date.lte': Date.now(),
      'vote_count.gte': 30
    }
  })

  let newCrimeMovies = res.data.results.slice(0, 5);
  return newCrimeMovies;
}

// New Scifi movies
export const newScifiMovies = async () => {
  let res = await moviesdb.get("/discover/movie", {
    params: {
      api_key: process.env.REACT_APP_API,
      with_genres: 878,
      sort_by: 'release_date.desc',
      'primary_release_date.lte': Date.now(),
      'vote_count.gte': 10
    }
  })

  let newScifiMovies = res.data.results.slice(0, 5);
  return newScifiMovies;
}

// New Animation movies
export const newAnimationMovies = async () => {
  let res = await moviesdb.get("/discover/movie", {
    params: {
      api_key: process.env.REACT_APP_API,
      with_genres: 16,
      sort_by: 'release_date.desc',
      'primary_release_date.lte': Date.now(),
      'vote_count.gte': 10
    }
  })

  let newAnimationMovies = res.data.results.slice(0, 5);
  return newAnimationMovies;
}

// New Comedy tv shows
export const newComedyTvShows = async () => {
  let res = await moviesdb.get("/discover/tv", {
    params: {
      api_key: process.env.REACT_APP_API,
      with_genres: 35,
      sort_by: 'release_date.desc',
      'primary_release_date.lte': Date.now(),
      'vote_count.gte': 30
    }
  })

  let newComedyTvShows = res.data.results.slice(0, 5);
  return newComedyTvShows;
}
// New Action tv shows
export const newActionTvShows = async () => {
  let res = await moviesdb.get("/discover/tv", {
    params: {
      api_key: process.env.REACT_APP_API,
      with_genres: 28,
      sort_by: 'release_date.desc',
      'primary_release_date.lte': Date.now(),
      'vote_count.gte': 30
    }
  })

  let newActionTvShows = res.data.results.slice(0, 5);
  return newActionTvShows;
}

// New Horror tv shows
export const newHorrorTvShows = async () => {
  let res = await moviesdb.get("/discover/tv", {
    params: {
      api_key: process.env.REACT_APP_API,
      with_genres: 27,
      sort_by: 'release_date.desc',
      'primary_release_date.lte': Date.now(),
      'vote_count.gte': 10
    }
  })

  let newHorrorTvShows = res.data.results.slice(0, 5);
  return newHorrorTvShows;
}

// Upcoming TV Shows
export const upcomingTvShows = async () => {
  let res = await moviesdb.get("/discover/tv", {
    params: { 
      api_key: process.env.REACT_APP_API,
      sort_by: 'popularity.desc',
      'first_air_date.gte' : Date.now()
    }
  }) 

  let upcomingTvShows = res.data.results.slice(0, 5);

  return upcomingTvShows;
}
// Upcoming movies
export const upcomingMovies = async () => {
  let res = await moviesdb.get("/discover/movie", {
    params: { 
      api_key: process.env.REACT_APP_API,
      sort_by: 'popularity.desc',
      'primary_release_date.gte' : Date.now()
    }
  }) 

  let upcomingMovies = res.data.results.slice(0, 5);

  return upcomingMovies;
}
