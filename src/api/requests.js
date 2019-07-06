import moviesdb from "../api/moviedb";

// Genres list
export const genres = async () => {
  let res = await moviesdb.get("/genre/movie/list", {
    params: { api_key: process.env.REACT_APP_API }
  });

  return res.data.genres;
}

// Trending
export const trending = async () => {
  // Get list of trending movies / tv shows
  let res = await moviesdb.get("/trending/all/week", {
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

// Top rated movies
export const topRatedMovies = async () => {
  let res = await moviesdb.get("/movie/top_rated", {
    params: { api_key: process.env.REACT_APP_API },
  });

  let topRatedMovies = res.data.results.slice(0, 5);
  return topRatedMovies;
}

// New Comedies
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